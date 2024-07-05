// Projects.js
import pro1 from "../image/Bus.png"
import pro2 from "../image/searck.jpg"
import pro3 from "../image/tic.jpg"
export default function Projects() {
	return (
		<section id="projects"
				className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto">
			<h2 className="text-5xl text-red-500 font-bold text-center">
				My Projects
			</h2>
			<div className="p-10 bg-emerald-200 flex flex-col justify-center items-center
							gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
							hover:shadow-xl hover:scale-[102%] w-full">
				<div className="w-80 rounded">
					<a href=
"https://github.com/ChellapandianS/Bus-Pass-Management-System-using--html-CSS-PHP-Mysql"
						className="w-full h-full">
						<img src={pro1} 
							alt="Project 1"
							className="w-full h-full 
										bg-cover rounded"/>
					</a>

				</div>
				<div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
					<h2 className="font-bold text-3xl text-center">
						<a className="hover:underline"
							href=
"https://github.com/ChellapandianS/Bus-Pass-Management-System-using--html-CSS-PHP-Mysql">
							Bus pass management System
						</a>
					</h2>
					<p>
					The PHP MySQL Bus Pass Management System is designed to streamline the process of issuing and managing bus passes for public transportation systems. This web-based application provides an efficient and user-friendly platform for passengers to apply for, renew, and manage their bus passes online. The system aims to reduce the administrative burden on transit authorities and enhance the user experience for passengers.
					</p>
				</div>
			</div>
			

			<div className="p-10 bg-emerald-200 flex flex-col justify-center items-center
							gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
							hover:shadow-xl hover:scale-[102%] w-full">
				<div className="w-80 rounded">
					<a href=
"https://image-searchengine-pied.vercel.app/"
						className="w-full h-full">
						<img src={pro2} 

							alt="Project 1"
							className="w-full h-full 
										bg-cover rounded"/>
					</a>

				</div>
				<div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
					<h2 className="font-bold text-3xl text-center">
						<a className="hover:underline"
							href=
"https://image-searchengine-pied.vercel.app/">
							Image Search Engine(live)
						</a>
					</h2>
					<p>
					The React Image Search Engine is a web-based application designed to provide
					 users with an efficient and intuitive platform for searching and discovering images. Built with React.
					</p>
				</div>
			</div>
			
			<div className="p-10 bg-emerald-200 flex flex-col justify-center items-center
							gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
							hover:shadow-xl hover:scale-[102%] w-full">
				<div className="w-80 rounded">
					<a href=
"https://xox-game-chella.vercel.app/"
						className="w-full h-full">
						<img src={pro3} 
							alt="Project 1"
							className="w-full h-full 
										bg-cover rounded"/>
					</a>

				</div>
				<div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
					<h2 className="font-bold text-3xl text-center">
						<a className="hover:underline"
							href=
"https://xox-game-chella.vercel.app/">
							Tic-Tac_Toe (live)
						</a>
					</h2>
					<p>
					The Tic-Tac-Toe Game in React is a web-based application that brings the classic pen-and-paper game to the digital realm, offering an engaging and interactive experience for players. Developed using the React framework
					</p>
				</div>
			</div>
			

			
		</section>
	);
}
