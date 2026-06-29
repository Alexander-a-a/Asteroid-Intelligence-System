var express = require("express");
var router = express.Router();
const db = require("../models");
const CadService = require("../services/CadService");
const RiskService = require("../services/RiskService");

const cadService = new CadService(db);
const riskService = new RiskService(db, cadService);

router.get("/cad", async function (req, res, next) {
    try {
        const caresultd = await cadService.initCas();

        res.status(200).json({
            status: "success",
            statusCode: 200,
            data: { result },
        });
    } catch (err) {
        next(err);
    }
});

router.get("/risk", async function (req, res, next) {
    try {
        const result = await riskService.riskCalc();

        res.status(200).json({
            status: "success",
            statusCode: 200,
            data: { result },
        });
    } catch (err) {
        next(err);
    }
});

router.get("/update", async (req, res, next) => {
    try {
        const result = await riskService.updateAsteroids();

        res.status(200).json({
            status: "success",
            statusCode: 200,
            data: { result },
        });
    } catch (error) {
        next(error);
    }
});

// ROUTE FOR MOST DANGEROUS ASTROID

router.get("/most-dangerous", async (req, res, next) => {
    try {
        const result = await riskService.mostDangerous();

        res.status(200).json({
            status: "success",
            statusCode: 200,
            data: { result },
        });
    } catch (error) {
        next(error);
    }
});

router.post("/add", async (req, res, next) => {
    try {
        const result = await riskService.addNewAsteroid(req.body);

        res.status(200).json({
            statusCode: 200,
            status: "success",
            data: { result },
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
