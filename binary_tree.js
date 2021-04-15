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
		this.depth = 0;
	}

	insertAll(values){
		values.forEach(value => this.root.insert(value));
	}

	static display(node) {
		if(node.leftChild != null){
			depth++
			Tree.display(node.leftChild);	
		}
		console.log(`${" ".repeat(depth * 4)}${node.value}`)
		if (node.rightChild != null){
			depth++
			Tree.display(node.rightChild);
		}
		depth--
	}
}
let depth = 0;
node = new Node(6);
tree = new Tree(node, [4,2,9,5,1,8,10]);
tree.insertAll(tree.array);
Tree.display(tree.root);