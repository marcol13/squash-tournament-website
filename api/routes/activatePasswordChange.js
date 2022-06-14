const express = require("express");
const { User } = require("../models");

const router = express.Router()

router.get("/activate_password_change/:userId/:userPass", async (req, res) => {

    const isWaitingForActivation = await User.findOne({where: {id: req.params.userId}})

    if(!isWaitingForActivation){
        return res.redirect("http://localhost:3000/")
    }

    await User.update({password: req.params.userPass}, {where: {id: req.params.userId}}).then(res.redirect("http://localhost:3000/login")).catch(err => {
        res.json({error: "Cannot activate account"})
    })
})

module.exports = router