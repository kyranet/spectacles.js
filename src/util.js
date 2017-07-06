exports.interfaceError = function interfaceError() {
  throw new Error(`The method ${this.name} was not implemented.`);
};

exports.flatten = (obj) => {
  const out = {};
  Object.keys(obj).forEach((k) => {
    out[k] = JSON.stringify(obj[k]);
  });
  return out;
};
