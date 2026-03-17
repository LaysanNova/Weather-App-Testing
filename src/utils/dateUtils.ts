export function getYesterdayDate(): string {
  const date = new Date();
  date.setDate(date.getDate() - 1);

  return date.toISOString().split('T')[0];
}

export function getUnixTimestamp(title: string | null): number {
  if (!title) {
    throw new Error('Timestamp attribute is missing');
  }

  return Number(title.split(' ')[1]);
}
