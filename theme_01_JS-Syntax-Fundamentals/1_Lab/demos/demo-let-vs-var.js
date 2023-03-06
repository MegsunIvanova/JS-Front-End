let name = 3; 
var secondName = 3; 
const NAME = "Kiril";

// разликата между let и var е в scope им, 
// let има блоков scope и ще живее в тялотона само на for цикъла в примера по-долу
// var има функционален scope и ще живее в тялотона цялата функция

// const e константа и иима блоков scope

function solve () {
    for (var index = 0; index < 5; index++) {
               
    }

    console.log(index);
}

solve();
