
// function bubble(arr){
//     let swapped
//     do{
//         swapped=false
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]>arr[i+1]){
//             let temp=arr[i]
//             arr[i]=arr[i+1]
//             arr[i+1]=temp
//             swapped=true
//         }
//     }
    
// }while(swapped){
//     return arr
// }
// }

// const arr=[1,24,6,789,75,4]
// const sorted=bubble(arr)
// console.log(sorted)


function bubble(arr){
 
let swapped

do{
    swapped=false
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            let temp=arr[i]
            arr[i]=arr[i+1]
            arr[i+1]=temp
            swapped=true
        }
    } 
}while(swapped){
    return arr
}
}

const arr=[1,3,5,57,2,86,2,1,30]
const sorted=bubble(arr)
console.log(sorted)


