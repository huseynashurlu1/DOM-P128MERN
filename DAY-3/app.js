// Hello('P128');
// function Hello(groupname) {
//     console.log('Hello  ' + groupname);
// }


// // Function Expressions
// SayHello();
// var SayHello = function() {
//     console.log('Good Morning');
// }


// Arrow Functions
// var SayHello = (x,y) => x * y;
// console.log(SayHello(7,5));



// var ShowName = username => console.log('Welcome ' + username);

// ShowName('Seid');


// var Person = {
//     ad: 'Seid',
//     soyad: "Zahidov",
//     yas: 20,
//     tevellud: () => new Date().getFullYear() - Person.yas,
//     tamAd() {
//         return this.ad + " " + this.soyad
//     }
// }

// console.log(Person.tevellud());
// console.log(Person.tamAd());


// // map
// var arr = [5,7,12,15,20];

// var new_arr = arr.map(x => x*2);
// console.log(new_arr);

// var new_ar = arr.map(function(x) {
//     return x*2;
// })


// // filter

// var num = [5,10,15,20,25,30,35];

// var new_num = num.filter(x => x>18)
// console.log(new_num);

// // var new_numm = num.filter(function(x) {
// //     return x>18
// // })


// var users = [
//     {id:1,name:"Ilkin",age: 30},
//     {id:2,name:"Eli",age: 25},
//     {id:3,name:"Ruslan",age: 15},
//     {id:4,name:"Serxan",age: 10}
// ]

// var elder_users = users.filter(user => user.age > 18 && user.id == 1) 
// console.log(elder_users);


// // reduce 
// var salary = [800,1200,1500,2000,3000];
// var sum = salary.reduce((x,y) => x+y);
// console.log("Umumi mebleg: " + sum + "AZN");



// var random = [15,5,9,3,25,50,30];

// random.sort((x,y) => {
//     return y-x
// });

// console.log(random);

// random.forEach(x => console.log(x))

// random.forEach(function(x) {
//     console.log(x);
// })

// var num_arr = [5,10,15,20];

// var new_arr = num_arr.map(x => x*2).filter(x => x>20).reduce((x,y) => x+y);

// 10,20,30,40
// 30,40
// 70


// Constructor Functions

// function Person(firstname,job,salary) {
//     this.ad = firstname;
//     this.is = job
//     this.maas = salary;
// }

// var Developer = new Person('Metin','Front-end developer',100)
// var Designer = new Person('Resad','UX/UI Designer',200);

// console.log(Developer);
// console.log(Designer);

// class Person() {
//     constructor(ad,maas) {
//         this.ad = ad;
//         this.maas = maas
//     }
// }


// setTimeOut
// setInterval

// setTimeout(() => {
//     console.log('salam');
// }, 3000);

// setInterval(() => {
//     console.log('sagol');
// }, 3000);

// console.log('Salam');

// setTimeout(() => {
//     console.log('hello');
// }, 2000);

// setTimeout(() => {
//     console.log('p128');
// }, 0);

// console.log('Sagol');

// function Hello(groupname,callback) {
//     console.log('Hello ' + groupname);
//     callback();
// }

// function GroupInfo() {
//     console.log('This is P128');
// }

// Hello('P128',GroupInfo);


// function ChangeColor() {
//     var box = document.getElementById('first');
//     box.style.backgroundColor = 'green'
// }

// var btn = document.getElementById('btn')
// var box = document.getElementById('first');

// // btn.ondblclick = function() {
// //     box.style.backgroundColor = 'blue'
// // }

// btn.onmousedown = function() {
//     box.style.backgroundColor = 'blue'
// }

// btn.onmouseup = function() {
//     box.style.backgroundColor = 'green'
// }

// box.onmouseenter = function() {
//     box.style.borderRadius = '100%'
// }

// box.onmouseleave = function() {
//     box.style.borderRadius = '0%'
// }

// // contextmenu
// window.oncontextmenu = function(e) {
//     e.preventDefault();
// }

// var input = document.getElementById('input');
// var text = document.getElementById('label');

// input.onfocus = function() {
//     text.style.top = '-20px'
//     input.style.border = '2px solid red';
// }

// input.onblur = function() {
//     text.style.top = '1px'
//     input.style.border = '2px solid grey';
// }

// var select = document.getElementById('slc');
// select.onchange = function() {
//    console.log(select.value);
// }



// btn.onclick = function() {
//     var btn = document.getElementById('btn');
//     var value = document.getElementById('price').value;
//     var percent = value * 20 / 100;
//     document.getElementById('percent').innerHTML = percent + "AZN"
// }


// NodeList / HTMLCollection
// querySelector / querySelectorAll
// var btn = document.getElementById('btn');
// var btn = document.querySelector('#btn');

// btn.onclick = function() {
//     var h1 = document.getElementById('text');
//     // var div = document.querySelectorAll('.box');
//     // // h1.style.color = 'red'
//     // console.log(div);
//     // div.style.borderRadius = '100%'

//     var id = h1.getAttribute('id');
//     console.log(id);
//     h1.setAttribute('class','p128')

// }

// getAttribute / setAttribute / attribute

// var topImg = document.querySelectorAll('.top img');
// var bottomImg = document.querySelector('.bottom img');
// // console.log(topImg);

// for(var img of topImg) {
   
//     img.onclick = function() {
//         var topSrc = this.src;
//         bottomImg.src = topSrc
//     }
// }


// var btn = document.querySelector('#add');
// var ul = document.getElementById('list');
// createElement

// btn.onclick = function() {
//     var value = document.querySelector('#input').value;
//     console.log(value);

//     var li = document.createElement('li');
//     li.setAttribute('class','li')
//     li.innerHTML = value

//     var button = document.createElement('button');
//     button.setAttribute('class','btn btn-danger');
//     button.innerHTML = 'DELETE'
//     li.appendChild(button)

//     ul.appendChild(li);
// }


var btn = document.querySelector('#add');
var ul = document.getElementById('list');

btn.onclick = function() {
    var value = document.querySelector('#input').value;
    var list = '';
    list = `
        <li>
            <span>${value}</span>
            <button class="btn btn-danger">DELETE</button>
        </li>
    `
    document.getElementById('list').innerHTML = list
}