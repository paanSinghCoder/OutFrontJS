import {
	containerStyles,
	navbarStyles,
	floatButtonStyles,
	buttonDefaultOpacity,
	listItemStyles,
	clearBtnStyles,
	logoTextStyles,
	notificationBadgeStyles
} from './styles.js'

let consoleLog = console.log
let consoleError = console.error
let consoleWarn = console.warn

let outfrontLogUl = document.createElement('UL') // Memory leak alert
const notificationBadge = document.createElement('SPAN') // Memory leak alert

const createButtonAndContainer = () => {
	try {
		// Create container start
		const container = document.createElement('DIV')
		container.id = 'outfront-container'
		for (let property in containerStyles) {
			container.style[property] = containerStyles[property]
		}
		// Create container end

		// Create navbar start
		const navbar = document.createElement('DIV')
		navbar.id = 'outfront-navbar'
		for (let property in navbarStyles) {
			navbar.style[property] = navbarStyles[property]
		}
		// Create navbar end

		// Create clear console button start
		const clearBtn = document.createElement('BUTTON') // button
		clearBtn.id = 'outfront-clear-btn'
		clearBtn.innerText = '⟲' // 🗑️ ⟲ ⌫
		for (let property in clearBtnStyles) {
			clearBtn.style[property] = clearBtnStyles[property]
		}
		clearBtn.addEventListener('click', () => (outfrontLogUl.innerHTML = ''))
		navbar.appendChild(clearBtn)
		// Create clear console button end

		//Create logo text start
		let logo = document.createElement('DIV')
		logo.id = 'outfront-container'
		logo.innerText = '𝙊𝙪𝙩𝙁𝙧𝙤𝙣𝙩 𝙅𝙎'
		for (let property in logoTextStyles) {
			logo.style[property] = logoTextStyles[property]
		}
		navbar.appendChild(logo)
		// Create logo text end

		// hr start
		let hr = document.createElement('HR')
		hr.style.marginTop = '1px'
		hr.style.marginBottom = 0
		hr.style.border = 0
		hr.style.borderTop = '1px solid #eaeaea'
		navbar.appendChild(hr)
		// hr end

		container.appendChild(navbar)

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
				notificationBadge.style.display = 'none'
			} else {
				container.style.display = 'none'
				toggleBtn.style.opacity = floatButtonStyles.opacity
			}
		})
		// Create float button end

		// Create notification badge start
		// const notificationBadge = document.createElement('SPAN') // initialized in global scope
		notificationBadge.id = 'outfront-badge'
		// notificationBadge.innerText = 'b'
		for (let property in notificationBadgeStyles) {
			notificationBadge.style[property] = notificationBadgeStyles[property]
		}
		toggleBtn.append(notificationBadge)
		// Create notification badge start

		document.body.appendChild(container)
		document.body.appendChild(toggleBtn)
	} catch (error) {
		console.log(error)
	}
}

const toggleNotoficationBadge = color => {
	// toggle notification badge only if container is closed
	if (document.getElementById('outfront-container').style.display !== 'block') {
		notificationBadge.style.display = 'block'
		notificationBadge.style.backgroundColor = color
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
		toggleNotoficationBadge('cyan')
	} else if (type === 'warn') {
		logLi.style.color = 'orange'
		logLi.style.backgroundColor = '#fff3e7'
		toggleNotoficationBadge('orange')
		// logLi.style.borderTop = '0.2px solid orange'
		// logLi.style.borderBottom = '0.1px solid orange'
	} else if (type === 'error') {
		logLi.style.color = 'red'
		logLi.style.backgroundColor = '#ffeaea'
		toggleNotoficationBadge('red')
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

// window.onload = () => outfront()

export default outfront
