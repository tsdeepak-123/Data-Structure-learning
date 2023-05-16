
// class Node{
//     constructor(data) {
//         this.data=data
//         this.next=null
        
//     }
// }
// class Queue{
//     constructor() {
//         this.front=null
//         this.rear=null
//     }

//     enqueue(data){
//         const newNode=new Node(data)
//         if(this.rear==null){
//             this.front=this.rear=newNode
            
//         }
//         else{
//             this.rear.next=newNode
//             this.rear=newNode

//         }
//     }

//     dequeue(){
//         if(this.front==null){
//             console.log("empty");
//         }
//         else{
//             this.front=this.front.next
//             if(this.front==null){
//                 this.rear=null
//             }
//         }
//     }
   

//     display(){
//         let currentNode=this.front
//         while(currentNode){
//             console.log(currentNode.data);
//             currentNode=currentNode.next
//         }
//     }
// }

// const myQueue=new Queue()

// myQueue.enqueue(1)
// myQueue.enqueue(2)
// myQueue.enqueue(3)
// myQueue.enqueue(4)
// myQueue.display()
// console.log("-------------------");
// myQueue.dequeue()


// myQueue.display()

// myQueue.display()


class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class Queue{
    constructor(){
        this.front=null
        this.rear=null
    }
    enqueue(data){
        const node=new Node(data)
        if(this.rear==null){
            this.front=this.rear=node
        }else{
            this.rear.next=node
            this.rear=node
        }
    }
    dequeue(){
        if(this.front==null){
            console.log("empty")
        }else{
            this.front=this.front.next
            if(this.front==null)
            this.rear=null
        }
    }

    display(){
        let temp=this.front
        while(temp){
            console.log(temp.data)
            temp=temp.next
        }
    }
}

let queue=new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.enqueue(60)
queue.dequeue()
queue.display()

