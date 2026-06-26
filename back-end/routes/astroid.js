var express = require("express");
var router = express.Router();
const db = require("../models");
const CadService = require("../services/CadService");

const cadService = new CadService(db);



router.get("/cad", async function (req, res, next) {
    try {
        const cad = await cadService.initCas();

        res.status(200).json({
            status: "success",
            statusCode: 200,
            data: {
                result: cad
            }
        });
    } catch (err) {
    next(err);
    }
});

module.exports = router; 