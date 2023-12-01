import { Questions } from "../../components/RecommendationSurveySection/RecommendationSurveySection";

interface SuverySection {
  title: string;
  questions:  Questions;
}

export const SurveyQuestions: Array<SuverySection> = [
  {
    title: "Perguntas Gerais",
    questions: [
      {
        question: "Qual é o seu aroma favorito?",
        answers: [
          { text: "Floral", value: "floral" },
          { text: "Cítrico", value: "citrico" },
          { text: "Fresco", value: "fresco" },
          { text: "Não tenho certeza", value: "nao_certeza_aroma" },
        ],
      },
      {
        question:
          "Quanto tempo você dedica aos cuidados das plantas por semana?",
        answers: [
          { text: "Menos de 30 min", value: "menos_30_min" },
          { text: "30 min - 1 hora", value: "1_hora" },
          { text: "1-2 horas", value: "2_horas" },
          { text: "Mais de 2 horas", value: "mais_2_horas" },
        ],
      },
      {
        question: "Qual tamanho de plantas você está interessado?",
        answers: [
          { text: "Pequeno (mesa)", value: "pequeno" },
          { text: "Médio (chão)", value: "medio" },
          { text: "Grande (suporte)", value: "grande" },
          { text: "Extra Grande (destaque)", value: "extra_grande" },
        ],
      },
      {
        question: "Você tem animais de estimação em casa?",
        answers: [
          { text: "Sim", value: "sim_animais_estimacao" },
          { text: "Não", value: "nao_animais_estimacao" },
          { text: "Planejo ter", value: "planejo_ter_animais" },
          { text: "Não tenho certeza", value: "nao_certeza_animais" },
        ],
      },
    ],
  },
  {
    title: "Perguntas sobre o Ambiente",
    questions: [
      {
        question: "Em que ambiente você planeja colocar suas plantas?",
        answers: [
          { text: "Interno", value: "interno" },
          { text: "Externo", value: "externo" },
          { text: "Ambos", value: "ambos" },
          { text: "Não tenho certeza", value: "nao_certeza_ambiente" },
        ],
      },
      {
        question: "Quanta luz solar o seu espaço recebe em média?",
        answers: [
          { text: "Muita luz", value: "muita_luz" },
          { text: "Luz moderada", value: "luz_moderada" },
          { text: "Pouca luz", value: "pouca_luz" },
          { text: "Sombra", value: "sombra" },
        ],
      },
      {
        question: "Como você julga a temperatura do local onde colocará a planta?",
        answers: [
          { text: "Quente", value: "quente" },
          { text: "Moderada", value: "moderada" },
          { text: "Fria", value: "fria" },
          { text: "Não tenho certeza", value: "nao_certeza_local" },
        ],
      },

      {
        question: "Quanto de espaço disponível você tem para plantas?",
        answers: [
          { text: "Pouco espaço", value: "pouco_espaco" },
          { text: "Espaço moderado", value: "espaco_moderado" },
          { text: "Muito espaço", value: "muito_espaco" },
          { text: "Não tenho certeza", value: "nao_certeza_espaco" },
        ],
      },
    ],
  },
];
