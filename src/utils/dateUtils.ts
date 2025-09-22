/**
 * 날짜를 YYYY.MM.DD 형식으로 포맷팅
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(
    2,
    '0',
  )}.${String(date.getDate()).padStart(2, '0')}`;
};

/**
 * 시간을 HH:MM 형식으로 포맷팅
 */
export const formatTime = (dateString: string): string => {
  const date = new Date(dateString);
  return `${String(date.getHours()).padStart(2, '0')}:${String(
    date.getMinutes(),
  ).padStart(2, '0')}`;
};

/**
 * 날짜와 시간을 함께 포맷팅 (YYYY.MM.DD HH:MM)
 */
export const formatDateTime = (dateString: string): string => {
  return `${formatDate(dateString)} ${formatTime(dateString)}`;
};
