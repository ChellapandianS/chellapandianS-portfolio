// About.js

import Heroimg from '../image/chella.jpeg';
export default function About() {
	return (
		<section
			id="about"
			className="px-10 w-full text-white flex flex-col lg:flex-row py-20 
					align-center bg-light-100 max-w-5xl mx-auto">
			<div className="flex-1">
				<img src={Heroimg}

					alt="About"
					className="w-50 h-50 bg-none"/>
			</div>
			<div className="flex-1 flex flex-col justify-center
							items-center gap-5 px-6">
				<div>
					<h2 className="text-center text-white-500 
								text-5xl font-bold">
						About Me :
					</h2>
				</div>
				<p>
				Hi, I’m Chellapandian, a web developer with a passion for creating interactive and user-friendly websites. With a background in computer science , I specialize in front-end development and have a strong understanding of back-end technologies.


				</p>
				
				
				<p>
					
I graduated with a degree in ["MCA"] from [Madurai kamaraj university] in [2024]. 
				</p>
				
			</div>
		</section>
	);
}
