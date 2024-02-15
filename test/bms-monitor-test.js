const {expect} = require('chai');
const assert = require('assert');
const {batteryIsOk} = require('../bms-monitor')
const {getLog} = require('../bms-log')



describe("Battery Monitor System Test", () => {
    after(()=>{
        console.table(getLog())
    })
    describe("BatteryIsOk Function Test",()=>{
        afterEach(()=>{
            getLog(3).forEach(log => console.log(log.message))
        })
        it("should return true for 20,30,0.8",()=>{
            assert.equal(batteryIsOk('20','30','0.8'),false)
        })
        it("should return false for 50,30,0.8",()=>{
            assert.equal(batteryIsOk('50','30','0.8'),false)
        })
        it("should return false for 20,60,0.8",()=>{
            assert.equal(batteryIsOk(20,60,0.8),false)
        })
        it("should return false for 20,30,0.9",()=>{
            assert.equal(batteryIsOk(20,30,0.9),false)
        })
        it("should return false for 41,44,9",()=>{
            assert.equal(batteryIsOk(41,44,9),false)
        })
    })
})
