export function calculatorSkipPage({
  page,
  limit,
}: {
  page: string;
  limit: string;
}): number {
  const defaultPage = +page || 1;
  const defaultLimit = +limit || 10;

  return +(defaultPage - 1) * +defaultLimit;
}
