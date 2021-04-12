/*function compareNumbers(m, n) {
    if (m < n) {
      let message = m + " is smaller than " + n;
    } else {
      let message = m + " is bigger than or equal to " + n;
    }
  
    return message;
  }*/

  const compareNumbers = (m, n) => {
    let message = "";
    if (m < n) {
        message = `${m} is smaller than ${n}`;
      } else {
        message = `${m} is bigger than or equal to ${n}`;
      }
      return message;
  }
  
  console.log(compareNumbers(7, 5));
//second

const getCircleArea = (radius) => {
    const pi = Math.PI;
    const rSquared = Math.pow(radius, 2);
  
    return pi * rSquared;
  }
  
  const getCircleAreas = (radiusArr) => {
    const areasArr = [];
  
    for (let i = 0; i < radiusArr.length; i++) {
      const circleArea = getCircleArea(radiusArr[i]);
      areasArr.push(circleArea);
    }
  
    return areasArr;
  }
