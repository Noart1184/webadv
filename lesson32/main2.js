// var input = document.getElementById('input_id')
// var button = document.getElementById('btn_id')
// var text = document.getElementById('teksti_id')

// button.onclick = function(){
//     text.innerHTML = input.value;
// }

// var input1 = document.querySelector('#input_id');
// var input2 = document.querySelector('#input2_id');
// var ans = document.querySelectorlector('#answer');

// button.addEventListener('click', function()){
//     // ans.innerHTML = input1.value + input2.value;
//     ans.innerHTML = parseInt(input1.value) + parseInt(input2.value);
// }

var text = 'The best school in the world is Digital School';
var result = text.search('Digital School');
document.getElementById('result1').innerHTML = result;

var text = 'The best school in the world is Digital School';
var result = text.replace('Digital School', 'Another School');
document.getElementById('result2').innerHTML = result;

var text2 = "abcdef";
var regex = new RegExp('abc');
document.getElementById('result3').innerHTML = regex.test(text2);

var text3 = "My school is the best school in the world!";
var regex = /o/g;
document.getElementById('result4').innerHTML = text3.match(regex);

var text4 = "Digital School is the best school on the world!!";
var regex = /[abc]/g;
document.getElementById('result5').innerHTML = text.match(regex);

var text5 = "Digital School is in the top 10 best school of the world!";
var regex = /[0-9]/g;
document.getElementById('result6').innerHTML = text5.match(regex);

var text6 = "100 percent gdgdgdgdgdgdgdgdgdgcgfhfhf hgfhfhfhfh hfh 190!";
var regez = /\d/g;
document.getElementById('result7').innerHTML = text6.match(regex);



