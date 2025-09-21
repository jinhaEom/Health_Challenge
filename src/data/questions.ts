export interface Question {
    id: number;
    question: string;
    options: string[];
  }
  
  export interface SurveyResult {
    [key: number]: number;
  }
  
  export const questions: Question[] = [
    {
      id: 1,
      question: "하루에 물을 얼마나 마시나요?",
      options: ["1잔 미만", "1-3잔", "4-6잔", "7잔 이상"]
    },
    {
      id: 2,
      question: "1주일에 운동을 몇번 하시나요?",
      options: ["전혀 안함", "1-2회", "3-4회", "5회 이상"]
    },
    {
      id: 3,
      question: "평균 수면 시간은 몇시간 정도인가요?",
      options: ["5시간 미만", "5-6시간", "7-8시간", "9시간 이상"]
    },
    {
      id: 4,
      question: "스트레스 수준은 어느정도인가요?",
      options: ["매우 높음", "높음", "보통", "낮음"]
    },
    {
      id: 5,
      question: "식사 시간이 규칙적인가요?",
      options: ["불규칙", "가끔 규칙적", "대체로 규칙적", "매우 규칙적"]
    }
  ];