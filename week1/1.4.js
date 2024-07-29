// Loops
let ans =0;
for(let i=0;i<=50;i++){
    ans+=i;
}
console.log(ans);

// call-backs
// passing fnc as arguments

function square(n){
    return n*n;
}

function sumofsquares(a,b){
    const val1 =square(a);
    const val2 =square(b);
    return val1+val2;
}

console.log(sumofsquares(1,2));