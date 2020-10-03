const array = [
    { id: 0, tags: ['apple','banana', 'carrot','pear','soda']},
    { id: 1, tags: ['apple','pear']},
    { id: 2, tags: ['banana','soda']}
    ];

const search = ['carrot', 'soda'];

const result = array.filter(f => {
    return search.some(s => f.tags.includes(s));
});

console.log(result);