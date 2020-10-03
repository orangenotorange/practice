
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
   
    //return [...local].sort((a,b) => b.length - a.length );
    return appendUnique(local).sort((a,b) => b.length - a.length )
}

const array = [1,2,3,4,5,6,7,8];
const result = getCombinations(array, []);
console.log(result);