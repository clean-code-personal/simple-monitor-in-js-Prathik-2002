const assert = require('assert');
const {convertToCommonUnit} = require('../bms-convertParameterInputs')

const conversionTestCases = [
    ["temperature", "20 C", 20],
    ["temperature", "20 K", (-253.15)],
    ["soc", "20", 20],
    ["chargeRate", "0.8", (0.8)],
]

function ConversionTestDesign(parameterName, parameterValue, expected){
    it(`should return ${expected} for ${parameterName} - ${parameterValue}`,()=>{
        assert.equal(convertToCommonUnit(parameterName, parameterValue), expected.toFixed(2))
    })
}

function ConversionTest(){
    describe("BatteryIsOk Function Test",()=>{
        conversionTestCases.forEach(testCase => {ConversionTestDesign(...testCase)})
    })
}

module.exports = {ConversionTest}