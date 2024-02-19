const assert = require('assert');
const {convertToCommonUnit} = require('../bms-convertParameterInputs')

const conversionTestCases = [
    ["temperature", "20 C", 20],
]

function ConversionTestDesign(parameterName, parameterValue, expected){
    it(`should return ${expected} for ${parameterName} - ${parameterValue}`,()=>{
        assert.equal(convertToCommonUnit(parameterName, parameterValue), expected)
    })
}

function ConversionTest(){
    describe("BatteryIsOk Function Test",()=>{
        conversionTestCases.forEach(testCase => {ConversionTestDesign(...testCase)})
    })
}

module.exports = {ConversionTest}