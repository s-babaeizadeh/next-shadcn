import { CalendarIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useCustomComponentStore } from "@/stores/useCustomComponentStore";

const HoverCardDemo: React.FC = () => {
	const { popoverTitle, popoverDescription, buttonColor } =
		useCustomComponentStore();
	return (
		<HoverCard>
			<HoverCardTrigger asChild>
				<Button variant="default" style={{ backgroundColor: buttonColor }}>
					Hover
				</Button>
			</HoverCardTrigger>
			<HoverCardContent className="w-70 text-sm text-black dark:text-white font-medium">
				<div className="flex justify-between space-x-4">
					<div className="space-y-1">
						<h4 className="text-sm font-semibold">{popoverTitle}</h4>
						<p className="text-sm">{popoverDescription}</p>
						<div className="flex items-center pt-2">
							<CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
							<span className="text-xs text-muted-foreground">
								December 2024
							</span>
						</div>
					</div>
				</div>
			</HoverCardContent>
		</HoverCard>
	);
};
export default HoverCardDemo;
