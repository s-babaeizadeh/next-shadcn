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

import ReportForm from "./ReportForm";

const DialogForm: React.FC = () => {
	const {
		buttonColor,
		dialogTitle,
		dialogDescription,
		triggerButton,
		cancelButton,
		submitButton,
	} = useCustomComponentStore();

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="default" style={{ backgroundColor: buttonColor }}>
					{triggerButton}
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>{dialogTitle}</DialogTitle>
					<DialogDescription>{dialogDescription}</DialogDescription>
				</DialogHeader>
				<ReportForm />
				<DialogFooter className="flex justify-between mx-auto flex-row gap-3">
					<DialogClose asChild>
						<Button
							type="button"
							variant="default"
							style={{ backgroundColor: buttonColor }}
						>
							{cancelButton}
						</Button>
					</DialogClose>
					<Button
						type="button"
						variant="default"
						style={{ backgroundColor: buttonColor }}
					>
						{submitButton}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
export default DialogForm;
