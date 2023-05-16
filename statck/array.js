// class stack {
//   constructor(){
//   this.array=[]
//   this.array2=[]
//   }
//   push(data){
//     this.array.push(data)
//   }
//   pop(){
//     if(this.array.length !=0)
//    this.array.pop()
//    else
//    console.log('stack underflow');
  
//   }
//   undo(){
//     this.array2.push(this.array.pop())
//   }
//   redo(){
//     if(this.array2.length<0)
//     this.array.push(this.array2.pop())
//     else
//     console.log('stack underflow');
//   }
//   secondlarge(){
//     let big=-Infinity
//     let second=-Infinity
//     for(let i=0;i<this.array.length;i++){
//       if(this.array[i]>big){
//         second=big
//         big=this.array[i]
//       }
//       else if(second<this.array[i] && second<big){
//         second=this.array[i]
//       }
//     }
//     console.log('second large is ',second);
//   }
//   display(){
//     console.log(this.array);
//   }
// }
// let newstack=new stack()
// newstack.push(10)
// newstack.push(20)
// newstack.push(30)
// newstack.push(40)
// // newstack.pop()
// // newstack.redo()
// newstack.secondlarge()
// newstack.display()



//   class stack{
//     constructor(){
//         this.array=[]
//         this.array2=[]
//     }
//     push(data){
//         this.array.push(data)
//     }
//     pop(){
//         if(this.array.length!=0){
//             this.array.pop()
//         }else{
//             console.log("stack underflow");
//         }
//     }
//     undo(){
//         this.array2.push(this.array.pop())
//     }
//     redo(){
//         if(this.array2.length>0){
//             this.array.push(this.array2.pop())
//         }else{
//             console.log("stack underflow");
//         }
//     }

//     display(){
//         console.log(this.array)
//     }
//   }

//   let newstack=new stack()
//   newstack.push(20)
//   newstack.push(70)
//   newstack.push(30)
//   newstack.push(64)
//   newstack.push(33)
//   newstack.display()
//   newstack.undo()
//   newstack.display()
//   newstack.redo()
//   newstack.display()


class stack{
    constructor(){
        this.array=[]
        this.array2=[]
    }
    push(data){
        this.array.push(data)
    }
    pop(){
        if(this.array.length !=0){
            this.array.pop()

        }else{
            console.log("underflow");
        }
    }
    undo(){
        this.array2.push(this.array.pop())
    }
    redo(){
        if(this.array2.length>0){
        this.array.push(this.array2.pop())
        }else{
            console.log("underflow");
        }
    }
    display(){
        console.log(this.array);
    }
}

let newstack=new stack()

newstack.push(78)
newstack.push(57)
newstack.push(45)
newstack.push(23)
newstack.push(24)
newstack.push(21)
newstack.display()
newstack.undo()
newstack.display()
newstack.redo()
newstack.display()






 