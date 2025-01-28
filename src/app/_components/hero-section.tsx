"use client";

import { BentoGridDemo } from "@/components/BentoGridDemo";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import Link from "next/link";

export const HeroSection = ({ starCount: _ }: { starCount: number }) => {
	const staggeredAnimation = {
		hidden: { opacity: 0, y: -20, filter: "blur(4px)" },
		visible: {
			opacity: 1,
			y: 0,
			filter: "blur(0px)",
			transition: {
				when: "beforeChildren",
				staggerChildren: 0.1,
			},
		},
	};

	const childAnimation = {
		hidden: { opacity: 0, y: -20, filter: "blur(4px)" },
		visible: {
			opacity: 1,
			y: 0,
			filter: "blur(0px)",
			transition: {
				type: "spring",
				bounce: 0,
			},
		},
	};

	return (
		<motion.section
			variants={staggeredAnimation}
			initial="hidden"
			animate="visible"
			className="pt-32 relative pb-20 flex space-y-2 flex-col items-center justify-center"
		>
			<div className="absolute hidden md:block left-1/2 top-48 -translate-x-1/2 opacity-50 w-[700px] h-[300px] dark:opacity-40 bg-purple-100 blur-3xl" />
			<motion.h1 className="text-5xl font-semibold" variants={childAnimation}>
				Next-Shadcn
			</motion.h1>
			<motion.p
				className="text-muted-foreground dark:text-white text-center"
				variants={childAnimation}
			>
				Next Shadcn is an innovative open-source project that serves as a
				collection of complex components designed to streamline the development
				process. By utilizing next-shadcn, developers can easily copy and paste
				these components into their applications, significantly reducing the
				time and effort required to build user interfaces.
			</motion.p>
			<motion.div
				className="flex items-center gap-3 pt-5"
				variants={childAnimation}
			>
				<Button asChild variant={"outline"}>
					<Link href={"/docs"}>View docs</Link>
				</Button>
				<Button asChild>
					<Link
						target="_blank"
						href={"https://github.com/s-babaeizadeh/next-shadcn"}
					>
						<GitHubLogoIcon className="size-4 mr-2" />
						Star on Github
					</Link>
				</Button>
			</motion.div>

			<motion.div className="w-full pt-28" variants={childAnimation}>
				<BentoGridDemo />
			</motion.div>
		</motion.section>
	);
};
