const express = require("express");
const router = express.Router();
let {products,people} = require('../data');
const {getPeople,createPerson,createPersonPostman,updateperson,deletePerson} = require('../controller/people')
router.get("/",getPeople);

router.post("/",createPerson);

router.post("/postman",createPersonPostman);

router.put("/:id",updateperson);

router.delete("/:id",deletePerson);


module.exports = router;