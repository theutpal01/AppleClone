import React from 'react'
import { SlBag } from 'react-icons/sl'
import { GoSearch } from 'react-icons/go'


const Navbar = () => {
	return (
		<div className='fixed z-50 flex justify-center top-0 w-full text-sm p-2 bg-black/85'>
			<div className="w-full px-5 xl:w-3/4 flex justify-between items-center space-x-6 text-white">
				<div>
					<a href="/"><img className='size-6' src="/apple.png" alt="" /></a>
				</div>
				<div>
					<ul className="flex space-x-6 font-base">
						<li className="p-2">Store</li>
						<li className="p-2">Mac</li>
						<li className="p-2">iPad</li>
						<li className="p-2">iPhone</li>
						<li className="p-2">Watch</li>
						<li className="p-2">Airpods</li>
						<li className="p-2">TV & Home</li>
						<li className="p-2">Music</li>
						<li className="p-2">Support</li>
					</ul>

				</div>
				<div>
					<ul className="flex justify-end items-center space-x-6">
						<li className="p-2"><GoSearch className='size-5' /></li>
						<li className="p-2"><SlBag className='size-4' /></li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Navbar