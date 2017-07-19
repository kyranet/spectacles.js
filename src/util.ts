export const flatten = (obj: any) => {
  const out: any = {};
  Object.keys(obj).forEach((k: string) => {
    out[k] = JSON.stringify(obj[k]);
  });
  return out;
};
