import Product1 from './Product1'
import Product2 from './Product2'
import Product3 from './Product3'


const Hero = ({ref}) => {
	return (
		<div ref={ref} className='flex w-[400vw] overflow-hidden'>
			<Product1 className={"panel overflow-hidden"} />
			<Product2 className={"panel overflow-hidden"} />
			<Product3 className={"panel overflow-hidden"} />
		</div>
	)
}

export default Hero;