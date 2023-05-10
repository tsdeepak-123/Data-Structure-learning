
function BinarySearch(arr,t,s,e){
    while(s<=e){
        let mid=Math.floor(s+(e-s)/2)
        if(arr[mid]==t){
            return mid
        }else if(t<arr[mid]){
            e=mid-1
        }else{
            s=mid+1
        }
    }
    return -1 
}

const arr=[1,2,3,4,5,6,7,8]
let s=0
e=arr.length-1
console.log(BinarySearch(arr,5,s,e))