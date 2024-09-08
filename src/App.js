import "./App.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import profileImage from "./assets/images/dev-ed-wave.png";
import { useEffect, useState } from "react";
import Project from "./components/Project";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {}, [darkMode]);
	const openGmailWithCC = () => {
		const ccEmail = "kabirpal53@gmail.com";
		const gmailLink = `https://mail.google.com/mail/u/0/?fs=1&tf=cm&cc=${encodeURIComponent(
			ccEmail
		)}`;
		window.open(gmailLink, "_blank");
	};
	return (
		<div className={darkMode ? "dark" : ""}>
			<main className='bg-white px-10 md:px-20 lg:px-30 dark:bg-gray-800 dark:text-white'>
				<section className='min-h-screen'>
					<nav className='py-3 mb-12 flex justify-between'>
						<h1 className='text-xl font-burtons'>Developed by Kabir</h1>
						<ul className='flex items-center'>
							<li>
								<BsFillMoonStarsFill
									className='cursor-pointer text-xl'
									onClick={() => setDarkMode(!darkMode)}
								/>
							</li>
							<li>
								<a
									className='bg-gradient-to-r from-cyan-500 to-teal-800 text-white py-2 px-4 rounded-md ml-8'
									href='#'
								>
									Resume
								</a>
							</li>
						</ul>
					</nav>
					<div className='text-center p-10 py-10'>
						<h2 className='text-5xl text-teal-500 font-medium md:text-6xl'>
							Kabir Pal
						</h2>
						<h3 className='text-2xl pt-5 md:text-3xl animate-bounce animate-infinite'>
							Software Engineer
						</h3>
						<p className='text-md pt-2 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-400'>
							Software Engineer proficient in{" "}
							<b>React, Angular, JavaScript, TypeScript, MySQL, Redux,</b> and{" "}
							<b>RxJs</b>. Familiar with <b>Nodejs, Python, Firebase</b>.
							Skilled in Front End Web Development.
						</p>
					</div>
					<div className='flex text-5xl justify-center text-gray-500 dark:text-gray-400'>
						<a href='https://www.linkedin.com/in/kabirpal/'>
							<AiFillLinkedin className='hover:text-gray-600'></AiFillLinkedin>
						</a>
						<AiFillMail
							className='hover:text-gray-600 hover:cursor-pointer'
							onClick={openGmailWithCC}
						></AiFillMail>
						<a href='https://github.com/kabirpal/'>
							<AiFillGithub className='hover:text-gray-600'></AiFillGithub>
						</a>
					</div>
					<div className='relative mx-auto bg-gradient-to-b from-teal-300 rounded-full w-80 h-80 mt-10 pt-5'>
						<img src={profileImage} />
					</div>
				</section>

				<Intro/>
				<Project/>
				<Contact/>
				<Footer />
			</main>
		</div>
	);
}

export default App;
