//convert to common units:
const ParameterConverterMap = {
    temperature: convertToCelsius,
}
function convertToCommonUnit(parameterName, valueUnitString){
    const valueUnitPair = valueUnitString.split(" ");
    valueUnitPair[0] = parseFloat(valueUnitPair[0])
    return ParameterConverterMap[parameterName]? ParameterConverterMap[parameterName](valueUnitPair[0], valueUnitPair[1]).toFixed(2) : valueUnitPair[0].toFixed(2);
}

function convertToCelsius(value, unit){
    if(unit == 'K'){
        return (value - 273.15)
    }
    if(unit == 'F'){
        return ((value - 32) * (5/9))
    }
    return value
} 
module.exports = {convertToCommonUnit}


