// alert("Hello Javascript");
// console.log("Hello");

// // var ism ='Behruzbek'
// let ism ='Behruzbek'
// console.log(ism);

// ism = 'burxonniddin'
// ism ='asrorbek'

// console.log(ism);

// let number =30;j

// number=number+40;

// console.log(number);

// conts ism_1 = ''behruzbek'';
// conts ism_2 ='burxondin';


// console.log(ism_1, ism_2);

// String

// const email = "sukhrobweb@gmail.com"

// let ism ="behruz"
// let familiya ="anvarjonov"


// console.log(ism,familiya);

// console.log(email);


// string concatenation

// const result = ism + " " + familiya ; orasini ochib beradi sozni

// console.log(result);


// getting characters    harfini olib beradi 
// console.log(email [10]);


// string length => uzunligini chiqarib berdi
// console.log(email.length);

// String methods

// lastIndexOf() chap tomondan sanap beradi
// const result = email.lastIndexOf("@");
// console.log(email.length);

// console.log(result);

// indexOf() ong tomondan sanaydi 
// const result = email.indexOf("@")

// console.log(result);

// substr() 1boshlab 5gacha oladi
// const result = email.substr(1, 5)
// console.log(result);

// replace() sukhrobni behruzga uzgartirib beradi 
// const result = email.replace("sukhrob", 
// "behruz");

// console.log(result);

// chorAt()  sozni hamma harfini

// nolib tashlab bita bosh harfni qoldiradi
// const result =email.charAt()
// console.log(result);


// toUpperCase() bu sozni katta qilib chiqaradi harfini -tolowerCase() bu sozni chikkina qilibchiqaradi
// const result_1 = email.toUpperCase()
// const result_2 =email.toLowerCase()
// console.log(result_1);
// console.log(result_2);


// trim()  ortiqcha joylarni olib tashidi
// console.log(email); 
// const result = email.trim();
// console.log(result
//     );

//split() sozlarni harfini sanogini chiqarib beradi
// const result  = email.split("");

// console.log(result);

// null && undefined
// let resultUndefined;
// let resultNull = null ;


// const result = 'undefined' , ${resultUndefined},  null $
// {resultNull+21}

// console.log(result);

// const ismlar = ["ilxomjon", " burxoniddin" , "asrorbek"] 

// for (let i = 0; i ,< ismlar.length; i++) {
//     console.log(ismlar[i]);
// }
// 
// let i =0;

// while(i < ismlar.lenght) {
//     console.log(ismlar[i]);
//     i++;
// }

let number = 5;

// if (mumber ==3 && number ==5)  {
//     console.log(tugri 5);
//     else if (number ==2) {
//         console.log("tugri")
//     }else{

//     }
// }

// if  (!false) {
//     console.log(hello);
// }else  {
//     alert("salom")
// }

// switch (number) {
//     case 2:
//     console.log("tugri 2");
//     break;
//     case 5 :
//     console.log("tugri 5");
//     break;
//     default:
//     console.log("tugri javob yuq");
//     br, eak;
// }

// function decloration
// myFucDe();
// function myFucDe() {
//     console.log("function decloration");
// }

// // function expression
// const myFucEx = function () {
//     console.log("function expression");
// }
// myFucEx();

//arrow
// const myFucFu = () => {
//     console.log("arrow function");
// };

// myFucFu();

// function myFuc(name = 'suhrob')
// console.log(mening ismim ${name} );

// myFuc('behruzbek ')

// const myArFuc = function (callbackFuc) {
//     let number =4;
//     callbackfuc(number)
// };

// myArFuc(function callbackFuc(raqam){
//     console.log(raqam);
// })

// const myArFuc = (number) => {
//    return 5 + (number * 3) ** 2;
// };

// const a = myArFuc(7);
// console.log(a);


// const ismlar = ["ilxomjon", "burxondin", "behruzbek"];

// ismlar.forEach((ism) => {
//     const list = ism.charAt().toUpperCase() + ism.sli~ce(1)+"bek";
//     console.log(list);
// })   


// // Object

// const user = {
//     name:"behruzbek",
//     age:"13",
//     location:"rishtan",
//     langs:["uzb","tj", "rus", "eng"],
//     login:function (name) {
//      console.log('siz bu sahifaga kirdingi ${name}');
//     }m,
//     logout:function(name) {
//      console.log('siz bu sahifani tark etingiz ${name}');
//     },
//     speck: function () {
//         console.log('men shu tillarni bilaman');
//         this.langs.forEach((lang) => {
//             console.log(lang);
//         })
//     },

//     movies : [
//         {
//             name: "Titanik",
//             lakes:100000,
//         },
//         {
//             name:"wensday",
//             lakes:"120000",
//         },
//         {
//             name:"tom end jerry",
//             likes:"10000",
//         },
//         {
//             name:"qasoskorlar",
//             likes:"6000",
//         }
//     ],

//     movieswoch: function (){
//         this.movies.forEach((movi=>{
//             const item = `Kino nomi ${movi.name}  laik ${movi.likes}`
//             console.log(item);
//         }))
//     }

// }


// user.movieswoch()
// user.speck();

//  1 getElem`sentsByTagName, taglarni, olib, beradi
// const h1El = document.getElementsByTagName("h1");
// console.log(h1El);


// 2 getElementsBuyClassName
// const listItem = document.getElementsByClassName("list-item")
// listItem.forEach((Element) => {
//    console.log(Element);
// }
// )


// // for (let i =0; i<)


// const h1El = document.querySelector("h1");


// h1El.classList.add("todos");
// h1El.classList.remove("todos");


// h1El.classList.toggle("todos");
// h1El.classList.toggle("todos");


// const ul = document.querySelector("ul");
// const listItem = document.querySelectorAll(".list-item");
// const button = document.querySelector(".btn");

// listItem.forEach((list) =>{
//   list.addEventListener("click", () => {
//         // list.style.textDEcoration = "line-through";
//     // list.style.apacity = ".5";
//     list.classList.toggle("list");
//   })
// })

// ul.addEventListener("cilck",(e) => {
//     e.target.remove();
// })

// button.addEventListener("click", () => {
//     const li = document.createElement("li");
//     li.textContent = "Hello";

//     ul.appendChild(li);
// })

// const movies = [
//   {
//     name: "avatar",
//     lakes: 100000,
//     year: "1999",
//   },
//   {
//     name: "titanik",
//     lakes: "120000",
//     year: "2010",
//   },
//   {
//     name: "qasoskorlar",
//     likes: "10000",
//     year: "1996",
//   },
//   {
//     name: "wensday",
//     likes: "6000",
//     year: "2022"
//   },
// ];

// movies.forEach((movi) => {
//   if (movi.year < 2010) {
//     console.log(movi);
//   }
// });


// const filterMovi = movies.filter((movi) => movi.year < 2010);

// console.log(filterMovi);


// const numbers = [3, 2, 1, 25, 20, 6, 7];

// const result = movies.sort((a, b) => {
//   return a.year - b.year
// });


// const movies = [
//   {
//     name: "avatar",
//     lakes: 100000,
//     year: "1999",
//   },
//   {
//     name: "titanik",
//     lakes: "120000",
//     year: "2010",
//   },
//   {
//     name: "qasoskorlar",
//     likes: "10000",
//     year: "1996",
//   },
//   {
//     name: "wensday",
//     likes: "6000",
//     year: "2022"
//   },
// ];



