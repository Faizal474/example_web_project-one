import Box from "./Boxs.js";
import Backpack from "../backpack.js";
import HikingBackpack from "./HikingBackpack.js";
// function Backpack(
//   name,
//   color,
//   volume,
//   numofpocket,
//   strapLengthL,
//   strapLengthR,
//   lidOpen
// ) {
//     this.name=name;
//     this.color=color;
//     this.numofpocket=numofpocket;
//     this.volume=volume;
//     this.strapLength={
//         left: strapLengthL,
//         right : strapLengthR,
//     }
//     this.lidOpen=lidOpen;
//     this.toggleLid=function(lidStatus){
//         this.lidOpen=lidStatus;
//     }
// }
const mybox = {
  name: "Red Box",
  color: "gray",
  strapLength: {
    left: 10,
    right: 10,
  },
  holes: [
    { wallnumber: 2, radius: 3 },
    { wallnumber: 4, radius: 2 },
  ],
  drilhole: function (wallnumber, radius) {
    this.holes.push({ wallnumber: wallnumber, radius: radius });
  },
  newStrapLength(left, right) {
    this.strapLength.left = left;
    this.strapLength.right = right;
  },
  volume: 30,
};

console.log("thise is mybox : ", mybox);
console.log({ mybox });
console.log("strap L length :", mybox.strapLength.left);
//console.log("drilhole :",mybox.drilhole)

let propertyName = "volume";
console.log(`${propertyName}`, mybox[propertyName]);

const newBox = new Box("my new Box", "black", 10, 10, 40);
const newBox1 = new Box("my new Box 2", "blue", 20, 20, 60);

console.log({ newBox });
console.log({ newBox1 });

const mybackpack = new Backpack(
  "my new Backpack",
  "Orange",
  90,
  10,
  20,
  20,
  false
);
console.log({ mybackpack });

const MyHikingBackpack = new HikingBackpack(
  "my new HikingBackPack",
  30,
  "Yellow",
  10,
  20,
  20,
  false,
  10
);
console.log({ ...MyHikingBackpack });

console.log("LidOpen :",MyHikingBackpack.lidOpen)
MyHikingBackpack.toggleLid(true);
console.log("LidOpen :",MyHikingBackpack.lidOpen)


console.log("after calling lidopen method:",{ ...MyHikingBackpack})