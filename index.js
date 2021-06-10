let consoleLog = console.log
let consoleError = console.error
let consoleWarn = console.warn

const containerStyles = {
	position: 'fixed',
	overflow: 'scroll',
	width: '300px',
	height: '450px',
	display: 'none',
	bottom: '85px',
	right: '20px',
	marginLeft: '15px',
	backgroundColor: '#fff',
	borderRadius: '8px',
	boxShadow: '2px 4px 5px 3px rgba(224, 224, 224, 0.8)'
}

const floatButtonStyles = {
	opacity: 0.8,
	position: 'fixed',
	width: '70px',
	border: 'none',
	height: '35px',
	bottom: '40px',
	right: '15px',
	backgroundColor: '#d4ebf2',
	color: '#fff',
	borderRadius: '50px',
	textAlign: 'center',
	cursor: 'pointer'
}

const buttonDefaultOpacity = {
	opacity: 1
}

const listItemStyles = {
	fontFamily: 'Arial',
	fontSize: '13px',
	paddingTop: '5px',
	paddingBottom: '5px',
	paddingLeft: '15px',
	paddingRight: '15px'
}

const clearBtnStyles = {
	cursor: 'pointer',
	float: 'right',
	paddingRight: '10px',
	paddingTop: '3px',
	opacity: 0.5,
	fontSize: '15px',
	backgroundColor: 'transparent',
	border: 'none'
}

const logoTextStyles = {
	fontFamily: 'Arial',
	fontSize: '16px',
	fontWeight: 'bold',
	paddingLeft: '15px',
	paddingTop: '3px',
	fontStyle: 'italic',
	color: '#525EF9'
}

let outfrontLogUl = document.createElement('UL') // Memory leak alert

const createButtonAndContainer = () => {
	try {
		// Create container start
		const container = document.createElement('DIV')
		container.id = 'outfront-container'
		for (let property in containerStyles) {
			container.style[property] = containerStyles[property]
		}
		// Create container end

		// Create clear console button start
		const clearBtn = document.createElement('BUTTON') // button
		clearBtn.id = 'outfront-clear-btn'
		clearBtn.innerText = '⟲' // 🗑️ ⟲ ⌫
		for (let property in clearBtnStyles) {
			clearBtn.style[property] = clearBtnStyles[property]
		}
		clearBtn.addEventListener('click', () => (outfrontLogUl.innerHTML = ''))
		container.appendChild(clearBtn)
		// Create clear console button end

		//Create logo text start
		let logo = document.createElement('DIV')
		logo.id = 'outfront-container'
		logo.innerText = '𝙊𝙪𝙩𝙁𝙧𝙤𝙣𝙩 𝙅𝙎'
		for (let property in logoTextStyles) {
			logo.style[property] = logoTextStyles[property]
		}
		container.appendChild(logo)
		// Create logo text end

		// hr start
		let hr = document.createElement('HR')
		hr.style.marginTop = '1px'
		hr.style.marginBottom = 0
		hr.style.border = 0
		hr.style.borderTop = '1px solid #eaeaea'
		container.appendChild(hr)
		// hr end

		//create ul start
		outfrontLogUl.id = 'outfront-log'
		outfrontLogUl.style.marginTop = '0px'
		container.appendChild(outfrontLogUl)
		//create ul end

		// Create float button start
		const toggleBtn = document.createElement('BUTTON')
		toggleBtn.id = 'outfront-float'
		toggleBtn.innerText = '🐞'
		for (let property in floatButtonStyles) {
			toggleBtn.style[property] = floatButtonStyles[property]
		}
		toggleBtn.addEventListener(
			'mouseenter',
			() => (toggleBtn.style.opacity = buttonDefaultOpacity.opacity)
		)
		toggleBtn.addEventListener(
			'mouseout',
			() =>
				(toggleBtn.style.opacity =
					container.style.display === 'none'
						? floatButtonStyles.opacity
						: buttonDefaultOpacity.opacity)
		)
		toggleBtn.addEventListener('click', () => {
			if (container.style.display === 'none') {
				container.style.display = 'block'
				toggleBtn.style.opacity = buttonDefaultOpacity.opacity
			} else {
				container.style.display = 'none'
				toggleBtn.style.opacity = floatButtonStyles.opacity
			}
		})
		// Create float button end

		document.body.appendChild(container)
		document.body.appendChild(toggleBtn)
	} catch (error) {
		console.log(error)
	}
}

const appendToContainer = (msg, type) => {
	// Create li start
	const logLi = document.createElement('LI')
	logLi.id = 'outfront-log-li'
	for (let property in listItemStyles) {
		logLi.style[property] = listItemStyles[property]
	}
	// Create li end

	if (type === 'log') {
		logLi.style.color = 'black'
		logLi.style.backgroundColor = 'white'
	} else if (type === 'warn') {
		logLi.style.color = 'orange'
		logLi.style.backgroundColor = '#fff3e7'
		// logLi.style.borderTop = '0.2px solid orange'
		// logLi.style.borderBottom = '0.1px solid orange'
	} else if (type === 'error') {
		logLi.style.color = 'red'
		logLi.style.backgroundColor = '#ffeaea'
		// logLi.style.borderTop = '0.2px solid red'
		// logLi.style.borderBottom = '0.1px solid red'
	}
	let textNode = document.createTextNode(msg)
	logLi.appendChild(textNode)
	// const outfrontLogUl = document.getElementById('outfront-log')
	outfrontLogUl.style.listStyleType = 'none'
	outfrontLogUl.style.padding = 0

	outfrontLogUl.appendChild(logLi)
}

console.log = msg => {
	consoleLog(msg) // do the usual logging as well
	appendToContainer(msg, 'log')
}

console.error = msg => {
	consoleError(msg) // do the usual logging as well
	appendToContainer(msg, 'error')
}

console.warn = msg => {
	consoleWarn(msg) // do the usual logging as well
	appendToContainer(msg, 'warn')
}

window.onerror = (message, source, lineno, colno, error) => {
	appendToContainer(message + '::' + source.split('/')[3] + ':' + lineno, 'error')
}

const outfront = () => {
	createButtonAndContainer()
}

// window.onload = () => init()

export default outfront
