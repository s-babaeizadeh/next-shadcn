import type React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";

import { useCustomComponentStore } from "@/stores/useCustomComponentStore";
import { ComboboxForm } from "./ComboboxForm";

const ComboboxDialog: React.FC = () => {
	const {
		sectionClassName,
		cardClassName,
		titleClassName,
		descriptionClassName,
		cardTitle,
		cardDescription,
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
					<ComboboxForm />
				</CardContent>
			</Card>
		</section>
	);
};

export default ComboboxDialog;
