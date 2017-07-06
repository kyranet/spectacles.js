exports.interfaceError = function interfaceError() {
  throw new Error(`The method ${this.name} was not implemented.`);
};
