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
        console.log(this.cadService);
        console.log("HI")

        // Distance risk variables
        const dClose = 0.04;
        const dMedium = 0.05;
        const dFar = 0.06;

        const asteroids = await this.cadService.initCas();

        // Velocity risk variables
        const vLow = 10;
        const vMedium = 15;
        const vFast = 20;
        console.log("before calc")

        // Date
        const today = new Date();
    
        function pointCalc() {

            const riskAsteroids = asteroids.map((asteroid) => {

                let points = 0;

                let riskLevel;

                let riskScore;

                console.log("first")

                // Distance
                if (asteroid.distance <= dClose) {
                    points += 5;
                } else if (asteroid.distance <= dMedium) {
                    points += 3
                } else if (asteroid.distance <= dFar){
                    points += 1;
                }


                // Velocity
                if (asteroid.velocity >= vFast) {
                    points += 5;
                } else if (asteroid.velocity >= vMedium) {
                    points += 3
                } else if (asteroid.velocity >= vLow) {
                    points += 1;
                }


                // Date variables

                const asteroidDate = new Date(asteroid.closeApproachDate);

                const millisecond = asteroidDate - today;

                const daysUntilApproach = millisecond / (1000 * 60 * 60 * 24);


                if (daysUntilApproach < 0) {
                    
                } else if (daysUntilApproach <= 7) {
                    points += 3;
                } else if (daysUntilApproach <= 30) {
                    points += 2;
                } else if (daysUntilApproach <= 60) {
                    points += 1;
                }


                if (points >= 11) {
                    riskLevel = "Extreme";
                } else if (points >= 7) {
                    riskLevel = "High";
                } else if (points >= 4) {
                    riskLevel = "Medium";
                } else if (points >= 0) {
                    riskLevel = "Low";
                }

                riskScore = points;

                console.log("Last chance")

                return {...asteroid, riskScore, riskLevel};
            });

            return riskAsteroids;
        }


        return pointCalc();
    }
}

module.exports = RiskService;