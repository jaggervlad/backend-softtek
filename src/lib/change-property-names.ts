export function changePropertyNames(
  obj: Record<string, string>,
  translations: Record<string, string>
): Record<string, string> {
  const newObj: Record<string, string> = {};

  for (const key in obj) {
    if (translations.hasOwnProperty(key)) {
      newObj[translations[key]] = obj[key];
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
