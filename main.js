// // var text = 5;
// var numri = 10;
// var person = {firstname: 'John',lastname: 'Doe', age:25};
// // var text = '';
// var x;
let i = 0;
let n = 0;
let x = 0;


// // for (i = 0;i<5;++){
// // //     text += "The number is"+ i + "<br>";
// // }
// // console.log(text);

// for (i=0;i<10;i++){
//     numri += "the number is" + i + "<br>";
// }
// console.log(numri);

// for(x in person){
//     // text += person[x]
//     document.write(x + "<br>");
// }
// // console.log(text)

// do{
//     i += 1;
//     console.log(i);
// }while(i<5);

// while(n<3){
//     n++;
//     x += n;
// }
// console.log(x);

var students = ["John", "Mark", "Ana"];

// for(i=0;i<students.length;i++){
//     document.write(students[i]+ '<br>')
// }

var names_input = document.getElementById('name_input')
var btnAdd = document.getElementById('btnAdd');
var btnShow = document.getElementById('btnShow')

btnAdd.onclick =function(){
    students.push(names_input.value);
}
btnShow.onclick = function(){
    for(i=0; i<students.length;i++){
        document.write(students[i] + '<br>');
    }
}