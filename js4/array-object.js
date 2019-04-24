/*
 *Sukhveer Jawandha
* 4/24/2019
* 328/javascript/js4/array-object.js
* This file contains function that separates the the values according to the object.
 */
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


function element(par)
{
    for (var key in par) {
        var object = document.createElement("h2");
        var value = document.createElement("p")
        object.innerText= key.toUpperCase();
        value.innerText= par[key].toString();
        document.body.appendChild(object);
        document.body.appendChild(value);
    }
}
element(object);