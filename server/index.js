require('dotenv').config(); // Load environment variables
const app = require("./app");
const port = process.env.PORT || 5050

app.listen(port, () => {
    console.log(`API listening on port ${port}...`)
});