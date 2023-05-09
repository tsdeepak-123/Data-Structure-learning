let flag
function unique(arr){
for(let i=0;i<arr.length;i++){
    let flag=0
    for(let j=0;j<arr.length;j++){
        if(i!=j && arr[i]==arr[j]){
            flag=1
        }
    }
    if(flag==0){
        console.log(arr[i]);
        }
    }
}

const arr=[1,2,3,3,4,5,6,6,7]
unique(arr)
