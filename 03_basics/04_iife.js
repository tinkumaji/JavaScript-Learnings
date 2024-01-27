// Immediately Invoked Function Expression (IIFE)
// 

// named iife:
( function one() {
    console.log(`DB CONNECTED`);
})(); // -> ';' is mandatory for executing next iife, otherwise it will throw error for next iife code
// This is one of the exception where JS doesn't provide ';' by itself, programmer should explicitly mention the ';'

// unnamed iife:
( () => {
    console.log("DB CONNECTED TWO");
})();