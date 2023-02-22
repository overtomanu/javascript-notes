/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


// bugs encountered while implementing heap
// in heap remove method, not comparing with node that is going down and instead comparing with node at parent index
// error in parent index calculation in heap add method, floor index/2 will not parent index, 
//   instead we have to use (index-1)/2

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let res = new ListNode();
    if(lists===null || lists.length===0){
        return null;
    }
    let heap = [];

    for(let i=0;i<lists.length;i++){
        if(lists[i]!=null){
            addToHeap(heap,lists[i].val,lists[i]);
        }
    }

    let tail=res;
    while(heap.length>0){
        let min=removeFromHeap(heap);
        //console.log("removed from heap:",min[0]);
        tail.next=min[1];
        tail=tail.next;
        if(min[1].next!=null){
            addToHeap(heap,min[1].next.val,min[1].next);
        }
    }

    return res.next;
};

/**
priority should be number, object is any object which has the priority
 */
function addToHeap(heap, priority, object){
    //add at the end of array and move up the node until it's parent has lesser priority
    //console.log("adding to heap:",priority);
    heap.push([priority,object]);
    let childIdx = heap.length-1;
    let parentIdx=Math.floor((childIdx-1)/2);
    while(parentIdx>-1 && heap[parentIdx][0]>priority){
        heap[childIdx]=heap[parentIdx];
        //console.log("heap modified:",heap);
        childIdx=parentIdx;
        parentIdx=Math.floor((childIdx-1)/2); // element at index 4 has parent at index 1
        if(parentIdx===childIdx){ // incase index becomes zero
            break;
        }
    }
    heap[childIdx]=[priority,object];
    //console.log("heap after addition:",heap);
}

function removeFromHeap(heap){
    //get the first element to return as result
    //remove the last element and make it as the first (top) element
    //move it down until it has larger priority from that of its parent

    //console.log("removing from heap:",heap);
    if(heap.length>0){
        let result=heap[0];
        if(heap.length===1){
            heap.pop();
            return result;
        }
        heap[0]=heap.pop();
        let nodeDown=heap[0];
        let parentIdx=0,childIdx=1;
        while(childIdx<heap.length){
            //console.log("remove loop",parentIdx,childIdx);
            if(childIdx+1<heap.length && heap[childIdx+1][0]<heap[childIdx][0]){
                childIdx++;
            }
            if(nodeDown[0]>heap[childIdx][0]){
                heap[parentIdx]=heap[childIdx];
                parentIdx=childIdx;
                childIdx=childIdx*2+1;
            }else{
                break;
            }
        }
        heap[parentIdx]=nodeDown;
        //console.log("heap after remove:",heap);
        return result;
    }
    return null;
}