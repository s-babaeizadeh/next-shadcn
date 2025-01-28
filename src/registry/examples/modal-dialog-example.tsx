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
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { useCustomComponentStore } from "@/stores/useCustomComponentStore";
import type React from "react";

const ModalDialog: React.FC = () => {
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
		triggerButton,
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
							>
								{dialogButton}
							</Button>
						</DialogTrigger>
						<DialogContent className="sm:max-w-[425px] ">
							<DialogHeader>
								<DialogTitle>{dialogTitle}</DialogTitle>
								<DialogDescription>{dialogDescription}</DialogDescription>
							</DialogHeader>

							<DialogFooter className="flex justify-center items-center mx-auto flex-row gap-3">
								<Popover>
									<PopoverTrigger>
										<Button
											variant="default"
											style={{ backgroundColor: buttonColor }}
										>
											{triggerButton}
										</Button>
									</PopoverTrigger>
									<PopoverContent className="text-sm text-black dark:text-white font-medium">
										<h2 className="text-lg font-bold leading-7 text-gray-900 sm:truncate sm:text-md sm:tracking-tight">
											{popoverTitle}
										</h2>
										<p className="text-base">{popoverDescription}</p>
									</PopoverContent>
								</Popover>

								<DialogClose asChild>
									<Button
										type="button"
										variant="default"
										style={{ backgroundColor: buttonColor }}
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

export default ModalDialog;
