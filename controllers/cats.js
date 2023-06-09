const { Cat, Feeding } = require("../models")

const create = async (req, res) => {
  try{
    const cat = await Cat.create(req.body)
    res.status(200).json(cat)
  } catch(error){
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try{
    const cats = await Cat.findAll()
    res.status(200).json(cats)
  } catch(error){
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try{
    const cat = await Cat.update(
      req.body,
      { where: { id: req.params.catId }, returning: true }
    )
    res.status(200).json(cat)
  } catch(error){
    res.status(500).json(error)
  }
}

const deleteCat = async (req, res) => {
  try{
    const numberOfRowsRemoved = await Cat.destroy(
      { where: { id: req.params.catId } }
    )
    res.status(200).json(numberOfRowsRemoved)
  } catch(error){
    res.status(500).json(error)
  }
}

const addFeeding = async (req, res) => {
  try {
    // Append a catId to req.body:
    req.body.catId = req.params.catId
    const feeding = await Feeding.create(req.body)
    res.status(200).json(feeding)
  } catch (error) {
    res.status(500).json(error)
  }
}


module.exports = {
  create,
  index,
  update,
  delete: deleteCat,
  addFeeding,
}