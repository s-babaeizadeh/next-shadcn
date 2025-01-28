import type React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";

import CalendarForm from "@/components/calendar-dialog/CalendarForm";
import { useCustomComponentStore } from "@/stores/useCustomComponentStore";

const CalendarDialog: React.FC = () => {
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
					<CalendarForm />
				</CardContent>
			</Card>
		</section>
	);
};

export default CalendarDialog;
