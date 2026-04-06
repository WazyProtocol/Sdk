const { exist } = require("../core/existence");

function main() {
  console.log("No memory. No beginning. No return.\n");

  const result = exist();

  console.log("State:");
  console.log(JSON.stringify(result.state, null, 2));
}

main();
