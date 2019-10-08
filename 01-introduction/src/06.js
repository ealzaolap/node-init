function keysAndValues(ob) {
    let keys = Object.keys(ob);
    let values = [];

    for (let i of keys) {
        values.push(ob[i]);
    }

    return [keys,values];
}