/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
	const row = Array.from(new Array(9), () => new Array(9).fill(false))
	const col = Array.from(new Array(9), () => new Array(9).fill(false))
	const block = Array.from(new Array(9), () => new Array(9).fill(false))

	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (board[i][j] !== '.') {
				const num = board[i][j] - 1
				const blockIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)

				if (row[i][num] || col[j][num] || block[blockIndex][num]) {
					return false
				} else {
					row[i][num] = true
					col[j][num] = true
					block[blockIndex][num] = true
				}
			}
		}
	}

	return true
};