let store = null;

exports.pass = function (value) {
  store = value;
};

exports.get = function () {
  return store;
};
