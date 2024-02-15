const message = {

        1 :(`is low`),
        2 : (`is getting low warning`),
        3 : (` OK`),
        4 : (` is getting high warning`),
        5 : (` is high`),
}
function messageCodeFromLevelOfBreach(levelOfBreach, parameterName)  {
    return `${parameterName} ${message[levelOfBreach+3]} `
}
module.exports = {messageCodeFromLevelOfBreach}