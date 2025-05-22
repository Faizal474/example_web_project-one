import Backpack from"./backpack.js";

const myBackpack = new Backpack(
    "Every Backpack",
    30,
    "blue",
    10,
    20,
    20,
    false,
    "December 05, 2024 12:00:00 UTC+05:30"

)
const content=`
<main>
    <article>
        <h1>${myBackpack.name}</h1>
        <ul>
            <li>Volume:${myBackpack.volume}</li>
            <li>Color:${myBackpack.color}</li>
            <li>age:${myBackpack.howOld()}</li>
            <li>Number of Pocket:${myBackpack.numofpocket}</li>
            <li>Left strap Length:${myBackpack.strapLength.left}</li>
            <li>Right strap Length:${myBackpack.strapLength.right}</li>
            <li>Lid Status:${myBackpack.lidOpen}</li>
        </ul>
    </article>
</main>
`
// const myVar=3;
// const myVar2= 5;
// // const MyString='myVar ='+ myVar + 'myVar2 ='+ 
// const MyString = `myVar = ${myVar}   myVar2 = ${myVar2} `;
// console.log(MyString);

// document.body.innerHTML= content;