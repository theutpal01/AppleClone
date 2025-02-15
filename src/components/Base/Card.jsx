import React from 'react'

const Card = ({ className = "", bg = "", children }) => {
	return (
		<div className={`flex flex-col bg-contain min-h-[400px] sm:min-h-[600px] md:min-h-[400px] lg:min-h-[500px] bg-no-repeat xl:min-h-[650px] bg-center text-white py-5 space-y-5 w-full ${className}`}>
			<img className='w-full h-auto aspect-square' src={bg} alt="" />
			{children}
		</div>
	)
}

export default Card