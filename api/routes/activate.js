const express = require("express");
const { User } = require("../models");

const router = express.Router()

router.get("/activate/:userId", async (req, res) => {

    const isWaitingForActivation = await User.findOne({where: {id: req.params.userId, is_active: false}})

    if(!isWaitingForActivation){
        return res.redirect("http://localhost:3000/")
    }

    await User.update({is_active: true}, {where: {id: req.params.userId}}).then(res.redirect("http://localhost:3000/login")).catch(err => {
        res.json({message: "Cannot activate account"})
    })
})

module.exports = router