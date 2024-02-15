//Low parameter breach => -2
//Low parameter warning => -1
//Normal => 0
//High parameter warning => 1
//High parameter breach => 2
function levelOfBreach(boundaries, value) {
    const isBreached = checkPositiveOrNegativeSideOfBreachBoundary(boundaries, value)
    if(isBreached == 0){ 
        return checkPositiveOrNegativeSideOfWarningBoundary(boundaries, value)
    }
    return 2*isBreached
}
function checkPositiveOrNegativeSideOfBreachBoundary(boundaries, value){
    if(value < boundaries.lowBreachAndLowWarningBoundary){
        return -1
    }
    if(value > boundaries.highWarningAndHighBreachBoundary){
        return 1
    }
    return 0
}
function checkPositiveOrNegativeSideOfWarningBoundary(boundaries, value){
    if(value < boundaries.lowWarningAndNormalBoundary){
        return -1
    }
    if(value > boundaries.NormalAndhighWarningBoundary){
        return 1
    }
    return 0
}

module.exports = {levelOfBreach}
