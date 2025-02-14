import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import FilledButton from '../components/Base/Button/FilledButton';


const Slider = () => {
	return (
		<div className='w-auto py-32'>
			<Swiper
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				autoplay={{
					delay: 5000,
				}}
				slidesPerView={'auto'}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,

				}}
				pagination={true}
				modules={[EffectCoverflow, Pagination, Autoplay]}
				className="mySwiper"
			>
				<SwiperSlide>
					<div className='w-full flex justify-center font-base'>
						<div className='relative h-[600px] w-3/4'>
							<img className='h-full w-full object-cover object-center' src="/slides/one.jpg" />
							<div className='z-20 absolute bottom-8 left-8 flex space-x-4 items-center'>
								<FilledButton className="z-30" text="Preview now" rounded={true} theme='white' />
								<p className='text-white'><strong className='font-title'>Action ·</strong> Coming to Cinemas in 2025.</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='w-full flex justify-center font-base'>
						<div className='relative h-[600px] w-3/4'>
							<img className='h-full w-full object-cover object-center' src="/slides/two.jpg" />
							<div className='z-20 absolute bottom-8 left-8 flex space-x-4 items-center'>
								<FilledButton className="z-30" text="Stream now" rounded={true} theme='white' />
								<p className='text-white'><strong className='font-title'>Thriller ·</strong> There's more to work than life.</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='w-full flex justify-center font-base'>
						<div className='relative h-[600px] w-3/4'>
							<img className='h-full w-full object-cover object-center' src="/slides/three.jpg" />
							<div className='z-20 absolute bottom-8 left-8 flex space-x-4 items-center'>
								<FilledButton className="z-30" text="Stream now" rounded={true} theme='white' />
								<p className='text-white'><strong className='font-title'>Sci-Fi ·</strong> To live you need something to die for.</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='w-full flex justify-center font-base'>
						<div className='relative h-[600px] w-3/4'>
							<img className='h-full w-full object-cover object-center' src="/slides/four.jpg" />
							<div className='z-20 absolute bottom-8 left-8 flex space-x-4 items-center'>
								<FilledButton className="z-30" text="Stream now" rounded={true} theme='white' />
								<p className='text-white'><strong className='font-title'>Drama ·</strong> Start killing it.</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='w-full flex justify-center font-base'>
						<div className='relative h-[600px] w-3/4'>
							<img className='h-full w-full object-cover object-center' src="/slides/five.jpg" />
							<div className='z-20 absolute bottom-8 left-8 flex space-x-4 items-center'>
								<FilledButton className="z-30" text="Stream now" rounded={true} theme='white' />
								<p className='text-white'><strong className='font-title'>Comedy ·</strong> Getting it together. Together.</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='w-full flex justify-center font-base'>
						<div className='relative h-[600px] w-3/4'>
							<img className='h-full w-full object-cover object-center' src="/slides/six.jpg" />
							<div className='z-20 absolute bottom-8 left-8 flex space-x-4 items-center'>
								<FilledButton className="z-30" text="Stream now" rounded={true} theme='white' />
								<p className='text-white'><strong className='font-title'>Action ·</strong> George and Brad are rival fixers stuck in same job.</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='w-full flex justify-center font-base'>
						<div className='relative h-[600px] w-3/4'>
							<img className='h-full w-full object-cover object-center' src="/slides/seven.jpg" />
							<div className='z-20 absolute bottom-8 left-8 flex space-x-4 items-center'>
								<FilledButton className="z-30" text="Stream now" rounded={true} theme='white' />
								<p className='text-white'><strong className='font-title'>Thriller ·</strong> Old sins cast new shadows.</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='w-full flex justify-center font-base'>
						<div className='relative h-[600px] w-3/4'>
							<img className='h-full w-full object-cover object-center' src="/slides/eight.jpg" />
							<div className='z-20 absolute bottom-8 left-8 flex space-x-4 items-center'>
								<FilledButton className="z-30" text="Stream now" rounded={true} theme='white' />
								<p className='text-white'><strong className='font-title'>Action ·</strong> Worst. Heist. Ever.</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='w-full flex justify-center font-base'>
						<div className='relative h-[600px] w-3/4'>
							<img className='h-full w-full object-cover object-center' src="/slides/nine.jpg" />
							<div className='z-20 absolute bottom-8 left-8 flex space-x-4 items-center'>
								<FilledButton className="z-30" text="Stream now" rounded={true} theme='white' />
								<p className='text-white'><strong className='font-title'>Crime ·</strong> Presume nothing.</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='w-full flex justify-center font-base'>
						<div className='relative h-[600px] w-3/4'>
							<img className='h-full w-full object-cover object-center' src="/slides/ten.jpg" />
							<div className='z-20 absolute bottom-8 left-8 flex space-x-4 items-center'>
								<FilledButton className="z-30" text="Stream now" rounded={true} theme='white' />
								<p className='text-white'><strong className='font-title'>Sci-Fi ·</strong> One life. Infinite possibilities.</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default Slider;