var express = require("express");
var router = express.Router();
const db = require("../models");
const CadService = require("../services/CadService");
const RiskService = require("../services/RiskService");

const cadService = new CadService(db);
const riskService = new RiskService(db, cadService);



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




router.get("/risk", async function (req, res, next) {
    try {
        const riskCalc = await riskService.riskCalc();

        res.status(200).json({
            status: "success",
            statusCode: 200,
            data: {
                result: riskCalc
            }
        });
    } catch (err) {
    next(err);
    }
});

module.exports = router; 