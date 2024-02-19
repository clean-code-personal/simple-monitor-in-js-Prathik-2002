const LanuageMessage = {
    en:{
        message:{
            lowBreach: 'Breach : too low',
            lowBreachWarning: 'Warning : approaching low Breach',
            normal: 'OK: Normal',
            highBreachWarning: 'Warning : approaching high Breach',
            highBreach: 'Breach : too high',
        },
        parameterName: {temperature:"Temperature", soc:"State of Charge", chargeRate: "Charge Rate"}
    },
    ger:{
        message:{
            lowBreach: 'Bruch: zu niedrig',
            lowBreachWarning: 'Warnung: Tiefer Durchbruch naht',
            normal: 'OK: Normal',
            highBreachWarning: 'Warnung: Hoher Durchbruch steht bevor',
            highBreach: 'Verstoß: zu hoch'
        },
        parameterName: {temperature:'Temperatur', soc:'Ladezustand', chargeRate:"Ladestrom"}
    },
}

module.exports = {LanuageMessage}