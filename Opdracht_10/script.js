/*const kiddoAge = function (number){
    if (number >=18) {
        return true; 
    } else return false; 
};

const greeting = function (adult){
    if (kiddoAge(number)){
       console.log ("Hello there"); 
    } else;{
        console.log ("Hey kiddo");
    };
}    
greeting(number = 19); */


/* BTW uitrekenen. 
Je moet een functie maken waarbij percentage 
incl btw wordt gegeven. 

Maak 2 functies 1 met btw uitrekenen
1 met nieuwe prijs. 

21%
9%


const multiply = function (BTWHoog){
    return BTWHoog * 0.21
}
console.log (multiply (10));

const doCalculation = function (BTWHoog){
    return BTWHoog + multiply (BTWHoog);
}

console.log (doCalculation (10));
console.log (doCalculation (100));
console.log (doCalculation (900));


const Laag = function (BTWLaag){
    return BTWLaag * 0.06
}
console.log (Laag (10));

const BTWCalculation = function (BTWLaag){
    return BTWLaag + Laag (BTWLaag);
}

console.log (BTWCalculation (10));
console.log (BTWCalculation (100));
console.log (BTWCalculation (900)); */

/*
Basic prijs en BTW hoeveelheid uitrekenen. 

prijs is 12 euro 
hoeveel is de prijs zonder btw? 
Hoeveel btw heb ik betaald? */ 

const prijs = function (prijsIncl){
    return prijsIncl / 1.21
}

console.log (prijs (20));

const betaaldeBTW = function (){
    return prijs - prijsIncl
}


console.log (betaaldeBTW(20,16))

