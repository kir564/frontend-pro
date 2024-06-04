export const classNames = (
  cls: string,
  mods: Record<string, boolean | string> = {},
  additional: string[] = [],
): string => {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([_, value]) => value)
      .map(([classNames]) => classNames),
    ...additional.filter(Boolean),
  ].join(' ');
};
