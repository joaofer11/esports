export const convertHourStringToMinutes = (hourStr: string) => {
  const [hours, minutes] = hourStr.split(":").map(Number);
  const minutesAmount = hours * 60 + minutes;

  return minutesAmount;
};
