function Pool(){
    this._size=0
    this._set=new Set
}
Object.defineProperty(Pool.prototype,'id',{get(){
    if(this._set.size==0)
        this._set.add(this._size++)
    let it=this._set.values()
    let res=it.next().value
    this._set.delete(res)
    return res
},set(val){
    this._set.add(val)
}})
