function findObjPropsHasOwn(object){
    let objectNames = "";
    for(let keys in object){
        objectNames = objectNames + keys + ", ";
    }
    return objectNames.slice(0, -2);
}

function findObjKeys(object){
    this.objectNames = "";
    Object.keys(object);
    for(let keys in object){
        this.objectNames = this.objectNames + keys + ", ";
    }
    return this.objectNames.slice(0, -2);
}