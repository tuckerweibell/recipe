// responsive
export const sm = (...styles) => ({
  '@media (min-width: 640px)': [...styles],
});
export const md = (...styles) => ({
  '@media (min-width: 768px)': [...styles],
});
export const lg = (...styles) => ({
  '@media (min-width: 1024px)': [...styles],
});
export const xl = (...styles) => ({
  '@media (min-width: 1280px)': [...styles],
});
