export const classNames = (
  cls: string,
  mods: Record<string, boolean | string> = {},
  additional: string[] = []
): string => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => value)
      .map(([classNames]) => classNames),
  ].join(' ');
};
