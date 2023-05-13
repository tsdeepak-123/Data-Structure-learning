
//================selection sort practices====================



// function selection(arr){

//     for(let i=0;i<arr.length;i++){
//         let min=i
//         for(let j=i+1;j<arr.length;j++){
            
//             if(arr[j]<arr[min]){
//            min=j 
//             }
//         }     let temp=arr[i]
//         arr[i]=arr[min]
//         arr[min]=temp
      
//     }

  
//     return arr

// }

// const arr=[3,6,9,115,65,2,7]
// const sorted=selection(arr)
// console.log(sorted)




//============2============

function selection(arr){
    for(let i=0;i<arr.length-1;i++){
        min=i      
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
               min=j
            }
            
        }
        let temp=arr[i]
        arr[i]=arr[min]
        arr[min]=temp
    }
    return arr
}

const arr=[1,2,34,77,5,7,87]
const sorted=selection(arr)
console.log(sorted)