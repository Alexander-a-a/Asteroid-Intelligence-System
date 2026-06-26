// Risk score: 0

// Threat levels:

// Low, Medium, High, Extreme

// distance > 0.05 au: 0 - 1 Risk points

// distance = 0.05 au: 2 - 3 Risk points 

// distance < 0.05 au: 4 - 5 Risk points

class RiskService {
    constructor(db, cadService) {
        this.cadService = cadService;
    }

    async riskCalc() {


        // Distance risk variables
        const dClose = 0.04;
        const dMedium = 0.05
        const dFar = 0.06

        const astroids = await this.cadService.initCas();

        // Velocity risk variables
        const vLow = 10;
        const vMedium = 15;
        const vFast = 20;

        // Date variables
        const now = new Date();

        const soon ;
        const later ;
        
    
        function pointCalc() {


            /* astroids.forEach((element) => {
                if (element.distance <= dClose) {
                    points += 5;
                } else if (element.distance <= dMedium) {
                    points += 3
                } else if (element.distance <= dFar){
                    points += 1;
                } else {
                    points
                }
            }); */

            const riskAstroid = astroids.map((astroid) => {

                let points = 0;

                if (astroid.distance <= dClose) {
                    points += 5;
                } else if (astroid.distance <= dMedium) {
                    points += 3
                } else if (astroid.distance <= dFar){
                    points += 1;
                } else {
                    points;
                }

                if (astroid.velocity >= vFast) {
                    points += 5;
                } else if (astroid.velocity <= vMedium) {
                    points += 3
                } else if (astroid.velocity <= vLow) {
                    points += 1;
                } else {
                    points;
                }

                const designation = astroid.designation;
                const dateRaw = astroid.dateRaw;
                const distance = astroid.distance;
                const min_distance = astroid.min_distance;
                const max_distance = astroid.max_distance;
                const velocity = astroid.velocity;

                return {designation, closeApproachDate, distance, min_distance, max_distance, velocity, riskScore, riskLevel};
            });
        }



    }
}

module.exports = RiskService;