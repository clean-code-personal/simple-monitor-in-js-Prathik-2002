const LanuageMessage = {
    en:{
        message:[
                'Breach : too low',
                'Warning : approaching low Breach',
                'OK: Normal',
                'Warning : approaching high Breach',
                'Breach : too high',
            ],
        parameterName: {temperature:"Temperature", soc:"State of Charge", chargeRate: "Charge Rate"}
    },
    ger:{
        message:[
            'Bruch: zu niedrig',
            'Warnung: Tiefer Durchbruch naht',
            'OK: Normal',
            'Warnung: Hoher Durchbruch steht bevor',
            'Verstoß: zu hoch'
        ],
        parameterName: {temperature:'Temperatur', soc:'Ladezustand', chargeRate:"Ladestrom"}
    },
}
function messageCodeFromLevelOfBreach(levelOfBreach)  {
    return levelOfBreach + 2
}
function getMessage(lang, levelOgBreach, parameterName){
    const messageCode = messageCodeFromLevelOfBreach(levelOgBreach)
    return `${LanuageMessage[lang].parameterName[parameterName]} ${LanuageMessage[lang].message[messageCode]}`
}
module.exports = {getMessage}