export interface ProductReview {
    id: number;
    score: string;
    content: string;
    reviewer?: string;
    date?: string;
  }
  
  export const ProductReviews: { [productId: number]: ProductReview[] } = {
    1: [
      {
        id: 1,
        score: '5',
        content: '피로가 줄고 아침에 상쾌하게 일어날 수 있었어요. 꾸준히 먹을 생각입니다.',
        reviewer: '건강지킴이',
        date: '2024-09-15'
      },
      {
        id: 2,
        score: '4',
        content: '가격 대비 성분 구성이 좋아요. 다만 알약이 조금 커서 삼키기 힘들었습니다.',
        reviewer: '영양제러버',
        date: '2024-09-10'
      },
      {
        id: 3,
        score: '5',
        content: '복용 후 컨디션이 안정적이에요. 속에 부담도 없어서 만족합니다.',
        reviewer: 'wellness99',
        date: '2024-09-08'
      }
    ],
    2: [
      {
        id: 4,
        score: '4',
        content: '효과는 좋은데 포장이 다소 불편했습니다.',
        reviewer: '하루한알',
        date: '2024-09-12'
      },
      {
        id: 5,
        score: '5',
        content: '먹고 나서 면역력이 좋아진 것 같아요. 재구매 의사 있습니다.',
        reviewer: '행복바이러스',
        date: '2024-09-09'
      }
    ],
    3: [
      {
        id: 6,
        score: '5',
        content: '속쓰림이 없고 흡수도 잘 되는 것 같아요.',
        reviewer: 'fitman',
        date: '2024-09-14'
      },
      {
        id: 7,
        score: '4',
        content: '꾸준히 먹기엔 좋아요. 다만 알약 냄새가 조금 아쉽습니다.',
        reviewer: '리뷰어J',
        date: '2024-09-11'
      },
      {
        id: 8,
        score: '3',
        content: '효과는 아직 잘 모르겠지만 무난합니다.',
        reviewer: '초보복용자',
        date: '2024-09-07'
      }
    ],
    4: [
      {
        id: 9,
        score: '5',
        content: '에너지 보충에 도움이 되는 것 같아요. 만족합니다.',
        reviewer: '스포츠맨',
        date: '2024-09-13'
      },
      {
        id: 10,
        score: '4',
        content: '좋긴 한데 배송이 조금 늦었네요.',
        reviewer: '빠른배송원함',
        date: '2024-09-06'
      }
    ],
    5: [
      {
        id: 11,
        score: '4',
        content: '효과는 괜찮았는데 하루 한 알보단 두 알이 더 맞는 것 같습니다.',
        reviewer: '영양관리중',
        date: '2024-09-16'
      },
      {
        id: 12,
        score: '5',
        content: '체력이 좋아진 느낌이에요. 계속 복용할 예정입니다.',
        reviewer: '건강한하루',
        date: '2024-09-05'
      }
    ],
    6: [
      {
        id: 13,
        score: '5',
        content: '피곤이 덜 쌓이고 집중력이 올라간 것 같아요.',
        reviewer: '집중력업',
        date: '2024-09-17'
      },
      {
        id: 14,
        score: '4',
        content: '나쁘지 않지만 캡슐이 조금 크네요.',
        reviewer: '삼키기힘듦',
        date: '2024-09-12'
      },
      {
        id: 15,
        score: '5',
        content: '알약 크기 외에는 만족도 최상입니다.',
        reviewer: '재구매예정',
        date: '2024-09-08'
      }
    ],
    7: [
      {
        id: 16,
        score: '4',
        content: '꾸준히 먹으니 확실히 활력이 생겼습니다.',
        reviewer: '활력충전',
        date: '2024-09-15'
      },
      {
        id: 17,
        score: '3',
        content: '효과는 아직 잘 모르겠고, 맛이 조금 아쉽습니다.',
        reviewer: '기대중',
        date: '2024-09-10'
      }
    ],
    8: [
      {
        id: 18,
        score: '5',
        content: '포장도 깔끔하고 알약 크기도 적당해요. 만족합니다.',
        reviewer: '깔끔쟁이',
        date: '2024-09-14'
      },
      {
        id: 19,
        score: '4',
        content: '가격이 조금 아쉽지만 효과는 괜찮아요.',
        reviewer: '실속파',
        date: '2024-09-09'
      }
    ],
    9: [
      {
        id: 20,
        score: '5',
        content: '한 달 복용 후 확실히 피로감이 줄었어요.',
        reviewer: '피로탈출',
        date: '2024-09-16'
      },
      {
        id: 21,
        score: '4',
        content: '좋긴 한데 알약 냄새가 조금 강합니다.',
        reviewer: '민감러',
        date: '2024-09-11'
      }
    ],
    10: [
      {
        id: 22,
        score: '4',
        content: '효과는 좋은데 가격이 조금 더 저렴했으면 좋겠네요.',
        reviewer: '가성비중요',
        date: '2024-09-13'
      },
      {
        id: 23,
        score: '5',
        content: '피부가 좋아진 느낌이에요. 만족합니다.',
        reviewer: '피부미인',
        date: '2024-09-07'
      }
    ],
    11: [
      {
        id: 24,
        score: '5',
        content: '하루 한 알로 간편하게 건강 챙길 수 있어 좋아요.',
        reviewer: '간편건강',
        date: '2024-09-15'
      },
      {
        id: 25,
        score: '4',
        content: '효과는 있지만 알약이 조금 커요.',
        reviewer: '소식가',
        date: '2024-09-10'
      }
    ],
    12: [
      {
        id: 26,
        score: '4',
        content: '꾸준히 먹으니 피곤이 덜한 것 같습니다.',
        reviewer: '꾸준복용',
        date: '2024-09-12'
      },
      {
        id: 27,
        score: '5',
        content: '재구매했습니다. 가족 모두 만족 중이에요.',
        reviewer: '가족건강',
        date: '2024-09-08'
      }
    ],
    13: [
      {
        id: 28,
        score: '4',
        content: '맛과 냄새는 무난하고 복용감이 좋아요.',
        reviewer: '복용러',
        date: '2024-09-14'
      },
      {
        id: 29,
        score: '3',
        content: '아직 효과를 잘 모르겠습니다. 좀 더 지켜봐야 할 듯.',
        reviewer: '지켜보자',
        date: '2024-09-09'
      }
    ],
    14: [
      {
        id: 30,
        score: '5',
        content: '활력이 돌고 집중이 잘 돼요.',
        reviewer: '집중짱',
        date: '2024-09-16'
      },
      {
        id: 31,
        score: '4',
        content: '효과는 있는데 캡슐 크기가 아쉽습니다.',
        reviewer: '작았으면',
        date: '2024-09-11'
      }
    ],
    15: [
      
    ]
  };
  