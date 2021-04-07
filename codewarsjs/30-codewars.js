function positiveSum(a){
              
     let total =  0;
     for(let i = 0; i < a.length; i++)      
       if (a[i] > 0) {
           total += a[i];
        }
      return total;
     }


console.log( positiveSum( [ 1, 2, 3, 4, 5 ]));
console.log( positiveSum( [1 ,-2 ,3 ,4 ,5 ]));
console.log( positiveSum( [ ]));
console.log( positiveSum( [-1 ,-2 ,-3 ,-4 ,-5 ]));
console.log( positiveSum( [-1 ,2 ,3 ,4 ,-5 ]));
