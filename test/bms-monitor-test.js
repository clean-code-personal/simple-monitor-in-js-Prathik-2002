const assert = require('assert');
const {batteryIsOk, SetLanguage} = require('../bms-monitor')
const {getLog} = require('../bms-log')
const {ParameterTest} = require('./bms-test-checkStatus')
const {BatteryTest} = require('./bms-test-batteryIsOk')


describe("Battery Monitor System Test", () => {
    after(()=>{
        console.table(getLog())
    })
    ParameterTest()
    BatteryTest()
})
