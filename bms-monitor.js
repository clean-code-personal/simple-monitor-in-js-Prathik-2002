const {checkTemperature, checkSOC, checkChargeRate} = require('./bms-checkFunctions')

function batteryIsOk(temperature, soc, charge_rate) {
    const tempStatus = checkTemperature(temperature)
    const SOCStatus = checkSOC(soc)
    const chargeRateStatus = checkChargeRate(charge_rate)
    return tempStatus && SOCStatus && chargeRateStatus
}

module.exports = {batteryIsOk}
