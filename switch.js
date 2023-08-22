const readline = require('readline')
const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
userInterface.prompt()

userInterface.on("line", input => {

    switch (+input) {
        case 0:
            console.log("Sunday")
            break;
        case 1:
            console.log("Monday")
            break;
        case 2:
            console.log("Tuesday")
            break;
        case 3:
            console.log("Wednesday")
            break;
        case 4:
            console.log("Thursday")
            break;
        case 5:
            console.log("Friday")
            break;
        case 6:
            console.log("Saturday")
            break;

        default:
            console.log(`Value: ${input} not a day`)
            break;
    }
    userInterface.close()
})