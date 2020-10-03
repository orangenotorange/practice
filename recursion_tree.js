const tree =
  {
  id: 1,
  label: 'tree 0',
  children: [
    { id : 11, label : 'tree01', children: [
      {id:111,  label : 'tree111', children: []},
      {id:112,  label : 'tree1112', children: []}
      ]},
    { id : 12, label : 'tree01', children: [
      {id:121,  label : 'tree111', children: []},
      {id:122,  label : 'tree1112', children: []},
      {id:123,  label : 'tree1112', children: []}
      ]},
    { id:311,  label : 'tree1112', children: []}
  ]};



const countNodes = (node) => {
  let sum  = 1;
  if(node.children){
    for (const c of node.children) {
      sum += countNodes(c);
    }
  }

  return sum;
};

const countNodesTail = (node, total) => {
  if(!node.children || node.children.length === 0) {
    return total + 1;
  }

  console.log(node.children)

  for (const n of node.children) {
    console.log(n);
    return countNodesTail(n, total)
  }
};
//console.log(count(tree));

// return all nodes with no branches

const getEndNode = (node) => {
  let endNodes = [];
  if(node.children && node.children.length > 0){
    for(const c of node.children){
      //console.log(c);
      const nodes = getEndNode(c);
      endNodes.push(...nodes)
    }
  } else {
      endNodes.push(node);
  }

  return endNodes;
};

//console.log(getEndNode(tree));

// Create tree.

const nodeRangeCount = 3;
const nodeCount = Math.ceil(Math.random() * nodeRangeCount);
console.log(nodeCount);
let count = 0;
const createNodes = (node) => {
  const child = {
    level : node.level + 1,
    children : []
  };

  let hasChildren = node.level === 0;
  if(node.level < 6){
    const rand =  Math.ceil(Math.random() * nodeRangeCount);
    hasChildren = rand > 1;
  }
  if(hasChildren){
    const childCount = Math.ceil(Math.random() * nodeRangeCount);
    for(let c = 0; c < childCount; c++){

      child.id = node.level + '' + c;
      const childNode = createNodes(child);
      child.children.push(childNode);
    }
  } else {
    child.id = node.level + '0'
  }

  if(child.children.length > 0){
    console.log(count++ + ':' + child.children.length);
  }

  return child;
};

const rootNode = {id: 1, label : 'root', level: 0, children: []};
const deeptree = createNodes(rootNode, true);

const deepTreeNodecount = countNodes(deeptree);
console.log(deepTreeNodecount);
const nodeTailCount = countNodesTail(deeptree);
console.log('tail recursive' + nodeTailCount);
