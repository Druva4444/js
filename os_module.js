const os = require('os');
let user = os.userInfo();
console.log(user)
let sysuptime = os.uptime();
console.log(sysuptime);
let obj ={
    name : os.type(),
    release:os.release(),
    totmem : os.totalmem(),
    free : os.freemem()
}
console.log(obj);