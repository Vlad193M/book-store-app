export function parseSearchParams(params: {
  [key: string]: string | string[] | undefined;
}): URLSearchParams {
  const query = new URLSearchParams();
  
  for (const key in params) {
    const value = params[key];
    if (typeof value === 'string') {
      query.append(key, value);
    } else if (Array.isArray(value)) {
      value.forEach((val) => query.append(key, val));
    }
  }
  return query;
}
