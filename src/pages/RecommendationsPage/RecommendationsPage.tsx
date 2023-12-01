/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stepper, Step, StepLabel, useEventCallback } from "@mui/material";
import RecommendationSurveySection, {
  Questions,
} from "../../components/RecommendationSurveySection/RecommendationSurveySection";
import BasePage from "../../templates/BasePage/BasePage";
import { SurveyQuestions } from "./survey-questions";
import { useMemo, useState } from "react";
import db from "../../data/db.json";
import RecommendedProducts from "../../components/RecommendedProducts/RecommendedProducts";
import { useNavigate } from "react-router-dom";

type StepType = 0 | 1 | 2;

const generateProductsId = (products: any[], quantity: number): any[] => {
  const allProductIds = products.map((product) => product.id);
  const recommendedProcutIds = new Set();

  while (recommendedProcutIds.size < quantity) {
    const randomId = Math.round(Math.random() * (allProductIds.length - 1));
    recommendedProcutIds.add(allProductIds[randomId]);
  }

  return Array.from(recommendedProcutIds);
};

function RecommendationsPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<StepType>(0);
  const [surveyQuestions, setSurveyQuestions] = useState(SurveyQuestions);
  const stepperSteps = useMemo(
    () => [...SurveyQuestions.map((survey) => survey.title), "Recomendações"],
    []
  );
  const [recommendedProductsIds, setRecommendedProductsIds] = useState(
    generateProductsId(db.produtos.plantas, 3)
  );

  const handleSurveyChanges = (title: string, questions: Questions) => {
    setSurveyQuestions((list) =>
      list.map((item) =>
        item.title === title ? { ...item, questions: questions } : item
      )
    );
  };

  const handleGoNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 2) as StepType);
  };

  const handleGoBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0) as StepType);
  };

  const handleResetTest = () => {
    setSurveyQuestions(SurveyQuestions);
    setCurrentStep(0);
    setRecommendedProductsIds(generateProductsId(db.produtos.plantas, 3));
  };

  const handleBackHome = useEventCallback(() => {
    navigate("/");
  }, []);

  const stepperComponent = useMemo(() => {
    if ([0, 1].includes(currentStep)) {
      const surveySection = surveyQuestions[currentStep];

      return (
        <RecommendationSurveySection
          key={surveySection.title}
          questions={surveySection.questions}
          onChange={(newState) =>
            handleSurveyChanges(surveySection.title, newState)
          }
          handleGoNext={handleGoNext}
          handleGoBack={currentStep > 0 ? handleGoBack : undefined}
        />
      );
    } else if (currentStep === 2) {
      return (
        <RecommendedProducts
          productIds={recommendedProductsIds as [number, number, number]}
          handleResetTest={handleResetTest}
          handleBackHome={handleBackHome}
        />
      );
    }

    return <span>Error</span>;
  }, [currentStep, handleBackHome, recommendedProductsIds, surveyQuestions]);

  return (
    <BasePage>
      <Stepper
        activeStep={currentStep + 1}
        alternativeLabel
        sx={{ marginBottom: 5, marginTop: 3 }}
      >
        {stepperSteps.map((title) => (
          <Step key={title}>
            <StepLabel>{title}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <section style={{ marginTop: 16, marginBottom: 16 }}>
        {stepperComponent}
      </section>
    </BasePage>
  );
}

export default RecommendationsPage;
