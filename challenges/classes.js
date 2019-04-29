// 1. Copy and paste your prototype in here and refactor into class syntax.
function CuboidMaker(newObj){
    this.length = newObj.length;
    this.width = newObj.width;
    this.height = newObj.height;
    
    
  }
  CuboidMaker.prototype.volume = function(){
    let vol = this.length * this.height * this.width;
    console.log(`The volume is ${vol}`);
  }

  CuboidMaker.prototype.surfaceArea = function(){
    let sArea = 2 *(this.length*(this.width+this.height)+(this.width*this.height));
    console.log(`The surface area is ${sArea}.`);
  }

class Cuboid extends CuboidMaker{
    constructor(newObj){
        super(newObj);
    }
}
const cuboid = new Cuboid ({
    length:4,
    width:5,
    height:5
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends Cuboid{
    constructor(newObj){
        super(newObj);
    }
}
const cuboid2 = new CubeMaker ({
    length:4,
    width:5,
    height:5
  });

  cuboid2.volume();
  cuboid2.surfaceArea();