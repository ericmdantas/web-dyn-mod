export function go4() {
	return new Promise((res) => {
		setTimeout(() => {
			let _t = 'go4'
			document.getElementById('wat').innerText = _t
			res(_t)
		}, 1000)
	})
}