export const convertMinutesToHourString = (minutesAmount: number) => {
  const hoursStr = String(Math.floor(minutesAmount / 60));
  const minutesStr = String(minutesAmount % 60);

  return `${hoursStr.padStart(2, "0")}:${minutesStr.padStart(2, '0')}`;
};
