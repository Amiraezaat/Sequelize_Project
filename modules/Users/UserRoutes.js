const { deleteUser } = require("./Controller/deleteUser")
const { getallusers } = require("./Controller/getallusers")
const { searchA_30, searchA_gte30, searchAge } = require("./Controller/search")
const { signUp } = require("./Controller/signUp")

const router = require("express").Router()



router.post("/signUp" , signUp)
router.get("/searchA_30/:letter" , searchA_30)
router.get("/searchA_gte30/:letter", searchA_gte30)
router.get("/", getallusers)
router.delete("/deleteUser", deleteUser)
router.get("/searchAge", searchAge)




module.exports = router