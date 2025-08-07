export function createFilter(paramsObject: Record<string, any>): boolean {
  return Object.values(paramsObject).some(
    (value) => value !== null && value !== undefined && value !== ''
  );
}
