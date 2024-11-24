const { get } = require("./share");

for (let i = 0; i < 100; i++) {
  console.log(get());
}
