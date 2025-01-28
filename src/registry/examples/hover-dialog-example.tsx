import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useCustomComponentStore } from "@/stores/useCustomComponentStore"; // Adjust the import path as necessary
import { CalendarIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import type React from "react";

const HoverDialog: React.FC = () => {
	const {
		sectionClassName,
		cardClassName,
		titleClassName,
		descriptionClassName,
		buttonColor,
		cardTitle,
		cardDescription,
		dialogTitle,
		dialogDescription,
		popoverTitle,
		popoverDescription,
		dialogButton,
		hoverButton,
		closeButton,
	} = useCustomComponentStore();

	return (
		<section
			className={`${sectionClassName} rounded-lg border border-gray-300`}
		>
			<Card className={cardClassName}>
				<CardHeader>
					<CardTitle className={titleClassName}>{cardTitle}</CardTitle>
					<CardDescription className={descriptionClassName}>
						{cardDescription}
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Dialog>
						<DialogTrigger asChild>
							<Button
								variant="default"
								className="flex justify-center mx-auto"
								style={{ backgroundColor: buttonColor }}
								aria-label="Open Custom Dialog"
							>
								{dialogButton}
							</Button>
						</DialogTrigger>
						<DialogContent className="sm:max-w-[425px]">
							<DialogHeader>
								<DialogTitle>{dialogTitle}</DialogTitle>
								<DialogDescription>{dialogDescription}</DialogDescription>
							</DialogHeader>
							<DialogFooter className="flex justify-center items-center mx-auto flex-row gap-3">
								<HoverCard>
									<HoverCardTrigger asChild>
										<Button
											variant="default"
											style={{ backgroundColor: buttonColor }}
											aria-label="Show Popover"
										>
											{hoverButton}
										</Button>
									</HoverCardTrigger>
									<HoverCardContent className="w-70 text-sm text-black dark:text-white font-medium">
										<div className="flex justify-between space-x-4">
											<div className="space-y-1">
												<h4 className="text-sm font-semibold">
													{popoverTitle}
												</h4>
												<p className="text-sm">{popoverDescription}</p>
												<div className="flex items-center pt-2">
													<CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
													<span className="text-xs text-muted-foreground">
														December 2024
													</span>
												</div>
											</div>
										</div>
									</HoverCardContent>
								</HoverCard>
								<DialogClose asChild>
									<Button
										type="button"
										variant="default"
										style={{ backgroundColor: buttonColor }}
										aria-label="Close Custom Dialog"
									>
										{closeButton}
									</Button>
								</DialogClose>
							</DialogFooter>
						</DialogContent>
					</Dialog>
				</CardContent>
			</Card>
		</section>
	);
};

export default HoverDialog;
