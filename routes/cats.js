const router = require("express").Router()
const catsCtrl = require("../controllers/cats.js")

// http://localhost:3001/api/cats
router.post("/", catsCtrl.create)

router.get("/", catsCtrl.index)

router.put("/:catId", catsCtrl.update)

router.delete("/:catId", catsCtrl.delete)

module.exports = router