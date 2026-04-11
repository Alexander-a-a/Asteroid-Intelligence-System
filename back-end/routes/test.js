var express = require("express");
var router = express.Router();
const db = require("../models");
const CadService = require("../services/CadService");

const cadService = new CadService(db);


router.get("/", async function (req, res, next) {
    try {
        const testMsg = "Hello World";

        res.status(200).json({
            status: "success",
            statusCode: 200,
            data: {
                result: testMsg
            }
        });
    } catch (err) {
    (next(err));
    }
});

router.get("/cad", async function (req, res, next) {
    try {
        const testCad = await cadService.initCas();

        res.status(200).json({
            status: "success",
            statusCode: 200,
            data: {
                result: testCad
            }
        });
    } catch (err) {
    (next(err));
    }
});

module.exports = router; 