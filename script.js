out_obj = document.getElementById("disp");
function my_function(num1, callback){
    callback(num1);
    factorial(num1);
}

let prime = (data) => {
    let factors = 0;
    for(let i=1; i<=data; i++){
        if( data%i == 0){
            factors++;
        }
    }
    if(factors == 2)
        console.log(data+" is Prime")
    else    
        console.log(data+" is not Prime")   
}
let composite = (data) => {
    let factors = 0;
    for(let i=1; i<=data; i++){
        if( data%i == 0){
            factors++;
        }
    }
    if(factors > 2)
        console.log(data+" is Composite")
    else    
        console.log(data+" is not Composite")
}
let factorial = (data) =>{
    let f=1;
    for(let i=1; i<=data; i++){
        f*=i;
    }
    console.log(data +" factorial is " + f);
}

my_function(2, prime);
my_function(2, composite);
my_function(17, prime);