export function classNames(cls, mods, additional) {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
    ...additional.filter(Boolean),
  ].join(' ');
}
