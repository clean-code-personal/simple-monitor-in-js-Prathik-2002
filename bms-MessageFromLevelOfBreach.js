const {LanuageMessage} = require('./bms-language')

const levelOfBreacheMappedToMessage = {
    "-2": "lowBreach",
    "-1": "lowBreachWarning",
    "0" : "normal",
    "1" : "highBreachWarning",
    "2" : "highBreach"
}

function getMessage(lang, levelOgBreach, parameterName){
    const messageCode = levelOfBreacheMappedToMessage[String(levelOgBreach)]
    return `${LanuageMessage[lang].parameterName[parameterName]} ${LanuageMessage[lang].message[messageCode]}`
}

module.exports = {getMessage}

