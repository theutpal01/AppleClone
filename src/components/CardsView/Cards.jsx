import Card from '../Base/Card'
import FilledButton from '../Base/Button/FilledButton'
import OutlineButton from '../Base/Button/OutlineButton'

const Cards = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 gap-y-15 gap-x-5 p-5'>

			<Card bg="bg-[url(/cards/one.jpg)]" className='flex items-center text-center h-full sm:pt-10 md:pt-16'>
				<div className='w-10/12 lg:w-1/2 flex flex-col items-center space-y-3 pt-8 md:pt-0'>
					<img src="/cards/head1.png" alt="" className='h-8 md:h-10 w-auto'></img>
					<h3 className='md:text-lg'>United by rythm. Discover the new Black Unity watch strap and face.</h3>
					<FilledButton className="font-base px-5" text='Buy' rounded={true} />
				</div>
			</Card>
			<Card bg="bg-[url(/cards/two.png)]" className='flex items-center justify-end text-center h-full sm:pt-10 md:pt-16'>
				<div className='w-10/12 text-black lg:w-1/2 flex flex-col items-center space-y-3 pb-8 md:pb-0'>
					<h3 className='text-2xl md:text-3xl lg:text-5xl font-title'>Valentine's Day</h3>
					<p className='md:text-lg'>Last chance to find something special for your special someone.</p>
					<FilledButton className="font-base px-5" text='Buy' rounded={true} />
				</div>
			</Card>
			<Card bg="bg-[url(/cards/three.jpg)]" className='flex items-center text-center h-full sm:pt-10 md:pt-16'>
				<div className='w-10/12 text-black lg:w-1/2 flex flex-col items-center space-y-3 pt-8 md:pt-0'>
					<h3 className='text-2xl md:text-3xl lg:text-5xl font-title'>MacBook Air</h3>
					<p className='md:text-lg'>Supercharged by M3</p>
					<div className='space-x-3'>
						<FilledButton className="font-base px-5" text='Learn more' rounded={true} />
						<OutlineButton className="font-base px-5" text='Buy' rounded={true} />
					</div>
				</div>
			</Card>
			<Card bg="bg-[url(/cards/four.jpg)]" className='flex items-center text-center h-full sm:pt-10 md:pt-16'>
				<div className='w-10/12 lg:w-1/2 flex flex-col items-center space-y-3 pt-8 md:pt-0'>
					<h3 className='text-2xl md:text-3xl lg:text-5xl font-title'>iPad Pro</h3>
					<p className='md:text-lg'>Unbelievably thin. Incredibly powerful.</p>
					<div className='space-x-3'>
						<FilledButton className="font-base px-5" text='Learn more' rounded={true} />
						<OutlineButton className="font-base px-5" text='Buy' rounded={true} />
					</div>
				</div>
			</Card>
			<Card bg="bg-[url(/cards/five.jpg)]" className="flex items-center text-center h-full justify-end sm:pb-10 md:pb-16">
				<div className='w-10/12 lg:w-1/2 flex flex-col items-center space-y-3 pb-8 md:pb-0'>
					<h3 className='text-2xl md:text-3xl lg:text-5xl font-title'>AirPods 4</h3>
					<p className='md:text-lg'>Iconic. Now supersonic.<br />Available with Noise Cancellation.</p>
					<div className='space-x-3'>
						<FilledButton className="font-base px-5" text='Learn more' rounded={true} />
						<OutlineButton className="font-base px-5" text='Buy' rounded={true} />
					</div>
				</div>
			</Card>
			<Card bg="bg-[url(/cards/six.jpg)]" className='flex items-center text-center h-full sm:pt-10 md:pt-16'>
				<div className='w-10/12 lg:w-1/2 text-black flex flex-col items-center space-y-3 pt-8 md:pt-0'>
					<img src="/cards/head2.png" alt="" className='h-8 md:h-10 w-auto' />
					<p className='md:text-lg'>Upgrade and save. It's that easy.</p>
					<div className='space-x-3'>
						<FilledButton className="font-base px-5" text='Get your estimate' rounded={true} />
					</div>
				</div>
			</Card>
		</div>
	)
}

export default Cards