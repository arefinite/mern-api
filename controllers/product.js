import { Product } from "../models/product.js"

export const getProducts = async(req, res) => {
  try {
    const products = await Product.find()
    		res.status(200).send(products)
  } catch(err) {
    		res.status(400).json({ message: err.message })
  }
}

export const getProduct = async(req, res) => {
  const id = req.params.id
  try {
    const findProduct = await Product.findOne({ _id:id })
    res.status(200).send(findProduct)
  } catch (err) { 
    	res.status(400).json({ message: err.message })
  }
}

export const addProduct = async (req, res) => {
	try {
		const product = new Product(req.body)
    await product.save()
    res.status(201).json({ message: "Product Created Successfully" })
	} catch (err) {
		res.status(400).json({ message: err.message })
	}
}

export const deleteProduct = async(req, res) => {
	  const id = req.params.id
  try {
    await Product.findOneAndDelete({ _id:id })
    res.status(200).send({message: "Product Deleted Successfully"})
  } catch (err) { 
    	res.status(400).json({ message: err.message })
  }
}

export const updateProduct = async(req, res) => {
	  const id = req.params.id
  try {
    const updateProduct = await Product.findOneAndUpdate(
			{ _id: id },
			req.body,
			{ new: true, upsert: false,runValidators:true }
    )
    console.log(updateProduct.price);
    if (updateProduct) {
      res.status(200).json({message: "Product Updated Successfully"})
    } else {
      res.status(400).json({message:'something wrong'})
    }
  } catch (err) { 
    	res.status(400).json({ message: err.message })
  }
}

export const replaceProduct = async(req, res) => {
  const id = req.params.id
  console.log(req.body);
  try {
    await Product.findOneAndReplace({ _id: id, } ,req.body, {new: true,upsert: false})
    res.status(200).send({message: "Product Replaced Successfully"})
  } catch (err) { 
    	res.status(400).json({ message: err.message })
  }
}

export const orderProduct = (req, res) => {
  res.json({ message: "order Product" })
}
