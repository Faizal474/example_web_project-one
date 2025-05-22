class Backpack {
  constructor(
    name,
    color,
    volume,
    numofpocket,
    strapLengthL,
    strapLengthR,
    lidOpen,
    boughtOn
  ) {
    this.name = name;
    this.color = color;
    this.numofpocket = numofpocket;
    this.volume = volume;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
    this.boughtOn = boughtOn;
  }
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  howOld(){
   let now = new Date();
   let boughtOn = new Date(this.boughtOn);
   let elapsed =now - boughtOn;
   let daysElapsed = Math.floor(elapsed /(1000*60*60*24))
   return daysElapsed;
  }
}
export default Backpack;
