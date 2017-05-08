module.exports = (redis, data = {}) =>
  Promise.all(Object.keys(data).map((k) => {
    if (data[k] instanceof Object) return redis.hmsetAsync(k, data[k]);
    return redis.setAsync(k, data[k]);
  }));
