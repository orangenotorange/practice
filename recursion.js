const sumBelow = (n) => {
    if(n === 1){
        return n;
    }

    return n + sumBelow(n -1);
};