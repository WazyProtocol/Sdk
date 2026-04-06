function getState() {
  return {
    identity: null,
    memory: [],
    origin: "unknown",
    state: "still",
    return: false
  };
}

module.exports = { getState };
