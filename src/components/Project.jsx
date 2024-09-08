import React from "react";
import { HiOutlineCodeBracketSquare } from "react-icons/hi2";
import ProjectCard from "../components/ProjectCard";
import AnimateWrapper from "../components/animations/AnimateWrapper";
import { useInView } from "react-hook-inview";
import info_en from "../assets/data/user-info";

const Project = () => {
	let userInfo = info_en;
	const [skillsref, inView] = useInView();
	return (
		<section ref={skillsref}>
			<div>
				<h2
					id='projects'
					className='text-4xl mt-6 font-bold flex justify-center items-center gap-2 dark:text-white'
				>
					<AnimateWrapper inView={inView} effect='animate-fade-right'>
						<HiOutlineCodeBracketSquare className='text-red-800 dark:text-red-500' />
					</AnimateWrapper>
					<AnimateWrapper inView={inView} effect='animate-fade-left'>
						Personal Projects
					</AnimateWrapper>
				</h2>
				<section className='grid grid-cols-1 mt-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:px-16'>
					{userInfo.projects.map((project, index) => {
						return (
							<ProjectCard
								key={index}
								title={project.title}
								description={project.description}
								technologies={project.technologies}
								github={project.github}
								link={project.link}
							/>
						);
					})}
				</section>
			</div>
		</section>
	);
};

export default Project;
