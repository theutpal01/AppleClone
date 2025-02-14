import React from 'react'

const OutlineButton = ({ id, text, theme = "primary", type = "button", size = "md", rounded, className, onClick }) => {
	const themeClasses = {
		primary: "border-sky-600 hover:bg-sky-600 text-sky-600 hover:text-white",
		secondary: 'border-secondary hover:bg-secondary text-secondary hover:text-white',
		tertiary: 'border-tertiary hover:bg-tertiary text-tertiary hover:text-white',
		black: 'border-black hover:bg-black text-black hover:text-white',
		white: 'border-white hover:bg-white text-white hover:text-black',
	}

	const sizeClasses = {
		sm: 'p-2 px-4 text-sm',
		md: 'p-2.5 px-5 text-base',
		lg: 'p-3.5 px-6 text-lg',
	}

	return (
		<button id={id} type={type} className={`${className} border-2 bg-transparent ${rounded ? 'rounded-full' : ''} ${themeClasses[theme]} ${sizeClasses[size]} shadow-md hover:shadow-lg active:scale-95 hover:scale-105 duration-200 transition-transform ease-linear cursor-pointer`} onClick={onClick}>
			{text}
		</button>
	)
}

export default OutlineButton