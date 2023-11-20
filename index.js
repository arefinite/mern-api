import { app } from "./app.js"
import { connectDB } from "./db/db.js";
const PORT = process.env.PORT || 8000

connectDB(process.env.DB__URL)

app.listen(PORT, () => {
  console.log('Server listening on port ' + PORT);
})