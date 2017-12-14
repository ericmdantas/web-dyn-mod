export function go3() {
	return new Promise((res) => {
		setTimeout(() => {
			let _t = 'go3'
			document.getElementById('wat').innerText = _t
			res(_t)
		}, 1000)
	})
}