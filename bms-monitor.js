const {levelOfBreach} = require('./bms-checkParameter')
const {parameters} = require('./bms-parameters')
const {convertToCommonUnit} = require('./bms-convertParameterInputs')
const {getMessage} = require('./bms-MessageFromLevelOfBreach')
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
    const ParameterInputs = [temperature, soc, charge_rate]   
    const StatusOfAllParameters = []
    Object.keys(parameters).forEach((parameter,index)=>{
        StatusOfAllParameters.push(checkStatus(parameter,ParameterInputs[index]))
    })
    return StatusOfAllParameters.every((value)=>value);
}
module.exports = {batteryIsOk, checkStatus, SetLanguage}
