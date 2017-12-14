export function go3() {
	return new Promise((res) => {
		setTimeout(() => {
			let _t = 'here we go 3'
			res(_t)
		}, 1000)
	})
}