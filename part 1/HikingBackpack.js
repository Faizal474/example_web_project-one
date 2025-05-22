import Backpack from "./backpack.js";
class HikingBackpack extends Backpack {
  constructor(
    name,
    color,
    volume,
    numofpocket,
    strapLengthL,
    strapLengthR,
    lidOpen,
    hydrationCapacity
  ) {
    super(
        name,
        volume,
        color,
        numofpocket,
        strapLengthL,
        strapLengthR,
        lidOpen
    );
    this.hydrationCapacity=hydrationCapacity
  }
}
export default HikingBackpack;