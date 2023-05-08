// var asd = "hola soy RegExp";

// var obj = [
//     {color: "pink"},{color: "blue"}, {color: "black"}, {color: "green"}, {color: "blue"}
// ]
// console.log(obj[0]);
// console.log(obj[0].key);

// obj[0]["color"] = "asd"
// console.log(obj[0]["color"]);
// console.log(obj[0]);


// -------- includes ---------
var obj = [
    {color: "pink rojo blue"},{color: " verde BLUE"}, {color: "black"}, {color: "green"}, {color: "blue"}
]
function map (obj) {
    var newObj = [];
    const search = "Blue";
    obj.forEach((elemento) => {
    console.log(elemento)
    const search = "Blue"
        if ( elemento.color.toLowerCase().includes(search.toLowerCase()) ) {
            return newObj.push(elemento);
        }
    })
    return newObj
}
console.log(map(obj));



let iterable2 = [ {color: "pink, green"},{color: "blue, black"}, {color: "black"}, {color: "green, blue"}];

console.log(iterable2[0].color.split());
console.log(iterable2[0].color.split(""));
console.log(iterable2[0].color.split("").join(""));
console.log(iterable2[0].color.split(",").join(""));
console.log(iterable2[0].color.split(",").join("").split());
console.log(iterable2[0].color.split(",").join("").split(""));
console.log(iterable2[0].color.split(",").join("").split(" "));

// ----> logre
console.log(iterable2[3].color.split(",").join("").split(" ")[0]);
// ----> logre

var obj2 = [
     "pink","rojo" , "blue"]
const loQueBusco = "rojo";

const loQueBusco2 = "rojo2";
const porra = obj2.find(e => e.includes(loQueBusco2));
console.log(porra);