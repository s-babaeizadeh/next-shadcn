"use client";

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

import { useCustomComponentStore } from "@/stores/useCustomComponentStore";
import DialogForm from "./DialogForm";

export const DialogDemo: React.FC = () => {
	const {
		buttonColor,
		dialogTitle,
		dialogDescription,
		dialogButton,
		closeButton,
	} = useCustomComponentStore();
	return (
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
					<DialogForm />

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
	);
};
