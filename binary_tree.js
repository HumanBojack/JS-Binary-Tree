class Node{
	constructor(value) {
		this.value = value;
		this.leftChild = null;
		this.rightChild = null;
	}

	insert(value){
		if(value > this.value){
			if(this.rightChild === null){
				this.rightChild = new Node(value);
			} else {
				this.rightChild.insert(value);
			}
		} else {
			if(this.leftChild === null){
				this.leftChild = new Node(value);
			} else {
				this.leftChild.insert(value);
			}
		}
	}
}

class Tree{
	constructor(rootNode, array){
		this.root = rootNode;
		this.array = array;
	}

	insertAll(values){
		values.forEach(value => this.root.insert(value));
	}
}

node = new Node(6)
tree = new Tree(node, [4,2,9,5,1,8,9])
tree.insertAll(tree.array)
console.log(tree)