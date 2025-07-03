export function searchParamsToObject(searchParams: URLSearchParams): {
  [key: string]: string[];
} {
  return Array.from(searchParams.entries()).reduce<{
    [key: string]: string[];
  }>((acc, [key, value]) => {
    if (!acc[key]) {
      acc[key] = [value];
    } else {
      acc[key].push(value);
    }
    return acc;
  }, {});
}
