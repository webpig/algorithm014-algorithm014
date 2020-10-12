// 哈希表+双向链表
class ListNode {
	constructor(key, value) {
		this.key = key
		this.value = value
		this.prev = null
		this.next = null
	}
}

class LRUCache {
	constructor(capacity) {
		this.capacity = capacity
		this.hashTable = {}
		this.count = 0
		this.dummyHead = new ListNode()
		this.dummyTail = new ListNode()
		this.dummyHead.next = this.dummyTail
		this.dummyTail.next = this.dummyHead
	}

	get(key) {
		const node = this.hashTable[key]
		if (!node) return -1
		this.moveToHead(node)
		return node.value
	}

	put(key, value) {
		const node = this.hashTable[key]
		if (!node) {
			const newNode = new ListNode(key, value)
			this.hashTable[key] = newNode
			this.addToHead(newNode)
			this.count++
			if (this.count > this.capacity) {
				this.removeURLItem()
			}
		} else {
			node.value = value
			this.moveToHead(node)
		}
	}

	moveToHead(node) {
		this.remove(node)
		this.addToHead(node)
	}

	remove(node) {
		const prev = node.prev
		const next = node.next
		prev.next = next
		next.prev = prev
	}

	addToHead(node) {
		node.prev = this.dummyHead
		node.next = this.dummyHead.next
		this.dummyHead.next.prev = node
		this.dummyHead.next = node
	}

	removeURLItem() {
		const tail = this.popTail()
		delete this.hashTable[tail.key]
		this.count--
	}

	popTail() {
		const tail = this.dummyTail.prev
		this.remove(tail)
		return tail
	}
}

