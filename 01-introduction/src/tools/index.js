function extractArguments(params) {
    let arguments = {};

    if (Array.isArray(params)) {
        
        for (let keys of params) {
            if (keys.includes("--") || keys.includes('-')) {
                let key = formatKey(keys);
                if (key.includes("=")) {

                    let k = key.split("=")[0];
                    let v = key.split("=")[1];

                    if (v === 'FALSE' || v === 'false') {
                        v = false;
                    } else if(v === 'TRUE' || v === 'true') {
                        v = true;
                    }
                    
                    arguments[k] = v;
                } else {
                    arguments[key] = true;
                }
            } else {
                if (keys.includes("=")) {
                    let k = keys.split("=")[0];
                    let v = keys.split("=")[1];

                    if (v === 'FALSE' || v === 'false') {
                        v = false;
                    } else if(v === 'TRUE' || v === 'true') {
                        v = true;
                    }
                    
                    arguments[k] = v;
                } else {
                  arguments[keys] = true;  
                }
            }
        }
    }

    return arguments;
}

function formatKey(key) {
    let characterToReplace = "-";
    if (key.includes('--')) {
        characterToReplace = "--"
    }
    return key.replace(new RegExp(characterToReplace), '');
}

module.exports = {
    extractArguments
};

