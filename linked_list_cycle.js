class Node {
    data = null;
    next = null;
    constructor(data) {
        this.data = data;
    }
}

class LinkedList {
    head = null;

    add(node){

        if(this.head === null) {
            this.head = node;
            return;
        }

        let nextNode = this.head;
        while(nextNode.next){
            nextNode = nextNode.next;
        }

        nextNode.next = node;
    }

    hasCycle() {
        const nexts = new Set();
        let nextNode = this.head;
        while(nextNode.next){
            if(nexts.has(nextNode)) { return true; }
            nexts.add(nextNode);
            nextNode = nextNode.next;
        }

        return false;
    }
}

function main() {
    const list = new LinkedList();
    const array = [1,2,3,4,5,6];
    array.forEach(a => {
        list.add(new Node(a));
    })
    let node = list.head;
    while(node.next){
        console.log(node.data);
        node = node.next;
    }
    console.log(node.data);

    // Insert cycle.
    console.log(`Assert: has cycle = false: ${list.hasCycle()}`);
    list.head.next.next.next = list.head;
    console.log(`Assert: has Cycle = true: ${list.hasCycle()}`);
}

main();
