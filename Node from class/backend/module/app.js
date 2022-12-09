//module that shares grace(local module)
var gracestack = new Array ('car', 'house', 'rich husband', 'children')
function grace() {
    for (let index = 0; index < gracestack.length; index++) {
        const element = array[index];
        console.log('share grace' + element)
    }
}

//to use the grace module
module.exports = {grace}