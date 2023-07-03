import './RedeemCard.css'

const RedeemCard = (props) => {
	const { value, unit, code } = props;

	function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	return (
		<div className="
			redeem-card h-full relative w-full flex flex-col items-center justify-center
			first:border-b
			md:w-1/2 md:first-border-b-0 md:first:border-r">
			<div className="overlay-background"></div>
			<h3 className="uppercase text-sm">redeem</h3>
			<h5 className="uppercase fadeup redeem-card-heading">{unit != 'royalties' ? '$' : ''}{unit}</h5>
			<div className="
				flex items-baseline gap-2  
				md:gap-6 fadeup-lg
				redeem-card-heading-2
			">
				<small className="uppercase">{code}</small><h5 className="">{numberWithCommas(value)}</h5>
			</div>

			<div>
				<a className="
				redeem-link
				relative uppercase tracking-widest cursor-pointer
				
				">
					redeem&nbsp;
					<span className="">{unit != 'royalties' ? '$' : ''}{code}</span>
				</a>
				
				<p className=" redeem-card-heading-3
				capitalize md:my-6 
			 fadeup
				">total earned <span className="uppercase">{code}&nbsp;{value}</span></p>
			</div>
		</div>
	)
}

export default RedeemCard