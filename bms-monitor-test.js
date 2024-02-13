const {expect} = require('chai');
const assert = require('assert');
const {batteryIsOk} = require('./bms-monitor')
const {getLog} = require('./bms-log')
const {checkTemperature, checkSOC, checkChargeRate} = require('./bms-checkFunctions')

describe("Battery Monitor System Test", () => {
    describe("CheckTemperature Function test", ()=>{
        afterEach(()=>{
            console.log(getLog(1)[0].message)
        })
        it('should return true for temperature 20', ()=>{
            assert.equal(checkTemperature(20), true)
        });
        it('should return true for temperature 39', ()=>{
            assert.equal(checkTemperature(39), true)
        });
        it('should return true for temperature 40', ()=>{
            assert.equal(checkTemperature(40), true)
        });
        it('should return false for temperature 41', ()=>{
            assert.equal(checkTemperature(41), false)
        });
        it('should return false for temperature 58', ()=>{
            assert.equal(checkTemperature(58), false)
        });
        it('should return true for temperature 0', ()=>{
            assert.equal(checkTemperature(0), true)
        });
        it('should return false for temperature -1', ()=>{
            assert.equal(checkTemperature(-1), false)
        });
    })
    describe("checkSOC Function Test", ()=>{
        afterEach(()=>{
            console.log(getLog(1)[0].message)
        })
        it('should return false for soc 0',()=>{
            assert.equal(checkSOC(0),false)
        });
        it('should return false for soc -1',()=>{
            assert.equal(checkSOC(-1),false)
        });
        it('should return true for soc 20',()=>{
            assert.equal(checkSOC(20),true)
        });
        it('should return true for soc 40',()=>{
            assert.equal(checkSOC(40),true)
        });
        it('should return false for soc 41',()=>{
            assert.equal(checkSOC(41),false)
        });
        it('should return true for soc 39',()=>{
            assert.equal(checkSOC(39),true)
        });
        it('should return false for soc 56',()=>{
            assert.equal(checkSOC(56),false)
        });
    })
    describe("checkChargeRate Function Test", ()=>{
        afterEach(()=>{
            console.log(getLog(1)[0].message)
        })
        it("should return true for charging rate 0",()=>{
            assert.equal(checkChargeRate(0),true)
        });
        it("should return true for charging rate 0.5",()=>{
            assert.equal(checkChargeRate(0.5),true)
        });
        it("should return false for charging rate -1",()=>{
            assert.equal(checkChargeRate(-1),false)
        });
        it("should return false for charging rate 0.9",()=>{
            assert.equal(checkChargeRate(0.9),false)
        });
        it("should return true for charging rate 0.7",()=>{
            assert.equal(checkChargeRate(0.7),true)
        });
        it("should return true for charging rate 0.8",()=>{
            assert.equal(checkChargeRate(0),true)
        });
        it("should return false for charging rate 0.801",()=>{
            assert.equal(checkChargeRate(0.801),false)
        });

    })
    
})


// testBattery(25, 30, 0.7, true)
// testBattery(50, 85, 0, false)
// testBattery(60,90,10,false)
// testBattery(-10,9,0,false)
// testBattery(0,0,0,false)