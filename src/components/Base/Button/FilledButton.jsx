import React from 'react'

const FilledButton = ({ id, text, theme = "primary", type = "button", size = "md", rounded = false, glow = false, className, onClick }) => {
	const themeClasses = {
		primary: "bg-sky-600 text-white",
		secondary: 'bg-secondary text-white',
		tertiary: 'bg-tertiary text-white',
		black: 'bg-black text-white',
		white: 'bg-white text-black',
	}

	const sizeClasses = {
		sm: 'p-2 px-4 text-sm',
		md: 'p-2.5 px-5 text-base',
		lg: 'p-3.5 px-6 text-lg',
	}

	return (
		<button id={id} type={type} className={`${className} ${glow ? 'shadow-glow' : ''} ${rounded ? 'rounded-full' : ''} ${themeClasses[theme]} ${sizeClasses[size]} shadow-md hover:shadow-lg active:scale-95 hover:scale-105 duration-200 transition-all ease-linear cursor-pointer `} onClick={onClick}>
			{text}
		</button>
	)
}

export default FilledButton