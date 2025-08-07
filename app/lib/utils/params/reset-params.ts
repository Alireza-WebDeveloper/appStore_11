export function resetParams(
  paramsObject: Record<string, any>,
  defaultValue: string = ''
): { name: string; value: string }[] {
  return Object.keys(paramsObject).map((key) => ({
    name: key,
    value: defaultValue,
  }));
}
