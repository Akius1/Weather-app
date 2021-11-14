

export const constructUrl = (
  url,
  params
) => {
  for (let key in params) {
    const pattern = new RegExp(`:${key}[?]?`);
    url = url.replace(pattern, params[key].toString());
  }
  return url;
};

