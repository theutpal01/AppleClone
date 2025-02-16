import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Pagination, EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';
import FilledButton from '../components/Base/Button/FilledButton';
import useScreenSize from '../utils/useScreenSize';


const Slider = () => {
	const screenSize = useScreenSize();
	const slides = [
		{ id: 1, img: '/slides/one.jpg', imgM: '/slides/mobile/one.jpg', title: 'Action', description: 'Coming to Cinemas in 2025.', show: 'Preview now' },
		{ id: 2, img: '/slides/two.jpg', imgM: '/slides/mobile/two.jpg', title: 'Thriller', description: "There's more to work than life.", show: 'Stream now' },
		{ id: 3, img: '/slides/three.jpg', imgM: '/slides/mobile/three.jpg', title: 'Sci-Fi', description: 'To live you need something to die for.', show: 'Stream now' },
		{ id: 4, img: '/slides/four.jpg', imgM: '/slides/mobile/four.jpg', title: 'Drama', description: 'Start killing it.', show: 'Stream now' },
		{ id: 5, img: '/slides/five.jpg', imgM: '/slides/mobile/five.jpg', title: 'Comedy', description: 'Getting it together. Together.', show: 'Stream now' },
		{ id: 6, img: '/slides/six.jpg', imgM: '/slides/mobile/six.jpg', title: 'Action', description: 'George and Brad are rival fixers stuck in same job.', show: 'Stream now' },
		{ id: 7, img: '/slides/seven.jpg', imgM: '/slides/mobile/seven.jpg', title: 'Thriller', description: 'Old sins cast new shadows.', show: 'Stream now' },
		{ id: 8, img: '/slides/eight.jpg', imgM: '/slides/mobile/eight.jpg', title: 'Action', description: 'Worst. Heist. Ever.', show: 'Stream now' },
		{ id: 9, img: '/slides/nine.jpg', imgM: '/slides/mobile/nine.jpg', title: 'Crime', description: 'Presume nothing.', show: 'Stream now' },
		{ id: 10, img: '/slides/ten.jpg', imgM: '/slides/mobile/ten.jpg', title: 'Sci-Fi', description: 'One life. Infinite possibilities.', show: 'Stream now' },
	];

	return (
		<div className='w-auto py-32'>
			<Swiper
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				autoplay={{
					delay: 3000,
				}}
				loop={true}
				navigation={true}
				slidesPerView={'auto'}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,

				}}
				pagination={true}
				pag
				modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
				className="mySwiper"
			>
				{slides.map((slide, idx) => (
					<SwiperSlide key={idx}>
						<div className='w-full flex justify-center items-center font-base'>
							<div className='relative bg-gray-700/30 h-[600px] sm:w-3/4 flex items-center justify-center'>
								{screenSize.width <= 640 && <div className='z-20 absolute top-4 flex flex-col justify-center sm:justify-normal text-center w-full space-y-3 px-3 items-center'>
									<img src="/slides/mobile/tv.png" alt="Logo" />
									<img src={slide.imgM.slice(0, -3) + "png"} alt="" />
								</div>}

								<img className='h-auto w-full object-cover object-center' src=
								{screenSize.width <= 640 ? slide.imgM : slide.img} />
								
								<div className='z-20 absolute bottom-8 sm:bottom-8 sm:left-8 flex flex-col sm:flex-row justify-center sm:justify-normal text-center w-full space-x-4 items-center px-2'>
									<FilledButton className="z-30" text={slide.show} rounded={true} theme='white' />
									<p className='text-white'><strong className='font-title'>{slide.title} ·</strong> {slide.description}</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default Slider;