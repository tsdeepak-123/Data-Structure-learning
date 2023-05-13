  
  function insertion(arr){
    for(let i=1;i<arr.length;i++){
      let numberToInsert=arr[i]
     let j=i-1
    while(arr[j]>numberToInsert){ 
        arr[j+1]=arr[j]   
        j=j-1
    }
    arr[j+1]=numberToInsert
}
return arr
  }
  

  const arr=[1,45,7,9,-6,14,-2]
  const sorted=insertion(arr)
  console.log(sorted)   