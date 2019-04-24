function arrayToObj(aparam) {
    let arrayObject =
        {
            string:[], numbers:[], boolean:[]
        }
    for (i = 0; i < aparam.length; i++)
    {
        switch(typeof aparam[i])
        {
            case 'string':
                arrayObject.string.push(aparam[i]);
                break;
            case 'boolean':
                arrayObject.boolean.push(aparam[i]);
                break;
            case 'number':
                arrayObject.numbers.push(aparam[i]);
                break;
        }
    }
    return arrayObject;
}

var input = [-1, 5, "cat", false, 10.2, true, "dog"];

var object = arrayToObj(input);


