class Node{
    constructor(data){
  this.data=data
  this.next=null
}
}
class Linkedlist{
    constructor(){
       this.head=null
       this.tail=null
}
insert(data){
    const node=new Node(data)
    if(this.head==null){
        this.head=node
    }else{
        this.tail.next=node
    }
    this.tail=node
}
insertHead(data){
    const node=new Node(data)
    let temp=this.head
    if(temp){
    node.next=this.head
    this.head=node
    }
}
delete(data){
    let temp=this.head
    if(temp==data){
        this.head=temp.next
    }
    while(temp.next){
        if(temp.next.data==data){
            temp.next=temp.next.next
        }
        
        if(temp.next==null){
            this.tail=temp
            return
        }
        temp=temp.next
    }
}
print(){
    let sum=0
    let temp=this.head
    while(temp){
        console.log(temp.data)
        sum+=temp.data
      
        temp=temp.next
    }
    console.log("sum =", sum)
}
}

const List=new Linkedlist()
const arr=[1,2,3,4,5,6]

for(let i=0;i<arr.length;i++){
    List.insert(arr[i])
}

List.print()
console.log(List.head.data,"head----tail",List.tail.data)