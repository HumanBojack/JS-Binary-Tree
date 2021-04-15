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
		if(node.rightChild != null){
			depth++
			Tree.display(node.rightChild);	
		}
		console.log(`${" ".repeat(depth * 4)}${node.value}`)
		if (node.leftChild != null){
			depth++
			Tree.display(node.leftChild);
		}
		depth--
	}

	find(value, node = this.root){
		if (node.value == value){
			return node;
		} else if (value > node.value && node.rightChild != null){
			return this.find(value, node.rightChild);	
		} else if (value < node.value && node.leftChild != null){
			return this.find(value, node.leftChild);
		} else {
			return null;
		}
	}

	getElementsInOrder(node = this.root, results = []){
		if(node.leftChild != null){
			this.getElementsInOrder(node.leftChild, results);
		}
		results.push(node.value);
		if(node.rightChild != null){
			this.getElementsInOrder(node.rightChild, results);
		}
		return results;
	}

	getElementsInReverseOrder(node = this.root, results = []){
		if(node.rightChild != null){
			this.getElementsInReverseOrder(node.rightChild, results);
		}
		results.push(node.value);
		if(node.leftChild != null){
			this.getElementsInReverseOrder(node.leftChild, results);
		}
		return results;
	}
}
let depth = 0;
node = new Node(6);
tree = new Tree(node, [4,2,9,5,1,8,10]);
tree.insertAll(tree.array);
Tree.display(tree.root);
console.log(tree.find(2))
console.log(tree.getElementsInOrder())
console.log(tree.getElementsInReverseOrder())