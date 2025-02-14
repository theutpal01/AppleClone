import React from 'react'
import Hero from './components/Home/Hero'
import Cards from './components/CardsView/Cards'
import Slider from './SiderView/Slider'

const Home = () => {
	return (
		<div>
			<Hero />
			<Cards />
			<Slider />
		</div>
	)
}

export default Home