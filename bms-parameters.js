const warningTolerance = 5
const parameters = {
    "temperature": {
        boundaries: {
            lowBreachAndLowWarningBoundary: 0, 
            lowWarningAndNormalBoundary:(0 + 45*warningTolerance/100),
            NormalAndhighWarningBoundary:(45 - 45*warningTolerance/100),
            highWarningAndHighBreachBoundary: 45,
    }
    },
    "soc": {
        boundaries: {
            lowBreachAndLowWarningBoundary: 20, 
            lowWarningAndNormalBoundary:(20 + 40*warningTolerance/100),
            NormalAndhighWarningBoundary:(40 - 40*warningTolerance/100),
            highWarningAndHighBreachBoundary: 40,
        }
    },
    "chargeRate": {
        boundaries: {
            lowWarningAndNormalBoundary: 0,
            lowBreachAndLowWarningBoundary: 0, 
            NormalAndhighWarningBoundary:(0.80 - 0.80*warningTolerance/100),
            highWarningAndHighBreachBoundary: 0.80,
        },
    }
}
const temp = 'temperature'
console.log(parameters[temp].boundaries)
module.exports = {parameters}