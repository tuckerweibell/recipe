/**
 * Converts a color from CSS hex format to CSS rgb format.
 */
function convertHexToRGB(color: string) {
  // eslint-disable-next-line no-param-reassign
  color = color.substr(1);

  const re = new RegExp(`.{1,${color.length / 3}}`, 'g');
  const colors = color.match(re);

  return `rgb(${colors.map(n => parseInt(n, 16)).join(', ')})`;
}

type colorModel = 'rgb' | 'rgba' | 'hsl' | 'hsla';

type color = {
  type: colorModel;
  values: any[];
};

/**
 * Returns an object with the type and values of a color.
 */
function decomposeColor(color: string): color {
  if (color.charAt(0) === '#') return decomposeColor(convertHexToRGB(color));

  const marker = color.indexOf('(');
  const type = color.substring(0, marker) as colorModel;
  const values = color
    .substring(marker + 1, color.length - 1)
    .split(',')
    .map(value => parseFloat(value));

  return {type, values};
}

function floatToHex(n) {
  const hex = parseInt(n, 10).toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}

/**
 * Converts a color object with type and values to a string.
 */
function recomposeColor({values}: color) {
  return `#${values.map(floatToHex).join('')}`;
}

const clamp = (n: number, min = 0, max = 1) => (n < min ? min : n > max ? max : n);

function darken(hexColor: string, value: number) {
  const {type, values} = decomposeColor(hexColor);

  for (let i = 0; i < 3; i += 1) values[i] *= 1 - clamp(value);

  return recomposeColor({type, values});
}

export default darken;
