const {expect} = require('chai');
const {batteryIsOk} = require('./bms-monitor')
const {getLog} = require('./bms-log')

function testBattery(temperature, soc, charging_rate, expected){
    const batteryStatus = batteryIsOk(temperature, soc, charging_rate);
    console.log(getLog(3))
    expect(batteryStatus).equals(expected);
}
testBattery(25, 30, 0.7, true)
testBattery(50, 85, 0, false)
testBattery(60,90,-10,false)
testBattery(-10,9,0,false)
testBattery(0,0,0,false)