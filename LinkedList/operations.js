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
print(){
    let temp=this.head
    while(temp){
        console.log(temp.data)
        temp=temp.next
    }
}
}

const List=new Linkedlist()
const arr=[1,2,3,4,5,6]

for(let i=0;i<arr.length;i++){
    List.insert(arr[i])
}

List.print()