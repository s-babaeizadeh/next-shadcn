"use client";

import { Button } from "@/components/ui/button";
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
import { useCustomComponentStore } from "@/stores/useCustomComponentStore";
import HoverCardDemo from "./HoverCardDemo";

export const DialogDemo: React.FC = () => {
	const { buttonColor, dialogTitle, dialogDescription } =
		useCustomComponentStore();

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant="default"
					className="flex justify-center mx-auto"
					style={{ backgroundColor: buttonColor }}
				>
					Open Dialog
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px] ">
				<DialogHeader>
					<DialogTitle>{dialogTitle}</DialogTitle>
					<DialogDescription>{dialogDescription}</DialogDescription>
				</DialogHeader>

				<DialogFooter className="flex justify-center items-center mx-auto flex-row gap-3">
					<div>
						<HoverCardDemo />
					</div>
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
