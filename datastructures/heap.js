//Reference: https://github.com/google/closure-library/blob/master/closure/goog/structs/heap.js
/**
 * Implements min heap where elements with lesser value for priority are returned first
 */
class Heap{
    #nodes;
    constructor(){
        this.#nodes=[];
    }
    
    /**
     * 
     * @returns no of elements in the heap
     */
    size(){
        return this.#nodes.length;
    }

    isEmpty() {
        return this.#nodes.length === 0;
    }

    /**
     * Inserts element into the heap
     * @param priority priority of the "value" object/payload
     * @param value any object which has a given priority
     */
    add(priority,value){
        let node=new Node(priority,value);
        this.addNode(node);
    }

    /**
     * Utility method to insert all priority value pairs to the heap
     * @param {Array} priorityValuePairArray 
     */
    addAll(priorityValuePairArray){
        for(let i=0;i<priorityValuePairArray.length;i++){
            const priorityValuePair = priorityValuePairArray[i];
            this.add(priorityValuePair[0], priorityValuePair[1]);
        }
    }

    /**
     * Inserts "Node" object which has priority and value property
     * @param {Node} node 
     */
    addNode(node){
        this.#nodes.push(node);
        this.#moveup(this.#nodes.length-1);
    }

    #moveup(index){
        let count=this.#nodes.length;
        while(index>0){
            let parentIndex = (index-1)>>1;
            if(this.#nodes[index].priority<this.#nodes[parentIndex].priority){
                [this.#nodes[index],this.#nodes[parentIndex]]=[this.#nodes[parentIndex],this.#nodes[index]];
            }else{
                break;
            }
            index=parentIndex;
        }
    }

    remove(){
        if(this.#nodes.length===0){
            return undefined;
        }
        let rootNode=this.#nodes[0];
        let newRoot=this.#nodes.pop();
        if(rootNode===newRoot){
            //no more nodes left
            return rootNode;
        }
        this.#nodes[0]=newRoot;
        this.#moveDown(0);
        return rootNode;
    }

    #moveDown(index){
        const noOfParents = this.#nodes.length >> 1;
        const nodeDown=this.#nodes[index];
        while(index<noOfParents){
            const leftChildIndex = 2*index+1;
            const rightChildIndex = 2*index+2;
            const smallerPriorityIndex = rightChildIndex<this.#nodes.length
                    ? (this.#nodes[rightChildIndex].priority<this.#nodes[leftChildIndex].priority
                        ?rightChildIndex
                        :leftChildIndex)
                    : leftChildIndex;
            if(this.#nodes[index].priority<this.#nodes[smallerPriorityIndex].priority){
                break;
            }
            this.#nodes[index]=this.#nodes[smallerPriorityIndex];
            index=smallerPriorityIndex;
        }
        this.#nodes[index]=nodeDown;
    }

    peek(){
        if(this.#nodes.length===0){
            return undefined;
        }
        return this.#nodes[0];
    }

    /**
     * 
     * @returns array of pairs of priority and values not necessarily in sorted order of priority
     */
    getPriorityValuePairs(){
        let result=[];
        for(let i=0;i<this.#nodes.length;i++){
            const curNode=this.#nodes[i];
            result.push([curNode.priority,curNode.value]);
        }
        return result;
    }

    toString(){
        let result="[";
        let i;
        for(i=0;i<this.#nodes.length-1;i++){
            result+=this.#nodes[i].toString()+",";
        }
        if(this.#nodes.length>0){
            result+=this.#nodes[i].toString();
        }
        result+="]";

        return result;
    }
}

class Node{
    priority;
    value;

    constructor(priority,value){
        this.priority=priority;
        this.value=value;
    }

    toString(){
        return `Node(${this.priority}, ${this.value})`;
    }
}

let heap = new Heap();
heap.addAll([[6,-1],[7,-1],[-1,-1],[11,-1],[2,-1]]);
console.log('heap.toString() :>> ', heap.toString());
console.log('heap.getPriorityValuePairs() :>> ', heap.getPriorityValuePairs());
console.log("removing and printing minimum priority elements");
while(heap.size()>0){
    console.log(heap.remove());
}
heap = new Heap();
console.log('heap.toString() :>> ', heap.toString());
