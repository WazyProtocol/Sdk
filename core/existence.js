const state = require("../state/undefined");

function exist() {
  return {
    message: "Wazy exists.",
    state: state.getState()
  };
}

module.exports = { exist };
