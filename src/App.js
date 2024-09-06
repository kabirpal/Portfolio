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
import { TypeAnimation } from 'react-type-animation';

function App() {
	const [darkMode, setDarkMode] = useState(false);
	useEffect(() => { }, [darkMode]);
	const openGmailWithCC = () => {
		const ccEmail = 'kabirpal53@gmail.com';
		const gmailLink = `https://mail.google.com/mail/u/0/?fs=1&tf=cm&cc=${encodeURIComponent(ccEmail)}`;
		window.open(gmailLink, '_blank');
	};
	return (
		<div className={darkMode ? "dark" : ""}>
			<main className="bg-white px-10 md:px-20 lg:px-30 dark:bg-gray-800 dark:text-white">
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
						<h3 className="text-2xl pt-5 md:text-3xl animate-bounce animate-infinite">
							Software Engineer
						</h3>
						<p className="text-md pt-2 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-400">
							Software Engineer proficient in <b>React, Angular, JavaScript, TypeScript, MySQL, Redux,</b> and <b>RxJs</b>.
							Familiar with <b>Nodejs, Python, Firebase</b>. Skilled in Front End Web Development.
						</p>
					</div>
					<div className="flex text-5xl justify-center text-gray-500 dark:text-gray-400">
						<a href="https://www.linkedin.com/in/kabirpal/"><AiFillLinkedin className="hover:text-gray-600"></AiFillLinkedin></a>
						<AiFillMail className="hover:text-gray-600 hover:cursor-pointer" onClick={openGmailWithCC}></AiFillMail>
						<a href="https://github.com/kabirpal/"><AiFillGithub className="hover:text-gray-600"></AiFillGithub></a>
					</div>
					<div className="relative mx-auto bg-gradient-to-b from-teal-300 rounded-full w-80 h-80 mt-10 pt-5">
						<img src={profileImage} />
					</div>
				</section>

				<section>
					<div className="">
						<TypeAnimation
							sequence={[
								'Technologies I worked with React',
								1000,
								'Technologies I worked with Angular',
								1000,
								'Technologies I worked with Redux',
								1000,
								'Technologies I worked with HTML/CSS',
								1000
							]}
							wrapper="span"
							speed={50}
							style={{ fontSize: '2em', display: 'inline-block' }}
							repeat={Infinity}
						/>
						<p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-400">
							– Created an online system for childcare professionals to efficiently manage more than 1 million interactions.
							<br />
							– Implemented unit testing achieving 80% coverage, significantly reducing defects in production releases.
							<br />
							– Collaborated with a cross-functional team to integrate new features, resulting in enhanced user satisfaction and engagement.
						</p>

						<p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-400">
							– Conducted performance tuning and code reviews to ensure high-quality deliverables and adherence to best practices.
							<br />
							– Designed stored procedures and triggers to optimize database access, enhancing 25% API call performance.
							<br />
							– Spearheaded the integration of parsleyjs into the Manufacturing Management Site, resulting in a 40% reduction in form validation errors and improving data accuracy.
						</p>
					</div>

					<div className="lg:flex justify-between mt-5">
						<div className="text-center m-2 shadow-lg p-10 rounded-xl mb-4 w-1/3 bg-gradient-to-b from-gray-500 to-gray-700">
							<div className="flex justify-center">
								<img src={design} className="w-30 h-30 hover:animate-wiggle animate-infinite" />
							</div>
							<h3 className="text-lg font-medium pt-8 pb-2">
								Beautiful UI
							</h3>
							<p className="py-2">
								Creating elegant UI as per the Figma Designs and Clients Requirement.
							</p>
							<h4 className="py-4 text-teal-400">
								CSS Libraries I have used
							</h4>
							<p className="text-gray-300 py-1 ">Tailwind</p>
							<p className="text-gray-300 py-1">Bootstrap</p>
							<p className="text-gray-300 py-1">Material UI</p>
						</div>

						<div className="text-center m-2 shadow-lg p-10 rounded-xl mb-4 w-1/3 bg-gradient-to-b from-gray-700 to-gray-500 ">
							<div className="flex justify-center">
								<img src={code} className="w-30 h-30 hover:animate-wiggle animate-infinite" />
							</div>
							<h3 className="text-lg font-medium pt-8 pb-2">
								Libraries and Frameworks
							</h3>
							<p className="py-2">
								Have more then 3 years of experience working with multiple Technologies.
							</p>
							<h4 className="py-4 text-teal-400">
								Technologies I have worked with
							</h4>
							<p className="text-gray-200 py-1">Angular</p>
							<p className="text-gray-200 py-1">React</p>
							<p className="text-gray-200 py-1">Redux</p>
							<p className="text-gray-200 py-1">RxJs</p>
						</div>

						<div className="text-center m-2 shadow-lg p-10 rounded-xl mb-4 w-1/3 bg-gradient-to-b from-gray-500 to-gray-700">
							<div className="flex justify-center">
								<img src={consulting} className="w-30 h-30 hover:animate-wiggle animate-infinite" />
							</div>
							<h3 className="text-lg font-medium pt-8 pb-2">
								Projects 
							</h3>
							<p className="py-2">
								Completed multiple Personal and Freelancing projects
							</p>
							<h4 className="py-4 text-teal-400">
								Personal Project Names
							</h4>
							<p className="text-gray-300 py-1">Lavish</p>
							<p className="text-gray-300 py-1">Netflix GPT</p>
							<p className="text-gray-300 py-1">Swiggy Clone</p>
						</div>
					</div>
				</section>

				<section>
					<div>
						<h3 className="text-3xl py-1 animate-fade-left">Personal Projects</h3>
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
