import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useCustomComponentStore } from "@/stores/useCustomComponentStore";
import type React from "react";
import { DialogDemo } from "./DialogDemo";

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
					<DialogDemo />
				</CardContent>
			</Card>
		</section>
	);
};

export default ModalDialog;
