export const auth = (req, res, next) => {
  if (req.query.id === '123') {
    next()
  } else {
    res.status(401).json({message:'unauthorized'})
  }
}