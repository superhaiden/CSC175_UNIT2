console.log("Hello World!");
console.log("Hello World Haiden Coates");

var str = "abcdefghijklmnopqrstubwxyz";
for (i = 0; i < str.length; i++) { 
    var  abc = str[i];
console.log(abc);
}

var str = "P51-Mustang";
for (i = 0; i < str.length; i++) { 
    var P51 = str[i];
	console.log(P51);
}

var str = "The Avengers: age of Ultron";
for (i = 0; i < str.length; i++) { 
    var The = str[i];
	console.log(The);
}

var str = "a quoted 'statement' within a string"
for (i = 0; i < str.length; i++) { 
    var statement = str[i];
	console.log(statement);
}
//what we did in class
function calculator( arg1, acttion)
if(arg1 === null || arg1 === undefined){ return "INVALID";}
if(arg2 === null || arg2 === undefined){ return "INVALiD";}
if(action ==== null || action === undefined){ return "INVALID";}

if(typeof(arg1) !== "number"){ return "INVALID"}
if(typeof(arg2) !== "number"){ return "INVALID"}
if(typeof(action) !== "string"){ return "INVALID"}

if(acttion === "add"){ return arg1 + arg2; }
if(acttion === "swubtract"){ return arg1 - arg2; }
if(acttion === "multiply"){ return arg1 * arg2; }
if(acttion === "divide"){ return arg1 / arg2; }

return "INVALID";


var testdate = [
    {arg1: 2, action: "add", arg2: 2}
    {arg1: 2, action: "subtract", arg2: 2}
    {arg1: 2, action: "multiply", arg2: 2}
    {arg1: 2, action: "divide", arg2: 2}
];