class LinkedListNode {
    value;
    next;
    constructor(value=null,next=null){
        this.value=value;
        this.next=next;
    }
}

class LinkedListQueue {
    head = new LinkedListNode();
    tail = this.head;
    
    addElement(val){
        let newNode=new LinkedListNode(val,null);
        this.tail.next=newNode;
        this.tail=this.tail.next;
    }
    
    getElement(){
        let result=null;
        if(this.head.next!=null){
            result=this.head.next.value;
            this.head.next=this.head.next.next;
        }
        if(this.head.next===null){
            //all elements are removed, so point tail to empty head node
            this.tail=this.head;
        }
        return result;
    }

    toString(){
        let node=this.head.next;
        let result="";
        while(node!=null){
            result+=node.value.toString()+",";
            node=node.next;
        }
        if(result.length>0){
            result=result.substring(0,result.length-1);
        }
        return "Queue => ["+result+"]";
    }
}

let queue=new LinkedListQueue();
queue.addElement("test1");
queue.addElement("test2");
console.log('queue.toString() :>> ', queue.toString());
console.log('queue.getElement() :>> ', queue.getElement());
console.log('queue.getElement() :>> ', queue.getElement());
console.log('queue.getElement() :>> ', queue.getElement());

queue.addElement("el1");
queue.addElement("el2");
queue.addElement([3,3,3]);
console.log('queue.toString() :>> ', queue.toString());

let element=null;
while((element=queue.getElement())!=null){
    console.log('element :>> ', element);
}
console.log('[4,4,4,5] :>> ', [4,4,4,5].toString());