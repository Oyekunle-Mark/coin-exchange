const convert = (type, rate, margin) => {
  const difference = rate * (margin / 100);

  return type === 'sell' ? rate - difference : rate + difference;
};

module.exports = convert;
