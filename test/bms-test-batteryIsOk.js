const {batteryIsOk, SetLanguage} = require('../bms-monitor')
const {getLog} = require('../bms-log')
const assert = require('assert');
const {parameters} = require('../bms-parameters')

const batteryTestCases = [
    ["ger","30 C", "30", "0.5", true, ['Temperatur OK: Normal','Ladezustand OK: Normal','Ladestrom OK: Normal']],
    ["ger","20 C","30","0.80",false, ['Temperatur OK: Normal','Ladezustand OK: Normal','Ladestrom Warnung: Hoher Durchbruch steht bevor']],
    ["en","40 C","21","0.3",false, ['Temperature OK: Normal','State of Charge Warning : approaching low Breach','Charge Rate OK: Normal']],
    ["en","100 C", "38", "0.2", false, ['Temperature Breach : too high', 'State of Charge OK: Normal','Charge Rate OK: Normal' ]],
    ["en","290 K", "19", "0.2", false, ['Temperature OK: Normal','State of Charge Breach : too low','Charge Rate OK: Normal']]
]

function BatteryTestDesign(lang,temperature, soc, chargeRate, expected, expectedMessages){
    it(`should return ${expected} with message ${expectedMessages} for inputs ${temperature}, ${soc} and  ${chargeRate}`,()=>{
        SetLanguage(lang)
        assert.equal(batteryIsOk(temperature, soc, chargeRate), expected)
        const noOfLogs = Object.keys(parameters).length
        const LogMessages = getLog(noOfLogs)
        LogMessages.forEach((logMessage, index)=>{
            assert.equal(logMessage.message, expectedMessages[index])
        })
    })
}

function BatteryTest(){
    describe("BatteryIsOk Function Test",()=>{
        afterEach(()=>{
            const noOfLogs = Object.keys(parameters).length
            getLog(noOfLogs).forEach(log => console.log(log.message))
        })
        batteryTestCases.forEach(testCase => {BatteryTestDesign(...testCase)})
    })
}
module.exports = {BatteryTest}