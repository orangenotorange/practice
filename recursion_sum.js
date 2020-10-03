function appendUnique(array) {
    const set = new Set();
    array.forEach(a => {
        const key = a.sort((c,d) => c - d).join(',').toString();
        set.add(key);
    })
    return [...set.values()].map(s => s.split(',').map(n => Number(n)));
}

function getCombinations(array, output) {
    if(array.length === 1){
        return [...output, array];
    }
   
    let local = [[...array].sort((a,b) => a - b)];
       
    const n = array.shift();
    for(let i = 0; i < array.length; i++) {
        let remaining = [...array]
        remaining.splice(i,1);
        remaining = [n,...remaining];
        local =  [...local, ...getCombinations(remaining, local)];
    }
    local =  [...local, ...getCombinations(array, local)];
    return appendUnique(local);
}

function powerSum(X, N) {
    // 1 figure out the max power to use. 
   const max = Math.floor(Math.pow(X, 1/N));
   
   // 2 get a list of all the values up to that power.
   const powers = [];

   for(let i = 1; i <= max; i++){
       powers.push(Math.pow(i,N));
   }
   
   return powers;
}

const target = 100;
const n = 2;
const numbers = powerSum(target, n); //[3, 9, 8, 4, 5, 7, 10];
console.log(numbers)
const results = getCombinations(numbers,[]);
console.log(results)
const sums = results.map(r => r.reduce((a,b) => a + b, 0))
console.log(sums);
const success = sums.filter(s => s === target);
console.log(success.length);