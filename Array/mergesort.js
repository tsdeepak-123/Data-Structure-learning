 



//  function mergeSort(a,ll,ul){
//     if(ll<ul){
//         let mid=Math.floor((ll+ul)/2)
//         mergeSort(a,ll,mid)
//         mergeSort(a,mid+1,ul)
//         merge(a,ll,mid,ul)
//     }
//  }
//  function merge(a,ll,mid,ul){
//     let i=ll
//     let j=mid+1
//     let k=ll 
//     const b=[]
//     while(i<=mid && j<=ul){
//         if(a[i]<a[j]){
//             b[k]=a[i]
//             i++
//         }else{
//             b[k]=a[j]
//             j++
//         }
//         k++
//     }
//     if(i>mid){
//         while(j<=ul){
//         b[k]=a[j]
//         j++
//         k++
//         }
//     }else{
//         while(i<=mid){
//             b[k]=a[i]
//             i++
//             k++
//         }
//     }
//     for(let c=ll;c<=ul;c++){
//         a[c]=b[c]
//     }

//  }
//  const a=[24,57,88,7,84,77,5]

//  let ll=0
//  let ul=a.length-1
//  mergeSort(a,ll,ul)
//  console.log(a)

// function mergeSort(a,ll,ul){
//     if(ll<ul){
//     let mid=Math.floor((ll+ul)/2)

//     mergeSort(a,ll,mid)
//     mergeSort(a,mid+1,ul)
//     merge(a,ll,mid,ul)
//     }
// }

// function merge(a,ll,mid,ul){
//     let i=ll
//     let j=mid+1
//     let k=ll
//     const b=[]
//     while(i<=mid && j<=ul){
//         if(a[i]<a[j]){
//             b[k]=a[i]
//             i++
//         }else{
//             b[k]=a[j]
//             j++
//         }
//         k++
//     }
//     if(i>mid){
//         while(j<=ul){
//         b[k]=a[j]
//         j++
//         k++
//         }

//     }else{
//         while(i<=mid){
//             b[k]=a[i]
//             i++
//             k++
//         }
//     }for(let c=ll;c<=ul;c++){
//         a[c]=b[c]
//     }

// }
//  const a=[24,57,88,7,84,77,5]

//  let ll=0
//  let ul=a.length-1
//  mergeSort(a,ll,ul)
//  console.log(a)


// function mergeSort(a,ll,ul){
//     if(ll<ul){
//     let mid=Math.floor((ll+ul)/2)
//     mergeSort(a,ll,mid)
//     mergeSort(a,mid+1,ul)
//     merge(a,ll,mid,ul)
//     }

// }
// function merge(a,ll,mid,ul){
//     let i=ll
//     let j=mid+1
//     let k=ll
//     const b=[]
//     while(i<=mid && j<=ul){
//         if(a[i]<a[j]){
//             b[k]=a[i]
//             i++
//         }else{
//             b[k]=a[j]
//             j++
//         }
//         k++
//     }
//     if(i>mid){
//         while(j<=ul){
//             b[k]=a[j]
//             j++
//             k++
//         }
//     }else{
//         while(i<=mid){
//         b[k]=a[i]
//         i++
//         k++
//         }
//     }
//     for(let c=ll;c<=ul;c++){
//         a[c]=b[c]
//     }
    
// }
// const a=[24,57,88,7,84,77,5]
// let ll=0
// let ul=a.length-1
// mergeSort(a,ll,ul)
// console.log(a)


function mergeSort(a,ll,ul){
    if(ll<ul){
        let mid=Math.floor((ll+ul)/2)
        mergeSort(a,ll,mid)
        mergeSort(a,mid+1,ul)
        merge(a,ll,mid,ul)
    }
}

// function merge(a,ll,mid,ul){
//  let i=ll
//  let j=mid+1
//  let k=ll
//  const b=[]
//  while(i<=mid && j<=ul){
//     if(a[i]>a[j]){
//         b[k]=a[j]
//         j++
//     }else{
//         b[k]=a[i]
//         i++
//     }
//     k++
//  }
//  if(i>mid){
//     while(j<=ul){
//         b[k]=a[j]
//         j++
//         k++
//     }
//  }else{
//     while(i<=mid){
//         b[k]=a[i]
//         i++
//         k++
//     }
//  }
//  for(let c=ll;c<=ul;c++){
//     a[c]=b[c]
//  }
// }
//  const a=[24,57,88,7,84,77,5]

//  let ll=0
//  let ul=a.length-1
//  mergeSort(a,ll,ul)
//  console.log(a)