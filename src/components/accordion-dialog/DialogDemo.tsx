"use client";

import { useCustomComponentStore } from "@/stores/useCustomComponentStore";
import { Button } from "../ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";

import AccordionComponent from "./AccordionComponent";

export const DialogDemo: React.FC = () => {
	const { buttonColor, dialogTitle, dialogDescription, openDialog } =
		useCustomComponentStore();

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant="default"
					className="flex justify-center mx-auto"
					style={{ backgroundColor: buttonColor }}
				>
					{openDialog}
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>{dialogTitle}</DialogTitle>
					<DialogDescription>{dialogDescription}</DialogDescription>
				</DialogHeader>
				<DialogFooter className="flex justify-center items-center mx-auto flex-col gap-3">
					<AccordionComponent />
					<DialogClose asChild>
						<Button
							type="button"
							variant="default"
							style={{ backgroundColor: buttonColor }}
						>
							Close
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
