const tools = require("./tools");

const argv = process.argv;

const environment = {
    node_path: argv[0],
    file: argv[1]
};

const arguments = tools.extractArguments(argv.slice(2));

module.exports = () => {
    console.table(environment);
    console.log(`Welcome to node-init.`)
    
    if (arguments.hasOwnProperty('help')) {
        console.log(`
            Use command user for view possibles actions with users.

            user --create || --update || --delete || --list || --get 
        `)
    } 

    if (Object.keys(arguments).some(key => key === 'user')) {
        console.log(arguments);
    }
};