// 模拟机器人行走，遇到障碍物返回之前的路径，更新最大值。时间复杂读为O(n),空间复杂度为O(n)
var robotSim = function(commands, obstacles) {
	let x = 0
	let y = 0
	let max = 0
	let obstacle = {}
	let direction = 0

	// 存储障碍物
	for (let i = 0; i < obstacles.length; i++) {
		obstacle[obstacles[i]] = true
	}

	for (const command of commands) {
		if (command === -1) {
			direction = (direction + 1) % 4
		} else if (command === -2) {
			direction = (direction + 3) % 4
		} else {
			let steps = command

			while (steps--) {
				let prevX = x
				let prevY = y

				if (direction === 0) y++
				if (direction === 1) x++
				if (direction === 2) y--
				if (direction === 3) x--
				if (obstacle[`${x},${y}`]) {
					x = prevX
					y = prevY
					break
				}
			}
		}

		max = Math.max(max, x**2 + y **2)
	}

	return max
};