import "./App.css";
import Header from "./components/Header";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import profileImage from "./assets/images/dev-ed-wave.png";
import design from "./assets/images/design.png";
import code from "./assets/images/code.png";
import consulting from "./assets/images/consulting.png";
import project1 from "./assets/images/web1.png";
import { useEffect, useState } from "react";

function App() {
	const [darkMode, setDarkMode] = useState(false);
	useEffect(() => {}, [darkMode]);
	return (
		<div className={darkMode ? "dark" : ""}>
			<main className="bg-white px-10 md:px-20 lg:px-30 dark:bg-gray-600 dark:text-white">
				<section className="min-h-screen">
					<nav className="py-3 mb-12 flex justify-between">
						<h1 className="text-xl font-burtons">
							Developed by Kabir
						</h1>
						<ul className="flex items-center">
							<li>
								<BsFillMoonStarsFill
									className="cursor-pointer text-xl"
									onClick={() => setDarkMode(!darkMode)}
								/>
							</li>
							<li>
								<a
									className="bg-gradient-to-r from-cyan-500 to-teal-800 text-white py-2 px-4 rounded-md ml-8"
									href="#"
								>
									Resume
								</a>
							</li>
						</ul>
					</nav>
					<div className="text-center p-10 py-10">
						<h2 className="text-5xl text-teal-500 font-medium md:text-6xl">
							Kabir Pal
						</h2>
						<h3 className="text-2xl py-2 md:text-3xl">
							Software Engineer
						</h3>
						<p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
							Software Engineer Software Engineer Software
							Engineer Software Engineer Software Engineer
							Software Engineer Software Engineer Software
							Engineer Software Engineer Software Engineer
							Software Engineer
                            Software Engineer Software Engineer Software
							Engineer Software Engineer Software Engineer
							Software Engineer Software Engineer Software
							Engineer Software Engineer Software Engineer
							Software Engineer
						</p>
					</div>
					<div className="flex text-5xl justify-center text-gray-500">
						<AiFillLinkedin></AiFillLinkedin>
						<AiFillMail></AiFillMail>
						<AiFillGithub></AiFillGithub>
					</div>
					<div className="relative mx-auto bg-gradient-to-b from-teal-300 rounded-full w-80 h-80 mt-10 pt-5">
						<img src={profileImage} />
					</div>
				</section>

				<section>
					<div className="">
						<h3 className="text-3xl py-1">
							Technologies I worked with
						</h3>
						<p className="text-md py-5 leading-8 text-gray-800">
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Accusamus officiis ipsa deserunt nostrum nam
							minima natus dolores, magni ex architecto harum fuga
							excepturi explicabo neque et soluta, numquam quod
							ab.
						</p>
						<p className="text-md py-5 leading-8 text-gray-800">
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Accusamus officiis ipsa deserunt nostrum nam
							minima natus dolores, magni ex architecto harum fuga
							excepturi explicabo neque et soluta, numquam quod
							ab.
						</p>
					</div>

					<div className="lg:flex justify-between mt-5">
						<div className="text-center shadow-lg p-10 rounded-xl mb-4">
							<div className="flex justify-center">
								<img src={design} className="w-30 h-30" />
							</div>
							<h3 className="text-lg font-medium pt-8 pb-2">
								Beautiful Designs
							</h3>
							<p className="py-2">
								Creating elegant designs suited for your ne
								design theory.
							</p>
							<h4 className="py-4 text-teal-600">
								Desgin tolls I use
							</h4>
							<p className="text-gray-800 py-1">Photoshop</p>
							<p className="text-gray-800 py-1">Illustrate</p>
							<p className="text-gray-800 py-1">Figma</p>
						</div>

						<div className="text-center shadow-lg p-10 rounded-xl mb-4">
							<div className="flex justify-center">
								<img src={code} className="w-30 h-30" />
							</div>
							<h3 className="text-lg font-medium pt-8 pb-2">
								Beautiful Designs
							</h3>
							<p className="py-2">
								Creating elegant designs suited for your ne
								design theory.
							</p>
							<h4 className="py-4 text-teal-600">
								Desgin tolls I use
							</h4>
							<p className="text-gray-800 py-1">Photoshop</p>
							<p className="text-gray-800 py-1">Illustrate</p>
							<p className="text-gray-800 py-1">Figma</p>
						</div>

						<div className="text-center shadow-lg p-10 rounded-xl mb-4">
							<div className="flex justify-center">
								<img src={consulting} className="w-30 h-30" />
							</div>
							<h3 className="text-lg font-medium pt-8 pb-2">
								Beautiful Designs
							</h3>
							<p className="py-2">
								Creating elegant designs suited for your ne
								design theory.
							</p>
							<h4 className="py-4 text-teal-600">
								Desgin tolls I use
							</h4>
							<p className="text-gray-800 py-1">Photoshop</p>
							<p className="text-gray-800 py-1">Illustrate</p>
							<p className="text-gray-800 py-1">Figma</p>
						</div>
					</div>
				</section>

				<section>
					<div>
						<h3 className="text-3xl py-1">Portfolio</h3>
						<p className="text-md py-5 leading-8 text-gray-800">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Eaque id accusamus repellat aspernatur ratione
							ut omnis deserunt fuga aliquam laudantium hic
							provident, nobis excepturi, dolores reiciendis ullam
							praesentium culpa nulla?Lorem ipsum dolor, sit amet
							consectetur adipisicing elit. Eius rem numquam nihil
							hic inventore molestiae, earum perspiciatis dolor
							quibusdam suscipit error labore nesciunt culpa
							aliquid eligendi dolorum alias reiciendis saepe?
						</p>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Molestias cum placeat, qui ducimus deserunt
							voluptas mollitia vero laboriosam natus est, nobis
							non magni blanditiis rem? Velit quisquam adipisci
							quae asperiores?
						</p>
					</div>
					<div className="py-10 lg:flex-row lg:flex-wrap lg:flex">
						<div className="basis-1/3 flex-1 mt-5">
							<img
								src={project1}
								className="rounded-lg object-cover w-[100%]"
							/>
						</div>

						<div className="basis-1/3 flex-1 mt-5">
							<img
								src={project1}
								className="rounded-lg object-cover w-[100%]"
								alt=""
							/>
						</div>
						<div className="basis-1/3 flex-1 mt-5">
							<img
								src={project1}
								className="rounded-lg object-cover w-[100%]"
							/>
						</div>
						<div className="basis-1/3 flex-1 mt-5">
							<img
								src={project1}
								className="rounded-lg object-cover w-[100%]"
							/>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}

export default App;
