var n = 99;
var array = [];
while (n >= 0 ) {
    function Beer() {
        
        if (n === 99){
            array.push(n);
            
        } if (n < 99 && n >= 1) {
            array.push(n);
        console.log(array[array.length - 2] + " bottles of beer on the wall, " + array[array.length - 2] + " bottles of beer.");
        console.log("Take one down and pass it around, " + array[array.length - 1] + " bottles of beer on the wall.");
        console.log(" ");
        } if (n === 0) {
            array.push(n);
        console.log(array[array.length - 2] + " bottles of beer on the wall, " + array[array.length - 2] + " bottles of beer.");
        console.log("Take one down and pass it around, no more bottles of beer on the wall.");
        console.log(" ");
        
            console.log("No more bottles of beer on the wall, no more bottles of beer.");
        console.log("Go to the store and buy some more, " + n + " bottles of beer on the wall.");
        }
        
        
        
        
        n--;
    }

   Beer();
}
