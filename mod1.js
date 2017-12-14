export function go1() {
	return new Promise((res) => {
		setTimeout(() => {
			let _t = 'go1'
			res(_t)
		}, 1000)
	})
}