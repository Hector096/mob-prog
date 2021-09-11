class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null
    this.size = 0;
  }

  add(val){
    let newNode = new Node(val)
    
    if(!this.head){
        this.head = newNode
        this.tail = this.head
    } else {
       this.tail.next_node = newNode
       this.tail = newNode 
     }
     this.size++
     return this
   }
  get(index){
    if(index < 0 || index >= this.size) return null;
    var counter = 0;
    var current = this.head;
    while(counter !== index){
        current = current.next_node;
        counter++;
    }
    return current.value;
}
}

const list = new LinkedList();

list.add(3);
list.add(5);
console.log(list.get(1));
// => 5

module.exports = LinkedList;
