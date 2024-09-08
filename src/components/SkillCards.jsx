import React from "react";
import design from "../assets/images/design.png";
import code from "../assets/images/code.png";
import consulting from "../assets/images/consulting.png";

const SkillCards = () => {
	return (
		<div className='lg:flex justify-between mt-5'>
			<div className='text-center m-2 shadow-2xl p-10 rounded-xl mb-4 lg:w-1/3'>
				<div className='flex justify-center'>
					<img
						src={design}
						className='w-30 h-30 hover:animate-wiggle animate-infinite'
					/>
				</div>
				<h3 className='text-lg font-medium pt-8 pb-2'>Beautiful UI</h3>
				<p className='py-2'>
					Creating elegant UI as per the Figma Designs and Clients Requirement.
				</p>
				<h4 className='py-4 font-semibold text-teal-600'>
					CSS Libraries I have used
				</h4>
				<p className='dark:text-gray-300 py-1 '>Tailwind</p>
				<p className='dark:text-gray-300 py-1'>Bootstrap</p>
				<p className='dark:text-gray-300 py-1'>Material UI</p>
			</div>

			<div className='text-center m-2 shadow-2xl p-10 rounded-xl mb-4 lg:w-1/3'>
				<div className='flex justify-center'>
					<img
						src={code}
						className='w-30 h-30 hover:animate-wiggle animate-infinite'
					/>
				</div>
				<h3 className='text-lg font-medium pt-8 pb-2'>
					Libraries and Frameworks
				</h3>
				<p className='py-2'>
					Have more then 3 years of experience working with multiple
					Technologies.
				</p>
				<h4 className='py-4 font-semibold text-teal-600'>
					Technologies I have worked with
				</h4>
				<p className='dark:text-gray-200 py-1'>Angular</p>
				<p className='dark:text-gray-200 py-1'>React</p>
				<p className='dark:text-gray-200 py-1'>Redux</p>
				<p className='dark:text-gray-200 py-1'>RxJs</p>
			</div>

			<div className='text-center m-2 shadow-2xl p-10 rounded-xl mb-4 lg:w-1/3'>
				<div className='flex justify-center'>
					<img
						src={consulting}
						className='w-30 h-30 hover:animate-wiggle animate-infinite'
					/>
				</div>
				<h3 className='text-lg font-medium pt-8 pb-2'>Projects</h3>
				<p className='py-2'>
					Completed multiple Personal and Freelancing projects
				</p>
				<h4 className='py-4 font-semibold text-teal-600'>
					Personal Project Names
				</h4>
				<p className='dark:text-gray-300 py-1'>Lavish</p>
				<p className='dark:text-gray-300 py-1'>Netflix GPT</p>
				<p className='dark:text-gray-300 py-1'>Swiggy Clone</p>
			</div>
		</div>
	);
};

export default SkillCards;
