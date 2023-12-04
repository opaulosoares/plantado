import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Stack,
    useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { tokens } from "../../theme";

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
    const [canGoNext, setCanGoNext] = useState(false);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    useEffect(() => {
        setCanGoNext(questions.every((question) => !!question.selectedAnswer));
    }, [questions]);

    const handleOnRadiOGroupChanges = (question: string, value: string) => {
        const newQuestions = questions.map((item) =>
            item.question === question
                ? { ...item, selectedAnswer: value }
                : item
        );
        onChange(newQuestions);
    };

    return (
        <form style={{ height: "100%" }}>
            <Stack sx={{ gap: 3, height: "100%", px: 32, pt: 6 }}>
                {questions.map((item) => (
                    <FormControl
                        key={item.question}
                        sx={{
                            bgcolor: colors.neutral[4],
                            p: 2,
                            borderRadius: 2,
                        }}
                    >
                        <FormLabel tabIndex={0}>{item.question}</FormLabel>
                        <RadioGroup
                            row
                            name={item.question}
                            value={item.selectedAnswer ?? null}
                            aria-label={item.question}
                            onChange={(e) =>
                                handleOnRadiOGroupChanges(
                                    item.question,
                                    e.target.value
                                )
                            }
                        >
                            {item.answers.map((item2) => (
                                <FormControlLabel
                                    key={item2.value}
                                    value={item2.value}
                                    control={<Radio />}
                                    label={item2.text}
                                    tabIndex={0}
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>
                ))}
                <Stack
                    direction="row"
                    justifyContent={"flex-end"}
                    gap={2}
                    sx={{
                        width: "100%",
                    }}
                >
                    {handleGoBack && (
                        <Button
                            variant="outlined"
                            onClick={handleGoBack}
                            size="large"
                            startIcon={<NavigateBefore />}
                        >
                            Voltar
                        </Button>
                    )}
                    <Button
                        variant="contained"
                        onClick={handleGoNext}
                        size="large"
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
