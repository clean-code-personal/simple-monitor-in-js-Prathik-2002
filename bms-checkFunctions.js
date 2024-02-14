const {addLog} = require('./bms-log')
const {MIN_TEMPERATURE, MAX_TEMPERATURE, MIN_SOC, MAX_SOC, MIN_CHARGING_RATE, MAX_CHARGING_RATE} = require('./bms-parameters')

function checkBreach(value, lower_limit, upper_limit) {
    if(value < lower_limit){
        return -1
    }
    else if(value > upper_limit){
        return 1
    }
    return 0
}


function checkTemperature(temperature, min_temperature = MIN_TEMPERATURE, max_temperature = MAX_TEMPERATURE){
    const parameters = {upperLimit: max_temperature, lowerLimit: min_temperature, value: temperature}
    const breachStatus = checkBreach(temperature, min_temperature, max_temperature);
    if(breachStatus === -1){
        addLog("checkTemperature",parameters,"Fail", "Temperature is below the range")
        return false
    }else if(breachStatus === 1){
        addLog("checkTemperature",parameters,"Fail", "Temperature is above the range")
        return false
    }
    addLog("checkTemperature",parameters,"OK", "Temperature is in the range")
    return true
}

function checkSOC(soc, min_soc = MIN_SOC, max_soc = MAX_SOC){
    const parameters = {upperLimit: max_soc, lowerLimit: min_soc, value: soc}
    const breachStatus = checkBreach(soc, min_soc, max_soc);
    if(breachStatus === -1){
        addLog("checkSOC",parameters,"Fail", "SOC is below the range")
        return false
    }else if(breachStatus === 1){
        addLog("checkSOC",parameters,"Fail", "SOC is above the range")
        return false
    }
    addLog("checkSOC",parameters,"OK", "SOC is in the range")
    return true

}

function checkChargeRate(charge_rate, min_charge_rate = MIN_CHARGING_RATE, max_charge_rate = MAX_CHARGING_RATE){
    const parameters = {value: charge_rate,upperLimit: max_charge_rate, lowerLimit: min_charge_rate}
    const breachStatus = checkBreach(charge_rate, min_charge_rate, max_charge_rate);
    if(breachStatus === -1){
        addLog("checkChargeRate",parameters,"Fail", "Charge Rate is below the range")
        return false
    }else if(breachStatus === 1){
        addLog("checkChargeRate",parameters,"Fail", "Charge Rate is above the range")
        return false
    }
    addLog("checkChargeRate",parameters,"OK", "Charge Rate is in the range")
    return true
}

module.exports = {checkTemperature, checkSOC, checkChargeRate}