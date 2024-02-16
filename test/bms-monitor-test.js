const {expect} = require('chai');
const assert = require('assert');
const {batteryIsOk, SetLanguage} = require('../bms-monitor')
const {getLog} = require('../bms-log')
const batteryTestCases = [
    ["ger","30 C", "30", "0.5", true, ['Temperatur OK: Normal','Ladezustand OK: Normal','Ladestrom OK: Normal']],
    ["ger","20 C","30","0.80",false, ['Temperatur OK: Normal','Ladezustand OK: Normal','Ladestrom Warnung: Hoher Durchbruch steht bevor']],
    ["en","40 C","21","0.3",false, ['Temperature OK: Normal','State of Charge Warning : approaching low Breach','Charge Rate OK: Normal']],
    ["en","100 C", "38", "0.2", false, ['Temperature Breach : too high', 'State of Charge OK: Normal','Charge Rate OK: Normal' ]],
    ["en","290 K", "19", "0.2", false, ['Temperature OK: Normal','State of Charge Breach : too low','Charge Rate OK: Normal']]
]
function BatteryTest(lang,temperature, soc, chargeRate, expected, expectedMessages){
    it(`should return ${expected} with message ${expectedMessages} for inputs ${temperature}, ${soc} and  ${chargeRate}`,()=>{
        SetLanguage(lang)
        assert.equal(batteryIsOk(temperature, soc, chargeRate), expected)
        const LogMessages = getLog(3)
        LogMessages.forEach((logMessage, index)=>{
            assert.equal(logMessage.message, expectedMessages[index])
        })
    })
}

describe("Battery Monitor System Test", () => {
    after(()=>{
        console.table(getLog())
    })
    describe("BatteryIsOk Function Test",()=>{
        afterEach(()=>{
            getLog(3).forEach(log => console.log(log.message))
        })
        batteryTestCases.forEach(testCase => {BatteryTest(...testCase)})
    })
})
