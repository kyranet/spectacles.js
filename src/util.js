exports.interfaceError = function interfaceError() {
  throw new Error(`The method ${this.name} was not implemented.`);
};

exports.flatten = (obj) => {
  const out = {};
  Object.entries(obj).forEach(([k, v]) => {
    out[k] = JSON.stringify(v);
  });
  return out;
};
