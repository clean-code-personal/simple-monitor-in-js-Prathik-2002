const LOG = []
const log_template = {
    name:'',
    parameters: {},
    result:"",
    message: "",
    date: "", 
    time : "",
}
//return list constaining N recent logs
function getLog(head = LOG.length){
    if(head < LOG.length){
        getLog()
    }
    return LOG.slice(-head)
}
function addLog(name, parameters, result, message, date, time){
    let new_log = Object.assign({}, log_template);
    new_log.name = name
    new_log.parameters = parameters; 
    new_log.message = message
    new_log.result = result
    new_log.date = date
    new_log.time = time
    LOG.push(new_log)
}

module.exports = {getLog, addLog, log_template}