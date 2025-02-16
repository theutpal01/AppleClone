import React from 'react'
import FilledButton from '../Base/Button/FilledButton'
import OutlineButton from '../Base/Button/OutlineButton'

const Product1 = ({ className }) => {
	return (
		<div className={`${className} h-screen w-screen bg-[url(/hero/one-mobile.jpg)] md:bg-[url(/hero/one.jpg)] bg-center flex flex-col justify-between items-center bg-no-repeat bg-cover text-white py-10`}>
			<div className='flex flex-col font-bold text-center space-y-3 pt-20'>
				<h2 className='text-4xl lg:text-5xl xl:text-7xl font-title'>iPhone 16 Pro</h2>
				<p className='font-normal text-lg md:text-2xl'>Built for Apple Intelligence</p>
			</div>
			<div className='flex flex-col space-y-3 items-center'>
				<div className='space-x-5'>
					<FilledButton className="font-base px-5" text='Learn more' rounded={true} glow />
					<OutlineButton className="font-base !px-6" text='Buy' rounded={true} />
				</div>
				<p className='font-thin text-gray-400 text-sm'>Apple Intelligence available now in US English</p>
			</div>
		</div>
	)
}

export default Product1