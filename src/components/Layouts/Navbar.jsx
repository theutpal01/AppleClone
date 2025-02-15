import React from 'react'
import { SlBag } from 'react-icons/sl';
import { GoSearch } from 'react-icons/go';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from 'react-icons/md';


const Navbar = () => {
	const [open, setOpen] = React.useState(false);

	return (
		<>
			<div className='fixed z-50 flex justify-center top-0 w-full text-sm p-2 bg-black/85'>
				<div className="w-full px-5 xl:w-3/4 flex justify-between items-center space-x-6 text-white">
					<div>
						<a href="/"><img className='size-6' src="/apple.png" alt="" /></a>
					</div>
					<div className='hidden lg:flex'>
						<ul className="flex space-x-6 font-base">
							<a href="/"><li className="p-2">Store</li></a>
							<a href="/"><li className="p-2">Mac</li></a>
							<a href="/"><li className="p-2">iPad</li></a>
							<a href="/"><li className="p-2">iPhone</li></a>
							<a href="/"><li className="p-2">Watch</li></a>
							<a href="/"><li className="p-2">Airpods</li></a>
							<a href="/"><li className="p-2">TV & Home</li></a>
							<a href="/"><li className="p-2">Music</li></a>
							<a href="/"><li className="p-2">Support</li></a>
						</ul>

					</div>
					<div className='flex items-center space-x-6'>
						<ul className="flex justify-end items-center space-x-6">
							<li className="p-2"><GoSearch className='size-5' /></li>
							<li className="p-2"><SlBag className='size-4' /></li>
						</ul>
						<a className='flex lg:hidden cursor-pointer transition-all duration-300' onClick={() => setOpen(!open)}>{open ? <MdClose className='size-5' /> : <GiHamburgerMenu className='size-4' />}</a>
					</div>
				</div>
			</div>
			<div className={`fixed w-full bg-black z-40 transition-all duration-700 top-0 ${!open ? 'h-0' : 'h-screen'}`}>
				<ul className={`flex duration-500 transition-all flex-col p-10 pt-20 z-50 text-white space-x-6 font-base ${!open ? 'opacity-0' : 'opacity-100'}`}>
					<a href="/"><li className="text-lg p-2">Store</li></a>
					<a href="/"><li className="text-lg p-2">Mac</li></a>
					<a href="/"><li className="text-lg p-2">iPad</li></a>
					<a href="/"><li className="text-lg p-2">iPhone</li></a>
					<a href="/"><li className="text-lg p-2">Watch</li></a>
					<a href="/"><li className="text-lg p-2">Airpods</li></a>
					<a href="/"><li className="text-lg p-2">TV & Home</li></a>
					<a href="/"><li className="text-lg p-2">Music</li></a>
					<a href="/"><li className="text-lg p-2">Support</li></a>
				</ul>
			</div>
		</>
	)
}

export default Navbar