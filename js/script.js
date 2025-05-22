console.log("my script loaded");

var myvariable =123;

function myfunction(){
   var myvariable="hii";
console.log("inside tfunction myvariable :",myvariable);
}

myfunction();

console.log("myvariable :",myvariable);



let myletvariable = 456;

function mysecondfunction(){
    
    let myletvariable="another let";

    console.log("inside the function myletvariable :",myletvariable);
}

mysecondfunction()

console.log("myletvariable :",myletvariable);


var x= 4, y=5,z=6;

let a=1,b=2,c=3;

var empty;

console.log("emty:",empty);

w= null;

let color = "purple";


function headingColor(){
    let color="red"

    document.querySelector(".title").style.color = color
}
headingColor();

// document.querySelector(".right").style.backgroundColor=color;


let  stringdemo="my string"
console.log("typeof stringdemo :",typeof stringdemo)

let  intdemo=5
console.log("typeof intdemo :",typeof intdemo)

let  floatdemo=12.8
console.log("typeof floatdemo :",typeof floatdemo)

let undefineddemo;
console.log("typeof undefineddem :",typeof undefineddem)


let nulldemo=null;
console.log("typeof nulldemo :",typeof nulldemo)

if(nulldemo){
    console.log("nulldemo true")
}else {
    console.log("nulldemo False")
}


if(undefineddemo){
    console.log("undefineddemo true")
}else{
    console.log("undefineddemo False")

}



const myconstant = 5;
const myconstobj = {a: 'a',b:'b'}

// myconstobj={c:'c', d: 'd'} // not allowed

myconstobj.a='c'

console.log('myconstobj:',myconstobj);

const myarray=['tango','fox','tiger'];

console.log("myarray :",myarray);

myarray.push('cat');

console.log("myarray :",myarray);

console.log('typeof myarray :',typeof myarray);

let d =true;
let e = false;
console.log("d is :",typeof d)

let  myvar1=5;
let  myvar2="5";
console.log('myvar1 == myvar2 :',myvar1 == myvar2);
console.log('myvar1 === myvar2 :',myvar1 === myvar2);


a="five";
b='Five';
console.log(a==b)

a=5;
b=4;

console.log('a+b :',a+b);

b="4";
console.log('a+b :',a+b);
console.log('typeof (a+b):',typeof(a+b));
console.log('a-b :',a-b);
console.log('typeof (a-b) :',typeof(a-b));

console.log('a/b :',a/b);
console.log('a%b :',a%b);
console.log('a**b :',a**b);


let item ='flashlight';
const collection = ["piggy doll", item,5,true];

console.log("collection.length :",collection.length);

console.log('collection[1] :',collection[1]);
// console.log('collection[1] :',collection[0]);

collection[collection.length]='new item';

console.log('collection :',collection);

collection[9]='armeen';

console.log('collection :',collection);
console.log('collection[8] :',collection[8]);


let backpackcontant =["piggy","headlamp","pen"];
console.log('backpackcontant :',backpackcontant)

backpackcontant.push("pencile");
console.log('backpackcontant push :',backpackcontant);

backpackcontant.pop()
console.log('backpackcontant pop:',backpackcontant);


backpackcontant.unshift("pencile",5);
console.log('backpackcontant unshift :',backpackcontant);

backpackcontant.shift()
console.log('backpackcontant shift :',backpackcontant);


backpackcontant.forEach(function(item){
    console.log(item);
});


// for (let item of backpackcontant){
//     console.log(item);
// }

console.log("join :",backpackcontant.join());
console.log("join :",backpackcontant.join(" ,"));
console.log("join :",backpackcontant.join(" - "));


console.log("indexof : ", backpackcontant.indexOf("headlamp"))

// let indexOfpiggy=backpackcontant.indexOf("piggy");
// backpackcontant.splice(indexOfpiggy,2);
// console.log(backpackcontant);

function myFunction3(item){
     return '<li>'+ item +'</li>';
}

const myFunction4= function(item){
     return '<li>'+ item +'</li>';
}

const myFunction5= (item) =>{
    return '<li>'+ item +'</li>';
}


// const myFunction6= (item) =>('<li>'+ item +'</li>');

const myFunction7 = item =>('<li>'+ item +'</li>');



// let newarray=backpackcontant.map(myFunction3);
// let newarray=backpackcontant.map(myFunction4);
// let newarray=backpackcontant.map(myFunction5);
// let newarray=backpackcontant.map(myFunction6);
// let newarray=backpackcontant.map(myFunction7);

let newarray=backpackcontant.map(item =>'<li>'+ item +'</li>');

console.log("newarray:", newarray);


function dosomething(a,b){
    return a+b;
}
console.log("dosomething :",dosomething(1,2));


const dosomeotherthing = function(a,b){
    return a+b;
}
console.log("dosomeotherthing :",dosomeotherthing(3,4));


const MyArrawFunction = (a,b,c) =>{
    a=a+c;
    b=b*c;
    return a+b+c;
}
console.log("MyArrawFunction :",MyArrawFunction(1,2,3));


const MyoptimizedArrawFunction = (a,b,c) =>(a+b+c);
console.log("MyoptimizedArrawFunction :",MyoptimizedArrawFunction(1,2,3));


console.log("immediatelyInvokeFunction :",((a,b,c) =>{
    a=a+c;
    b=b*c;
    return a+b+c;
})(1,5,5));


const greenpack={
    name:"Frog pack",
    color:"green",
    volume:8,
    numofpackets: 3,
    newvolume: function(volume){
        this.volume=volume;
        // (function(){
        //     console.log("this.volume in the nested function",this.volume);

        // })()
        (() => {
            console.log("this.volume in the nested function",this.volume);

        })();
    }
}
greenpack.newvolume(40)
console.log("greenpack.volume:",greenpack.volume);


function mymainFunction(a,b,c,anycallbackFunction){
    a = a + b + c;
    b = b + c + a;
    c = c + a + b;
    anycallbackFunction(a + b+ c);
}
function mygenericFunction(result){
    console.log("result:",result);
}
mymainFunction( 2, 3,4,mygenericFunction );

mymainFunction( 3,4, 6, (r)=>{
    console.log("r:",r);
} );


mymainFunction( 3,4, 6, function(r){
    console.log("anoymousFunction r:",r);
} );


//conditional statements if ,elseif, else


// if (condition){
//   // if block
// }else{
//     // else block
// }

// >,>=,<,<=,==,===,!=,!==

a= 5;
b=10;

c="5";
console.log("a==c",a==c); //true
console.log("a!=c",a!=c);//false

console.log("a!==c",a!==c); //true
console.log("a===c",a===c); //false


if(a > 5){
    console.log("a is greater than 5");
}else if(b>=a){
    console.log("a is greater than or equal to b");
}else{
    console.log("no condition statified ");
}


age= 20 ;

switch(true){
    case age>30:
        console.log("age <30");
        break;
    case age>=30 && age <=50:
        console.log("age>=30 && age <=50:");
        break;
    case age >= 60:
    case age > 55:
        console.log("age>50");
        
        break;
    default:
        console.log("did not match the any case")
}

// for loops

a=10;
console.log("a:",a);
a=a+1;
a++
console.log("a:",a);
b=a++
console.log("b:",b);
console.log("a:",a);

c=++a
console.log("c:",c);
console.log("a:",a);

a--
console.log("a:",a);
d=a--
console.log("d:",d);
console.log("a:",a);
d=--a
console.log("d:",d);
console.log("a:",a);


for(let i=0;i<=10; i++){
console.log("i:",i);
}

let stuff = ["a","b","c","d","e"]
console.log('stuff.length', stuff.length)
console.log("stuff[3]:",stuff[3]);

for(let i=0;i<stuff.length;i++){
console.log("stuff[i]:",stuff[i]);
}


for(const item of stuff){
console.log("item:",item);
}

stuff.forEach((item)=>{
    console.log("for each item", item);
})

let mynewarray=[];

let forEachReturn = stuff.forEach((item)=>{
    mynewarray.push("<li>"+item+"</li>");
})

console.log("forEachReturn",forEachReturn);

console.log("mynewarray:",mynewarray);


const mynestedobject ={
    item01:{
        name: "piggy",
        type: "toy",
        weight: 30
    },
    item02:{
        name: "headlamp",
        type: "equipment",
        weight: 120
    }
}

for(const myobject in mynestedobject){
    console.log(myobject);
    console.log(mynestedobject[myobject]);
}

let myMappedArray=stuff.map((item)=>{
    console.log("mapitem:", item);
    return "<li>"+item+"</li>";
})

console.log("myMappedArray:",myMappedArray);



const leftbox=document.querySelector(".left");

leftbox.addEventListener("click", (event)=>{
    console.log("event",event);
    console.log("this",this);
    console.log("window",window);

    leftbox.classList.add("active");    
});

const rightbox=document.querySelector(".right");

// rightbox.addEventListener("mouseenter",(event)=>{
//     console.log("event" ,event);
//     rightbox.classList.add("active")
// });

rightbox.addEventListener("mouseenter",function(event){
    console.log("event :" ,event);
    this.classList.add("active")
});


// rightbox.addEventListener("mouseleave", (event) => {
//     // console.log("event :",event);
//     // rightbox.classList.remove("active");
//     console.log("this",this);
// });



rightbox.addEventListener("mouseleave", function(event) {
    // console.log("event :",event);
    // rightbox.classList.remove("active");
    console.log("this",this);
    this.classList.remove("active");
});



// function mouseEnterHandler(event){
//     console.log("this", this);
//     this.classList.add("active");
// }


// function mouseLeaveHandler(event){
//     console.log("this", this);
//     this.classList.remove("active");
// }

// rightbox.addEventListener("mouseenter",mouseEnterHandler);

// rightbox.addEventListener("mouseenter",mouseLeaveHandler);