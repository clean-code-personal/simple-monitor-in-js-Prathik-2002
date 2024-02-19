const {checkStatus, SetLanguage} = require('../bms-monitor')
const {getLog} = require('../bms-log')
const assert = require('assert');
 
const checkStatusTestCase = [
    ['en', "temperature", '20 C', true, 'Temperature OK: Normal'],
    ['en', "temperature", '-1 C', false, 'Temperature Breach : too low'],
    ['ger', "soc", "30",true, "Ladezustand OK: Normal"],
    ['en', "chargeRate", "0.79", false, "Charge Rate Warning : approaching high Breach"],
    ['en', "chargeRate", "0.81", false, "Charge Rate Breach : too high"],
    ['en', "chargeRate", "0.5", true, "Charge Rate OK: Normal"],
    ['ger', "soc", "45", false, "Ladezustand Verstoß: zu hoch"],
    ['ger', "soc", "10", false, "Ladezustand Bruch: zu niedrig"]
]


function ParameterTestDesign(lang, parameterName, parameterValue, expected, expectedMessage){
    it(`should return ${expected} for ${parameterName} ${parameterValue} with message ${expectedMessage}`,()=>{
        SetLanguage(lang)
        assert.equal(checkStatus(parameterName, parameterValue), expected)
        const noOfLogs = 1
        const LogMessages = getLog(noOfLogs)
        LogMessages.forEach((logMessage)=>{
            assert.equal(logMessage.message, expectedMessage)
        })
    })
}
function ParameterTest(){
    describe("Check Status Parameters", ()=>{
        afterEach(()=>{
            const noOfLogs = 1
            getLog(noOfLogs).forEach(log => console.log(log.message))
        })
        checkStatusTestCase.forEach(testCase => {ParameterTestDesign(...testCase)})
    })
}
module.exports = {ParameterTest}