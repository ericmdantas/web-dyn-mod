import {go4} from './mod4.js'

export function go3() {
	return new Promise((res) => {
		setTimeout(() => {
			let _t = 'go3'
			document.getElementById('wat').innerText = _t
			
			return go4()
		}, 1000)
	})
}