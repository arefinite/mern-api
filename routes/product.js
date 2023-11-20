import { Router } from "express"
import { addProduct, deleteProduct, getProduct, orderProduct, replaceProduct, updateProduct } from "../controllers/product.js"
import { auth } from "../middleware/product.js"
export const router = Router()

router
	.get("/:id", getProduct)
	.post("/order/:id",auth, orderProduct)
	.post("/", addProduct)
  .put("/:id", replaceProduct)
  .patch("/:id", updateProduct)
  .delete("/:id", deleteProduct)