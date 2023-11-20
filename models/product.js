import { Schema,model } from "mongoose"

const ProductSchema = new Schema({
	name: String,
	price: {
		type: Number,
		required: true,
		min: [100, "To Low"],
		max: [100000, "Too High"],
	},
	category: String,
	available: String,
	description: String,
})

export const Product = model('Product',ProductSchema)