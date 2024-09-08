import { CiLink } from "react-icons/ci";

const ProjectCard = ({
	title,
	description,
	technologies,
	link,
	github,
	VIEW_PROJECT = "View Project", // Provide default values if not passed
	VIEW_GITHUB = "View GitHub",
}) => {
	return (
		<div className='group bg-gradient-to-t from-slate-200 to-slate-50 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-600 transition-all duration-300 p-6 border-y mx-2 md:mx-0 md:border-none md:rounded-xl'>
			<div className='technologies '>
				{/* =========== TECHNOLOGIES USED =========== */}
				{technologies.split(",").map((tech, index) => (
					<span
						className='cursor-e-resize m-1 inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-teal-300 text-black dark:bg-teal-600 dark:text-white        group-hover:animate-rotate-y group-hover:animate-once group-hover:animate-duration-700 group-hover:animate-delay-300 group-hover:animate-ease-linear'
						key={index}
					>
						{tech}
					</span>
				))}
			</div>

			{/* =========== PROJECT TITLE =========== */}
			<h3 className='font-bold text-lg text-zinc-700 dark:text-zinc-300 mt-4'>
				{title}
			</h3>

			{/* =========== PROJECT DESCRIPTION =========== */}
			<p className='leading-7 text-zinc-600 dark:text-zinc-300 font-normal text-base mt-4'>
				{description}
			</p>

			{/* =========== LINKS SECTION =========== */}
			<div className='flex gap-6 text-black dark:text-zinc-300 font-medium'>
				{/* =========== PROJECT GITHUB =========== */}
				{github && (
					<a
						href={github}
						target='_blank'
						rel='noopener noreferrer'
						className='flex gap-2 mt-4 hover:text-red-800 hover:dark:text-red-500 cursor-pointer transition-all duration-300'
					>
						<CiLink className='text-2xl self-center' />
						<span className='text-xs self-center'>{VIEW_GITHUB}</span>
					</a>
				)}

				{/* =========== PROJECT LINK =========== */}
				{link && (
					<a
						href={link}
						target='_blank'
						rel='noopener noreferrer'
						className='flex gap-2 mt-4 hover:text-red-800 hover:dark:text-red-500 cursor-pointer transition-all duration-300'
					>
						<CiLink className='text-2xl self-center' />
						<span className='text-xs self-center'>{VIEW_PROJECT}</span>
					</a>
				)}
			</div>
		</div>
	);
};

export default ProjectCard;
