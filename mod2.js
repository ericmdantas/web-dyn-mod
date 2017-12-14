export function go2() {
	return new Promise((res) => {
		setTimeout(() => {
			let _t = 'here we go 2'
			res(_t)
		}, 1000)
	})
}