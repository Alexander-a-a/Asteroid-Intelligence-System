var express = require("express");
var router = express.Router();


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



module.exports = router; 