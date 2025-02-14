import React from 'react'
import FilledButton from '../Base/Button/FilledButton'
import OutlineButton from '../Base/Button/OutlineButton'

const Product3 = () => {
	return (
		<div className='h-screen w-full bg-[url(/hero/three-mobile.jpg)] md:bg-[url(/hero/three.jpg)] flex flex-col justify-normal items-center bg-no-repeat bg-contain bg-center bg-[#f5f5f7] text-white py-5 space-y-5'>
			<div className='flex flex-col font-bold text-center items-center space-y-3 pt-20'>
				<img src="/hero/watch.png" alt="watch" />
				<p className='font-normal text-lg md:text-2xl text-black'>Thinstant Classic.</p>
			</div>
			<div className='flex flex-col space-y-3 items-center'>
				<div className='space-x-5'>
					<FilledButton className="font-base px-5" text='Learn more' rounded={true} />
					<OutlineButton className="font-base !px-6" text='Buy' rounded={true} />
				</div>
				<p className='font-thin text-gray-500 text-sm'>Apple Intelligence available now in US English</p>
			</div>
		</div>
	)
}

export default Product3