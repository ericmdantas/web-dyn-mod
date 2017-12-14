export function go1() {
	return new Promise((res) => {
		setTimeout(() => {
			let _t = 'go1'
			document.getElementById('wat').innerText = _t
			res(_t)
		}, 1000)
	})
}