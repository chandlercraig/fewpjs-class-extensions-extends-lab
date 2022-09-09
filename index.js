// Your code here
class Polygon {
  constructor(sidesArr) {
    this.sidesArr = sidesArr;
  }

  get countSides() {
    return this.sidesArr.length;
  }

  get perimeter() {
    const sum = this.sidesArr.reduce((partialSum, a) => partialSum + a, 0);
    return sum;
  }
}

class Triangle extends Polygon {
  get isValid() {
    const sideOne = this.sidesArr[0];
    const sideTwo = this.sidesArr[1];
    const sideThree = this.sidesArr[2];
    if (
      sideOne + sideTwo > sideThree &&
      sideTwo + sideThree > sideOne &&
      sideOne + sideThree > sideTwo
    ) {
      return true;
    } else return false;
  }
}

class Square extends Polygon {
  get isValid() {
    return this.sidesArr.every((val, i, arr) => val === arr[0]);
  }

  get area() {
    const sqArea = this.sidesArr[0] * this.sidesArr[1];
    return sqArea;
  }
}
