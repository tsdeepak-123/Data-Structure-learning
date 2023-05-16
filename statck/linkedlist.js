
// class node{
//   constructor(data){
//     this.data=data
//     this.next=null
//   }
// }
// class stack{
//   constructor(){
//     this.top=null
//     this.size=0
//   }
//   push(data){
//     let newnode=new node(data)
//     if(this.top==null)
//     this.top=newnode
//     else{
//       newnode.next=this.top
//       this.top=newnode
//     }
//     this.size++
//   }
//   pop(){
//     if(this.top){
//       this.top=this.top.next
//     }
//   }
//   removemid(){
//     let mid=Math.floor(this.size/2)
//     let i=0;
//     let temp=this.top;
//     while (temp) {
//       i++
//       if(i==mid){
//         var remove=temp.next.data
//         temp.next=temp.next.next
//       }
//       temp=temp.next
//     }
//    console.log('removemid=',remove);
//   }
//   secondlarge(){
//    let big=-Infinity
//    let second=-Infinity
//    let temp=this.top
  
//   while (temp) {
//     if(temp.data>big)
//     big=temp.data
//     else if(temp.data>second )
//     second=temp.data
    
//     temp=temp.next
//   }
   

//    console.log('big=',big);
//    console.log('second big=',second);
//   }
//   display(){
//     let temp=this.top
//     while(temp){
//       console.log(temp.data)
//       temp=temp.next;
//     }
//   }
// }

// let newstack=new stack()
// newstack.push(10)
// newstack.push(20)
// newstack.push(30)
// newstack.push(40)
// newstack.push(50)
// newstack.display()
// // newstack.pop()

class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class Stack{
    constructor(){
    this.top=null
    this.size=0
    }
    push(data){
        const node=new Node(data)
        if(this.top==null){
            this.top=node
        }else{
            node.next=this.top
            this.top=node
        }
        this.size++
    }
    pop(){
        if(this.top){
            this.top=this.top.next
        }
    }
    

    display(){
        let temp=this.top
        while(temp){
            console.log(temp.data)
            temp=temp.next
        }
    }
}

let stack=new Stack()
stack.push(14)
stack.push(30)
stack.push(16)
stack.push(15)
stack.push(45)
stack.pop()
// stack.peak()
stack.display()




