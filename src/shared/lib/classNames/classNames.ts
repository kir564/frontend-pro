export const classNames = (
  cls: string,
  mods: Record<string, boolean | string | undefined> = {},
  additional: Array<string | undefined> = [],
): string => {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([_, value]) => value)
      .map(([classNames]) => classNames),
    ...additional.filter(Boolean),
  ].join(' ');
};
