import dayjs from 'dayjs';

// 检查是否为周末
export function isWeekend(dateStr: string): boolean {
  const dayOfWeek = dayjs(dateStr).day();

  return dayOfWeek === 0 || dayOfWeek === 6;
}

export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
