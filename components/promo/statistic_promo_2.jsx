/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';
import Statistic_promo_carousel from '../carousel/statistic_promo_2_carousel';
import Image from 'next/image'

const Statistic_promo_2 = () => {
	return (
		<div>
			{/* <!-- Promo 2 --> */}
			<section className="statistic_promo_2-section bg-[#010107] py-12 lg:pb-32 overflow-x-hidden">
				<div className="container">
					<div className="items-center justify-between lg:flex">
						<div className="mb-12 lg:w-[45%] lg:pr-16">
							<h2 className="mb-6 font-display text-2xl text-white">
								Find and Fight rare Creatures and Collect Stunning Pieces
							</h2>
							<p className="mb-8 text-lg leading-normal text-jacarta-200">
								Employees are our number-one priority, so we like to take care of them!
							</p>
							<p className="mb-12 text-jacarta-200">
								Every digital creation available through MakersPlace is an authentic and truly
								unique digital creation, signed and issued by the creator — made possible by
								blockchain technology. Even if the digital creation is copied, it won't be the
								authentic and originally signed version.
							</p>
							<Link href="/collection/explore_collection">
								<a className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark">
									Create Avatar
								</a>
							</Link>
						</div>
						<div className="relative text-center lg:w-1/2">
						<Image
      src="https://s3.amazonaws.com/my-bucket/profile.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />

							{/* <!-- Slider --> */}
							<Statistic_promo_carousel />

							<Image
      src="/images/nft-game/crypto_icons_1.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
						</div>
					</div>
				</div>
			</section>
			{/* <!-- end promo 2 --> */}
		</div>
	);
};

export default Statistic_promo_2;
