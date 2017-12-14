export function go3() {
	return new Promise((res) => {
		setTimeout(() => {
			let _t = 'go3'
			res(_t)
		}, 1000)
	})
}