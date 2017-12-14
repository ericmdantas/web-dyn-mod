export function go1() {
	return new Promise((res) => {
		setTimeout(() => {
			let _t = 'here we go 1'
			res(_t)
		}, 1000)
	})
}