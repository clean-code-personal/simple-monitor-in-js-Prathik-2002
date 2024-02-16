const {levelOfBreach} = require('./bms-checkParameter')
const {parameters} = require('./bms-parameters')
const {convertToCommonUnit} = require('./bms-convertParameterInputs')
const {getMessage} = require('./bms-language')
const {addLog} = require('./bms-log')

let LANGUAGE = "ger"
const SetLanguage = (lang)=>{
    LANGUAGE = lang
}
function checkStatus(parameterName, parameterValue){
    const ParameterValueInCommonUnit = convertToCommonUnit(parameterName, parameterValue);
    const parameterBoundaries = parameters[parameterName].boundaries
    const levelOfBreachInParameter = levelOfBreach(parameterBoundaries, ParameterValueInCommonUnit)
    const message = getMessage(LANGUAGE,levelOfBreachInParameter, parameterName)
    addLog(parameterName, ParameterValueInCommonUnit, levelOfBreachInParameter, message)
    if(levelOfBreachInParameter == 0){
        return true
    }
    return false
}

function batteryIsOk(temperature, soc, charge_rate) {    
    const StatusOfAllParameters = []
    StatusOfAllParameters.push(checkStatus('temperature',temperature))
    StatusOfAllParameters.push(checkStatus('soc', soc))
    StatusOfAllParameters.push(checkStatus('chargeRate',charge_rate))
    return StatusOfAllParameters.every((value)=>value);
    
}
module.exports = {batteryIsOk, SetLanguage}
