function bubbleSort(arr) {
	const len = arr.length

	for (let i = 0; i < len - 1; i++) {
		for (let j = 0; j < len - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
			}
		}
	}

	return arr
}

function selectionSort(arr) {
	const len = arr.length
	let minIndex = 0

	for (let i = 0; i < len - 1; i++) {
		minIndex = i

		for (let j = i + 1; j < len; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j
			}
		}

		[arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
	}

	return arr
}

function insertionSort(arr) {
	let preIndex = 0, curr = arr[0]

	for (let i = 1; i < arr.length; i++) {
		preIndex = i - 1
		curr = arr[i]

		while (preIndex >= 0 && arr[preIndex] > curr) {
			arr[preIndex + 1] = arr[preIndex]
			preIndex--
		}

		arr[preIndex + 1] = curr
	}

	return arr
}

function shellSort(arr) {
	const len = arr.length

	for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
		for (let i = gap; i < len; i++) {
			let j = i
			const curr = arr[i]

			while (j - gap >= 0 && curr < arr[j - gap]) {
				arr[j - gap] = arr[j]
				j = j - gap
			}

			arr[j] = curr
		}
	}

	return arr
}

class Heap {
	constructor(compare) {
		this.compare = compare
		this.data = []
	}

	insert(element) {
		this.data.push(element)
		let index = this.data.length - 1
		const curr = this.data[index]

		while (index > 0) {
			const parentIndex = Math.floor((index - 1) / 2)
			const parent = this.data[parentIndex]

			if (this.compare(curr, parent) < 0) {
				this.data[index] = parent
				index = parentIndex
			} else {
				break
			}
		}

		this.data[index] = curr
	}

	extractMax() {
		if (this.data.length <= 1) {
			return this.data.pop()
		}

		const max = this.data[0]
		this.data[0] = this.data.pop()

		const len = this.data.length
		let index = 0
		const curr = this.data[index]

		while (true) {
			const leftIndex = index * 2 + 1, rightIndex = index * 2 + 2
			let leftChild = null, rightChild = null, swap = null

			if (leftIndex < len) {
				leftChild = this.data[leftIndex]
				if (this.compare(leftChild, curr) < 0) {
					swap = leftIndex
				}
			}

			if (rightIndex < len) {
				rightChild = this.data[rightIndex]
				if ((swap === null && this.compare(rightChild, curr) < 0) || (swap !== null && this.compare(rightChild, leftChild) < 0)) {
					swap = rightIndex
				}
			}

			if (swap === null) {
				break
			}

			this.data[index] = this.data[swap]
			index = swap
		}

		this.data[index] = curr

		return max
	}
}

function heapSort(arr) {
	const heap = new Heap((a, b) => a - b)

	for (let i = 0; i < arr.length; i++) {
		heap.insert(arr[i])
	}

	for (let i = 0; i < arr.length; i++) {
		arr[i] = heap.extractMax()
	}

	return arr
}

const arr = [3, 1, 5, 4, 2, 5, 6, 0]
// console.log(bubbleSort(arr))
// console.log(selectionSort(arr))
// console.log(insertionSort(arr))
// console.log(shellSort(arr))
console.log('heap', heapSort(arr)) // heap [0, 1, 2, 3, 4, 5, 5, 6]
