const env = require("./config/env");
const app = require("./app");

const PORT = env.PORT;

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
