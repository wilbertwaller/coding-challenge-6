/*
  Write a function that converts HEX to RGB. Then Make that function autodetect
  the formats so that if you enter HEX color format it returns RGB and if you
  enter RGB color format it returns HEX.
  Bonus: Release this tool as a npm package.
*/

const convertColorFormat = (color) => {
  let convertedFormat = 'Invalid color format';

  if (color[0] === '#') {
    convertedFormat = toRgb(color.substr(1));
  } else if (color.substr(0, 3) === 'rgb') {
    convertedFormat = toHex(color);
  }


  return convertedFormat;
};

const toRgb = (color) => {
  let r = parseInt(color.substr(0, 2), 16);
  let g = parseInt(color.substr(2, 2), 16);
  let b = parseInt(color.substr(4, 2), 16);

  return `rgb(${r}, ${g}, ${b})`;
};

const toHex = (color) => {
  const regex = /(.*?)rgb\((\d+), (\d+), (\d+)\)/;
  const rgb = regex.exec(color);
  const r = parseInt(rgb[2]).toString(16).padStart(2, '0');
  const g = parseInt(rgb[3]).toString(16).padStart(2, '0');
  const b = parseInt(rgb[4]).toString(16).padStart(2, '0');

  return `#${r}${g}${b}`;
};

const rgbFormat = 'rgb(255, 0, 224)';
const hexFormat = '#ff00e0';

console.log(convertColorFormat('(234, 52, 78)'));
