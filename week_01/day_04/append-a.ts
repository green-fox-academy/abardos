// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end
'use strict';
let animals = ["koal", "pand", "zebr"];

animals.forEach(function (value) {
    console.log(value + "a");
}) 

/*let animals : string = ["koal", "pand", "zebr"];

animals.array.forEach(element => {
    
});(item => console.log(item + "a"));

/*animals.map(function(item) {
    return item == "koal" ? "koal" + "a" : item; });

console.log(animals);*/

/*let apps = ['WhatsApp', 'Instagram', 'Facebook'];  
let playStore = [];  
  
apps.forEach(function(item){  
  playStore.push(item)  
});  
  
console.log(playStore);  */

//let animals = ["koal", "pand", "zebr"];

/*animals.forEach(function (value,index) {
    console.log('index: ' + index + 'value: ' + value);
}) 
 /*
function printIndexValue(index, value) {
    console.log('inde: ' + index + 'value: ' + array[index]);

}

array.forEach((value, index) => {
    console.log('index: ' + index + 'value: ' + value);

}
/*
let animals = ["koal", "pand", "zebr"].forEach(function(item,index){
    
    return item == 3 ? 3 + 1 : item; });
	console.log(item);
});*/

/*let array = [1, 2, 3, 8, 5, 6];
let newArray = [];

/*array.forEach(function (value, i){
    newArray.push(value);
})*/
/*
newArray = array.map(function (value) {
    return value;
})

newArray = array.map(value => value);

newArray = array.map(function (value) {
    if (value ==8) {
        return 4;
    } else {
        return value;
    }
});

console.log(newArray);*/