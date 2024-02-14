const {addLog} = require('./bms-log')
const {MIN_TEMPERATURE, MAX_TEMPERATURE, MIN_SOC, MAX_SOC, MIN_CHARGING_RATE, MAX_CHARGING_RATE} = require('./bms-parameters')

function isIn_Between(value, lower_limit, upper_limit) {
    return (value >= lower_limit && value <= upper_limit)
}

function checkTemperature(temperature, min_temperature = MIN_TEMPERATURE, max_temperature = MAX_TEMPERATURE){
    const parameters = {upperLimit: max_temperature, lowerLimit: min_temperature, value: temperature}
    if(isIn_Between(temperature, min_temperature, max_temperature)){
        addLog("checkTemperature",parameters,"OK","Temperature in between the range")
        return true
    }
    addLog("checkTemperature",parameters,"Fail", "Temperature out of range")
    return false
}

function checkSOC(soc, min_soc = MIN_SOC, max_soc = MAX_SOC){
    const parameters = {upperLimit: max_soc, lowerLimit: min_soc, value: soc}
    if(isIn_Between(soc, min_soc, max_soc)){
        addLog("checkSOC",parameters,"OK","SOC in between the range")
        return true
    }
    addLog("checkSOC",parameters,"Fail", "SOC out of range")
    return false
}

function checkChargeRate(charge_rate, min_charge_rate = MIN_CHARGING_RATE, max_charge_rate = MAX_CHARGING_RATE){
    const parameters = {value: charge_rate,upperLimit: max_charge_rate, lowerLimit: min_charge_rate}
    if(isIn_Between(charge_rate, min_charge_rate, max_charge_rate)){
        addLog("checkCharging-rate", parameters, "OK", "Charging rate in between the range")
        return true
    }
    addLog("checkCharging-rate", parameters, "Fail", "Charging rate out of range")
    return false
}

module.exports = {checkTemperature, checkSOC, checkChargeRate}