var prompt = require('prompt-sync')();
var counter = 0;

function view(counter) {
    return 'Count = ' + counter + '\n' +
        '\n' +
        '(+)  (-) \n' +
        '\n' +
        '\n' +
        '(q) for quit' +
        '\n'

}

function update(msg, counter) {
    if (msg === '+') {
        return counter + 1;
    } else if (msg === '-') {
        return counter - 1;
    } else {
        return counter;
    }

}

function app(counter) {
    while (true) {
        const currentView = view(counter)
        console.clear()
        console.log(view(counter))
        let des = prompt('What would you do? : ')
        if (des === 'q') {
            break
        } else {
            const msg = des
            counter = update(msg, counter)

        }

    }

}
app(0)