// antra didziausia skaiciu

function getSecondHighest(arr){
    var first= 0,second= 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > first){
            second = first;
            first = arr[i];
        }
        else if(arr[i]>second && arr[i]<first){
             second = arr[i];
       } 
    }
    return second;
}

console.log( getSecondHighest([2, 18, 6]));