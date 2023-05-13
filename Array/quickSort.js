
// function quicksort(arr){
// if(arr.length<2){
//     return arr
// }
//     pivot=arr[arr.length-1]
//     let left=[]
//     let right=[]
// for(let i=0;i<arr.length-1;i++){
//     if(arr[i]<pivot){
//         left.push(arr[i])
//     }else{
//         right.push(arr[i])
//     }
// }
// return [...quicksort(left), pivot, ...quicksort(right)]
// }
// const arr=[789,4,6,-1,-3]
// const sorted=quicksort(arr)
// console.log(sorted)  




// function partition(a,l,r){
        
//     let pivot=a[l]
//     let i=l+1
//     let j=r

//     while(i<=j){
//             while(a[i]<pivot){
//                     i++
//             }
//             while(a[j]>pivot){
//                     j--
//             }

//             if(i<=j){
//                     let temp=a[i]
//                     a[i]=a[j]
//                     a[j]=temp
//                     i++
//                     j--
//             }

//     }

//     let temp=a[l]
//     a[l]=a[j]
//     a[j]=temp

//     return j
// }

// function quickSort(a,l,r){

//     if(l<r){

//             let p=partition(a,l,r)

//             quickSort(a,l,p-1)
//             quickSort(a,p+1,r)
//     }
// } 
// const a=[30,10,22,1,80,25,77,12,34]
// let l=0
// let r=a.length-1
// quickSort(a,l,r)
// console.log(a);
























