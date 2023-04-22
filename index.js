const app = require("./src/app")
var PORT = process.env.PORT || 3001;


app.listen ( PORT , () => {
  console.log(`🚀 Server listening on port http://localhost:${PORT}`)
});

