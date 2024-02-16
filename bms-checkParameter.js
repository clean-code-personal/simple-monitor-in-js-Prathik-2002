//Low parameter breach => -2
//Low parameter warning => -1
//Normal => 0
//High parameter warning => 1
//High parameter breach => 2
function levelOfBreach(boundaries, value) {
    const isBreached = checkPositionOfValueINOrOutOfBoundary(boundaries.lowBreachAndLowWarningBoundary,boundaries.highWarningAndHighBreachBoundary, value)
    if(isBreached == 0){ 
        return checkPositionOfValueINOrOutOfBoundary(boundaries.lowWarningAndNormalBoundary,boundaries.NormalAndhighWarningBoundary, value)
    }
    return 2*isBreached
}
function checkPositionOfValueINOrOutOfBoundary(leftBoundary, rightBoundary, value){
    if(value < leftBoundary){
        return -1
    }
    if(value > rightBoundary){
        return 1
    }
    return 0
}

module.exports = {levelOfBreach}
