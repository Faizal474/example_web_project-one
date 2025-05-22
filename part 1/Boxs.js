class Box {
  constructor(name, color, strapLengthLeft, strapLengthRight, volume) {
    this.name = name;
    this.color = color;
    this.strapLength = {
      left: strapLengthLeft,
      right: strapLengthRight,
    };
    this.volume = volume;
    this.holes = [];
  }

  drilhole(wallnumber, radius) {
    this.holes.push(wallnumber, radius);
  }

  newStrapLength(right, left) {
    this.strapLength.left = left;
    this.strapLength.right = right;
  }
}

export default Box;


