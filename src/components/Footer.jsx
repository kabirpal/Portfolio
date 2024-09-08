import { FaArrowCircleUp } from "react-icons/fa";
import info_en from "../assets/data/user-info";

const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	let userInfo = info_en;

	return (
		<footer className='p-4 text-center md:flex justify-between'>
			{/* =========== USER COPYRIGHT =========== */}
			<p className='text-zinc-600 self-center mt-2 md:mt-0 dark:text-zinc-300 text-sm text-center font-light'>
				{userInfo.footerPage.RIGHTS_RESERVED}
			</p>
			{/* =========== SCROLL ON TOP BUTTON =========== */}
			<button
				onClick={() => scrollToTop()}
				className='text-zinc-600 self-center mt-2 md:mt-0 dark:text-zinc-300 mx-auto md:mx-0 text-sm font-light flex gap-2'
			>
				<FaArrowCircleUp className='self-center text-red-800 dark:text-red-500' />{" "}
				{userInfo.footerPage.BACK_TO_TOP}
			</button>
		</footer>
	);
};

export default Footer;
