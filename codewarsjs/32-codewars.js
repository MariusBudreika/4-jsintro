function testEven(n) {
    if (n % 2 !== 0) {
        return false
    } if (n % 2 == 0) {
        return true
    }
}





console.log(testEven(0), true, "testEven for 0");
console.log(testEven(0.5), false, "testEven for 0.5");
console.log(testEven(1), false, "testEven for 1");
console.log(testEven(2), true, "testEven for 2");
console.log(testEven(-4), true, "testEven for 2");