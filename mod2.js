export function go2() {
	return new Promise((res) => {
		setTimeout(() => {
			let _t = 'go2'
			res(_t)
		}, 1000)
	})
}