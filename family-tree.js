class FamilyTree {
  constructor (value) {
    this.value=value;
    this.children=[];
    if(typeof value !== 'string'|| value === undefined){
      throw 'Family Tree Errors';
    }
  }
  insert(name){
    const newchild =new FamilyTree(name);
    this.children.push(newchild);
  }
  familySize(){
    return this.children.length+1;
  }

  //not sure why findMember doesnt pass second test.
  findMember(name){

    // for(let i=0; i<children.length; i++){
    //   let currentloop = this.children[i];
    //   if(currentloop.value === name){
    //     return currentloop.value;
    //   }
    //   else{
    //     return undefined;
    //   }
    // }
    if ((this.value = name)) {
      return this;
    }else{
      return undefined;
    }
  }
  //Having problems regarding to how to categorize by generations
  log(){
    const str = [`--${this.value}`];
    this.children.forEach(newchild=>{
      str.push(`--${newchild.value}`);
      const fourdashes = `----${youngest.value}`
      str.push(fourdashes);
    })
  }
}
module.exports = FamilyTree;