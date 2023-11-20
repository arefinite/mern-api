import express from "express"
import { router } from "./routes/product.js"
import { getProducts } from "./controllers/product.js"
import cors from "cors"
export const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/product", router)

app.get("/products", getProducts)
app.get("*", (req, res) => {
	res.status(404).json({ message: "Not Found" })
})
