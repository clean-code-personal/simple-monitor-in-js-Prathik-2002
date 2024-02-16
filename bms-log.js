const LOG = []
const log_template = {
    name:'',
    value: '',
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
function addLog(name, value, result, message){
    const currentdate = new Date()
    let new_log = Object.assign({},log_template);
    new_log.name = name
    new_log.value = value; 
    new_log.message = message
    new_log.result = result
    new_log.date = currentdate.toLocaleDateString()
    new_log.time = currentdate.toLocaleTimeString()
    LOG.push(new_log)
}

module.exports = {getLog, addLog}