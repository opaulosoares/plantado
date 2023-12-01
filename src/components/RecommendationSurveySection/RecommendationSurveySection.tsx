import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import { useEffect, useState } from "react";

export type Questions = Array<{
  question: string;
  selectedAnswer?: string;
  answers: Array<{
    text: string;
    value: string;
  }>;
}>;

export interface Props {
  questions: Questions;
  onChange: (state: Questions) => void;
  handleGoNext: VoidFunction;
  handleGoBack?: VoidFunction;
}

function RecommendationSurveySection(props: Readonly<Props>) {
  const { questions, onChange, handleGoNext, handleGoBack } = props;
  const [canGoNext, setCanGoForward] = useState(false);

  useEffect(() => {
    setCanGoForward(questions.every((question) => !!question.selectedAnswer));
  }, [questions]);

  const handleOnRadiOGroupChanges = (question: string, value: string) => {
    const newQuestions = questions.map((item) =>
      item.question === question ? { ...item, selectedAnswer: value } : item
    );
    onChange(newQuestions);
  };

  return (
    <form>
      <Stack sx={{ gap: 3, alignItems: "center" }}>
        {questions.map((item) => (
          <FormControl
            key={item.question}
            sx={{ gap: 1, alignItems: "center" }}
          >
            <FormLabel>{item.question}</FormLabel>
            <RadioGroup
              row
              name={item.question}
              value={item.selectedAnswer ?? null}
              aria-label={item.question}
              onChange={(e) =>
                handleOnRadiOGroupChanges(item.question, e.target.value)
              }
              sx={{ dispaly: "flex", alignItems: "center" }}
            >
              {item.answers.map((item2) => (
                <FormControlLabel
                  key={item2.value}
                  value={item2.value}
                  control={<Radio />}
                  label={item2.text}
                />
              ))}
            </RadioGroup>
          </FormControl>
        ))}
        <Stack
          direction="row"
          sx={{ justifyContent: "space-evenly", width: "100%", marginTop: 2 }}
        >
          {handleGoBack && (
            <Button
              variant="outlined"
              onClick={handleGoBack}
              startIcon={<NavigateBefore />}
            >
              Voltar
            </Button>
          )}
          <Button
            variant="contained"
            onClick={handleGoNext}
            endIcon={<NavigateNext />}
            disabled={!canGoNext}
          >
            Próximo
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}

export default RecommendationSurveySection;
