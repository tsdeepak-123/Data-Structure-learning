class hashtable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total +=key.charCodeAt(i)

        }
        return total % this.size
    }
    set(key,value){
        let index=this.hash(key)
        let bucket=this.table[index]

        if(!bucket){
            this.table[index]=[[key,value]]
        }else{
            const sameKey=bucket.find((item)=>item[0]===key)
            if(sameKey){
                sameKey[1]=value
            }else{
                bucket.push([key,value])
            }
        }
    }
    get(key){
      let index=this.hash(key)
      const bucket=this.table[index]
      if(bucket){
        const sameKey=bucket.find((item)=>item[0]===key)
        if(sameKey){
            return sameKey[1]
        }
      }
      return undefined
    }
    remove(key){
        const index=this.hash(key)
        const bucket=this.table[index]
        if(bucket){
            const sameKey=bucket.find((item)=>item[0]===key)
            if(sameKey){
                bucket.splice(bucket.indexOf(sameKey),1)
            }
        }
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }
}

const hash=new hashtable(50)

hash.set("name","Deepak")
hash.set("name","Ridin")
hash.set("name","Thanseeh")
hash.set("age","25")
hash.set("place","calicut")
hash.set("place","manjeri")

hash.display()

console.log(hash.get("name"));
console.log("------------");
hash.remove("place")
hash.display()
