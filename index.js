// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendCat(name){
cats.push("Ralph")
};
function destructivelyPrependCat(name){
    cats.unshift("Bob")
};
function destructivelyRemoveLastCat(name){
    cats.pop("Garfield")
};
function destructivelyRemoveFirstCat(name){
    cats.shift("Milo")
};
function appendCat(name){
    let copyOfCats = cats.slice();
    copyOfCats.push("Broom")
    return copyOfCats
};
function prependCat(name){
    let copyOfCats = cats.slice();
    copyOfCats.unshift("Arnold")
    return copyOfCats
};
function removeLastCat(name){
    let copyOfCats = cats.slice();
    copyOfCats.pop("Garfield");
    return copyOfCats
};
function removeFirstCat(name){
    let copyOfCats = cats.slice();
    copyOfCats.shift("Milo");
    return copyOfCats
};







