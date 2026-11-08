/** Determine if a given file path matches any of the provided filter patterns. */
export function filterTransformTarget(
  filter: RegExp | RegExp[],
  path: string,
): boolean {
  if (Array.isArray(filter)) {
    return filter.some((f: RegExp): boolean => f.test(path));
  }
  return filter.test(path);
}
