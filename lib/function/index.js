const pipe = (args, ...fns) => {
  let result;
  for (let i = 0; i < fns.length; i++) {
    const fn = fns[i];
    if (i === 0) {
      result = fn(...args);
    } else {
      result = fn(result);
    }
  }
  return result;
};

module.exports = { pipe };
