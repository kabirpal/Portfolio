import React from "react";
import { TypeAnimation } from "react-type-animation";
import SkillCards from "../components/SkillCards";

const Intro = () => {
	return (
		<section>
			<div className=''>
				<TypeAnimation
					sequence={[
						"Technologies I worked with React",
						1000,
						"Technologies I worked with Angular",
						1000,
						"Technologies I worked with Redux",
						1000,
						"Technologies I worked with HTML/CSS",
						1000,
					]}
					wrapper='span'
					speed={50}
					style={{ fontSize: "2em", display: "inline-block" }}
					repeat={Infinity}
				/>
				<p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-400'>
					– Created an online system for childcare professionals to efficiently
					manage more than 1 million interactions.
					<br />
					– Implemented unit testing achieving 80% coverage, significantly
					reducing defects in production releases.
					<br />– Collaborated with a cross-functional team to integrate new
					features, resulting in enhanced user satisfaction and engagement.
				</p>

				<p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-400'>
					– Conducted performance tuning and code reviews to ensure high-quality
					deliverables and adherence to best practices.
					<br />
					– Designed stored procedures and triggers to optimize database access,
					enhancing 25% API call performance.
					<br />– Spearheaded the integration of parsleyjs into the
					Manufacturing Management Site, resulting in a 40% reduction in form
					validation errors and improving data accuracy.
				</p>
			</div>
			<SkillCards />
		</section>
	);
};

export default Intro;
