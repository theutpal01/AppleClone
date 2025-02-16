import gsap from 'gsap'
import scrollTrigger from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'
import Hero from './components/Home/Hero'
import Cards from './components/CardsView/Cards'
import Slider from './SiderView/Slider'

gsap.registerPlugin(scrollTrigger);

const Home = () => {
	const component = useRef();
	const slider = useRef();

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			let panels = gsap.utils.toArray('.panel');
			gsap.to(panels, {
				xPercent: -100 * (panels.length - 1),
				ease: 'none',
				scrollTrigger: {
					trigger: slider.current,
					pin: true,
					scrub: 1,
					snap: 1 / (panels.length - 1),
					end: () => "+=" + slider.current.offsetWidth,
				}
			});
		}, component);
		return () => ctx.revert();
	}
		, []);

	return (
		<div ref={component} className='overflow-hidden'>
			<Hero ref={slider} />
			<Cards />
			<Slider />
		</div>
	)
}

export default Home