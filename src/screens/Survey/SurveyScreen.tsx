import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions, Animated } from 'react-native';
import { questions, SurveyResult } from '../../data/questions';
import { getHealthAdvice } from '../../data/healthUtils';
import { useRootNavigation } from '../../navigation/Navigation';

const { width } = Dimensions.get('window');

const SurveyScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<SurveyResult>({});
  const [showResult, setShowResult] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const navigation = useRootNavigation();
  const handleAnswer = (questionId: number, answerIndex: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();

      setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
        scrollViewRef.current?.scrollTo({
          x: (currentIndex + 1) * width,
          animated: true,
        });
      }, 200);
    } else {
      setShowResult(true);
    }
  };

  const calculateHealthScore = () => {
    let totalScore = 0;
    Object.values(answers).forEach(answer => {
      totalScore += answer + 1;
    });
    return Math.round((totalScore / (questions.length * 4)) * 100);
  };



  if (showResult) {
    const score = calculateHealthScore();
    const { level, color, advice } = getHealthAdvice(score);

    return (
      <View className="flex-1 bg-background">
        <ScrollView>
          <View className="flex-1 justify-center items-center p-[24px]">
            <Text className="text-[30px] font-bold text-gray-800 mb-[24px]">건강체크 결과</Text>

            <View className="bg-background rounded-[16px] p-[32px] w-full items-center mb-[32px]">
              <Text className="text-[60px] font-bold mb-[16px]" style={{ color }}>{score}점</Text>
              <Text className="text-[20px] font-semibold mb-[8px]" style={{ color }}>{level}</Text>
              <Text className="text-gray-600 text-center">{advice}</Text>
            </View>

            <View className="w-full">
              <Text className="text-[18px] font-semibold text-gray-800 mb-[16px]">상세 결과</Text>
              {questions.map((question) => (
                <View key={question.id} className="bg-white border border-gray rounded-[8px] p-[16px] mb-[12px]">
                  <Text className="text-[14px] text-gray mb-[4px]">{question.question}</Text>
                  <Text className="text-base font-medium text-gray">
                    {question.options[answers[question.id] || 0]}
                  </Text>
                </View>
              ))}
            </View>

            <TouchableOpacity
              className="bg-gray rounded-[12px] py-[16px] px-[32px] mt-[24px]"
              onPress={() => {
                setCurrentIndex(0);
                setAnswers({});
                setShowResult(false);
              }}
            >
              <Text className="text-white text-[18px] font-semibold">다시 검사하기</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-light-blue rounded-[12px] py-[16px] px-[32px] mt-[24px]"
              onPress={() => {
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'MainTabs' }],
                });
              }}
            >
              <Text className="text-white text-[18px] font-semibold">앱 이용하기</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white">
      <View className="bg-light-blue pt-[48px] pb-[24px] px-[24px]">
        <Text className="text-white text-[24px] font-bold">건강체크</Text>
        <View className="flex-row mt-[16px]">
          {questions.map((_, index) => (
            <View
              key={index}
              className={`h-[12px] flex-1 mx-[4px] rounded-[12px] ${index <= currentIndex ? 'bg-white' : 'bg-blue'
                }`}
            />
          ))}
        </View>
        <Text className="text-white text-[14px] mt-[8px]">
          {currentIndex + 1} / {questions.length}
        </Text>
      </View>

      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        <View className="flex-1 p-[24px]">
          <Text className="text-[24px] font-bold text-gray-800 mb-[32px]">
            {questions[currentIndex].question}
          </Text>

          <View className="flex-1">
            {questions[currentIndex].options.map((option, index) => (
              <TouchableOpacity
                key={index}
                className={`p-[16px] mb-[16px] rounded-[12px] border-2 ${answers[questions[currentIndex].id] === index
                    ? 'border-light-blue'
                    : 'border-gray bg-white'
                  }`}
                onPress={() => handleAnswer(questions[currentIndex].id, index)}
              >
                <Text
                  className={`text-[18px] ${answers[questions[currentIndex].id] === index
                      ? 'text-light-blue font-semibold'
                      : 'text-dark-gray'
                    }`}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            className={`py-[16px] px-[32px] rounded-[12px] ${answers[questions[currentIndex].id] !== undefined
                ? 'bg-light-blue'
                : 'bg-light-gray'
              }`}
            onPress={handleNext}
            disabled={answers[questions[currentIndex].id] === undefined}
          >
            <Text className="text-white text-[18px] font-semibold text-center">
              {currentIndex === questions.length - 1 ? '결과 보기' : '다음'}
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

export default SurveyScreen;