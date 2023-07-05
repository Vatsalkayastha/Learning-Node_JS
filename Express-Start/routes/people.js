const express = require("express");
const router = express.Router();
const {getPeople,createPerson,createPersonPostman,updateperson,deletePerson} = require('../controller/people')
router.get("/",getPeople);

router.post("/",createPerson);

router.post("/postman",createPersonPostman);

router.put("/:id",updateperson);

router.delete("/:id",deletePerson);


module.exports = router;