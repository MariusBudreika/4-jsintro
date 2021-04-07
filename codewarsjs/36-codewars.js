const areaOrPerimeter = function(l , w) {

    if (l != w) {
        return (l * 2) + (w * 2);
        
    } else {
        return l * w;
    }
  }
console.log(areaOrPerimeter(4 , 4));
console.log(areaOrPerimeter(6 , 10));

// const areaOrPerimeter = function(l , w) {
//     return l == w ? l*w : 2*(l + w)
//   };