import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { useCustomComponentStore } from "@/stores/useCustomComponentStore";
import type React from "react";
import { Button } from "../ui/button";

const PopoverDemo: React.FC = () => {
	const { buttonColor, popoverTitle, popoverDescription } =
		useCustomComponentStore();
	return (
		<Popover>
			<PopoverTrigger>
				<Button variant="default" style={{ backgroundColor: buttonColor }}>
					Trigger
				</Button>
			</PopoverTrigger>
			<PopoverContent className="text-sm text-black dark:text-white font-medium">
				<h2 className="text-lg font-bold leading-7 text-gray-900 sm:truncate sm:text-md sm:tracking-tight">
					{popoverTitle}
				</h2>
				<p className="text-base">{popoverDescription}</p>
			</PopoverContent>
		</Popover>
	);
};

export default PopoverDemo;
