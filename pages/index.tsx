import React from 'react';
import SignUpForm from './Components/SignupForm';
import NavigateToLogin from './Components/NavigateLogin';
import Accordion from './Components/Accordion';
import Footer from './Components/Footer';
const HomePage: React.FC = () => {
	return (
		<div>
			<div className="relative h-full w-full bg-[url('/images/bg-img.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
				<div className="bg-black w-full h-full bg-opacity-70">
					<nav className="px-12 py-5 flex justify-between">
						<img
							className="h-12"
							src="/images/Netflix_Logo_PMS.png"
							alt="Netflix Logo"
						/>
						<NavigateToLogin />
					</nav>

					<div className=" flex flex-col justify-center items-center h-1/2 text-center">
						<div className="px-10  pt-20 rounded-md w-full">
							<h2 className="text-white text-3xl lg:text-4xl mb-3 font-bold">
								Unlimited movies, TV shows, and more
							</h2>
							<p className="text-white text-md lg:text-2xl mb-3 lg:mb-1 text-center">
								Watch anywhere. Cancel anytime.
							</p>
							<p className="text-white text-md lg:text-2xl mb-2 lg:mb-1">
								Ready to watch? Enter your email to create or restart your
								membership.
							</p>
						</div>
						<div className="pb-16">
							<SignUpForm />
						</div>
					</div>
				</div>
			</div>
			<div className="bg-black flex flex-col lg:flex-row items-center justify-center mt-2">
				<div className="flex flex-col lg:w-2/4">
					<h1 className="text-center font-bold text-xl md:text-3xl pb-3 pt-10 text-white lg:text-4xl">
						Enjoy on your TV
					</h1>
					<p className="text-center text-white pb-4 text-lg  ">
						Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
						players, and more.
					</p>
				</div>
				<div className="relative">
					<img src="/images/tv.png" alt="TV" className="w-full " />
					<div className="absolute inset-0 flex justify-center items-center">
						<video autoPlay muted loop className="w-80">
							<source src="/videos/video-tv-0819.m4v" type="video/mp4" />
						</video>
					</div>
				</div>
			</div>

			<div className="bg-black flex flex-col lg:flex-row-reverse items-center justify-center mt-2 pb-12">
				<div className="flex flex-col lg:w-2/4">
					<h1 className="text-center font-bold text-xl md:text-3xl pb-3 pt-10 text-white lg:text-4xl">
						Download your shows to watch offline
					</h1>
					<p className="text-center text-white text-lg md:text-1xl ">
						Save your favorites easily and always have something to watch.
					</p>
				</div>
				<div className="relative  ">
					<img src="/images/mobile.jpg" alt="img" className="w-full " />
					<div className="absolute left-3 md:left-10 inset-x-0   bottom-0 bg-black mb-10 ml-20 text-white p-1 pl-3 rounded-lg flex items-center w-[60%] border-2 border-neutral-500 ">
						<img
							src="/images/boxshot.png"
							alt="Stranger Things"
							className="w-12 h-16 object-cover rounded-sm"
						/>
						<div className="flex-1 w-1/4 ml-5">
							<p className="text-white text-sm font-semibold ">
								Stranger Things
							</p>
							<p className="text-blue-600 text-sm">Downloading...</p>
						</div>
						<div>
							<img
								src="/images/download-icon.gif"
								alt="Downloading"
								className="w-8 h-8"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-black flex flex-col items-center justify-center mt-2">
				<div className="pl-10">
					<div className="flex flex-row pt-10 gap-2 lg:flex-col items-center justify-center lg:items-start lg:justify-start lg:w-2/3 ">
						<h1 className="text-center font-bold text-xl md:text-3xl pb-1  pt-3 text-white lg:text-4xl lg:text-start">
							Watch
						</h1>
						<h1 className="text-center font-bold text-xl md:text-3xl pb-1 pt-3 text-white lg:text-4xl lg:text-start">
							everywhere
						</h1>
					</div>
					<p className="text-center lg:text-start text-white pb-28 text-lg lg:w-1/3 ">
						Stream unlimited movies and TV shows on your phone, tablet, laptop,
						and TV.
					</p>
				</div>
			</div>
			<div className="bg-black flex flex-col lg:flex-row-reverse items-center justify-center mt-2 pb-14">
				<div className="flex flex-col ">
					<h1 className="text-center font-bold  text-xl md:text-3xl pb-1 pt-14 text-white lg:text-4xl">
						Create profiles for kids
					</h1>
					<p className="text-center text-white text-lg ">
						Send kids on adventures with their favorite characters in a space
						made just for them—free with your membership.
					</p>
				</div>
				<img src="/images/smallGuy.png" alt="img" className="w-3/4" />
			</div>
			<div className="bg-black flex flex-col mt-2">
				<div className="items-center justify-center">
					<h1 className="text-center font-bold text-2xl md:text-3xl pb-5 pt-14 text-white">
						Frequently Asked Questions
					</h1>
				</div>

				<Accordion
					title="What is Netflix?"
					answer="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
				/>
				<Accordion
					title="How much does Netflix cost?"
					answer="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD 2.99 to USD 9.99 a month. No extra costs, no contracts."
				/>
				<Accordion
					title="Where can I watch?"
					answer="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
				/>
				<Accordion
					title="How do I cancel?"
					answer="Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
				/>
				<Accordion
					title="What can I watch on Netflix?"
					answer="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
				/>
				<Accordion
					title="Is Netflix good for kids?"
					answer="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space."
				/>

				<p className="text-center text-1xl text-white mt-5 pt-5">
					Ready to watch? Enter your email to create or restart your membership.
				</p>
				<div className="pb-4">
					<SignUpForm />
				</div>
			</div>

			<Footer backgroundColor="bg-black" />
		</div>
	);
};

export default HomePage;
