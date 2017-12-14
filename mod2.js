export function go2() {
	return new Promise((res) => {
		setTimeout(() => {
			let _t = 'go2'
			document.getElementById('wat').innerText = _t
			res(_t)
		}, 1000)
	})
}