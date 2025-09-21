export const getHealthAdvice = (score: number) => {
    if (score >= 80) return { level: "매우 건강", color: "#10B981", advice: "훌륭해요!" };
    if (score >= 60) return { level: "건강", color: "#34D399", advice: "전반적으로 건강상태가 양호해요." };
    if (score >= 40) return { level: "보통", color: "#FBBF24", advice: "몇 가지 생활 습관을 개선해보세요." };
    return { level: "주의 필요", color: "#EF4444", advice: "건강관리에 주의가 필요해요." };
  };