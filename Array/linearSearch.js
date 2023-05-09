

function LinearSearch(arr,t){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==t)
        return i
    }
    return-1
}
const arr=[1,2,3,4,5,6,7,8]
console.log(LinearSearch(arr,5))