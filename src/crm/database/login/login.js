import login from './login.json'
let crmLogin = function (options) {
    let json = JSON.parse(options.body)
    return login
}
export default { crmLogin }