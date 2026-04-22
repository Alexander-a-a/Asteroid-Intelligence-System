// Risk score: 0

// Threat levels:

// Low, Medium, High, Extreme

// distance > 0.05 au: 0 - 1 Risk points

// distance = 0.05 au: 2 - 3 Risk points 

// distance < 0.05 au: 4 - 5 Risk points

class RiskService {
    constructor(db) {

    }

    async riskCalc() {

        // Distance risk variables
        const close = 0.06;
        const medium = 0.05
        const far = 0.04

        // Velocity risk variables
        const



    }
}

module.exports = RiskService;