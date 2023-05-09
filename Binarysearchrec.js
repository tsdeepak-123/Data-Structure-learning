function BinarySearch(arr,t,s,e){
     while(s<=e){
      
        let mid=Math.floor(s+(e-s)/2)
        if(arr[mid]==t){
          return mid
        }if(t<arr[mid]){
            e=mid-1
            return BinarySearch(arr,t,s,e)
        }else{
            s=mid+1
            return BinarySearch(arr,t,s,e)
        }    
        
    }
    return -1

}
const arr=[1,2,3,4,5,6,7,8,9]
let s=0
let e=arr.length-1
console.log(BinarySearch(arr,3,s,e))