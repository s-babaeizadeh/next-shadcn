import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
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
import { useCustomComponentStore } from "@/stores/useCustomComponentStore";
import type React from "react";

const AccordionDialog: React.FC = () => {
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
		dialogButton,
		closeButton,
		accordionDescription,
		accordionItem,
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
						<DialogContent className="sm:max-w-[425px]">
							<DialogHeader>
								<DialogTitle>{dialogTitle}</DialogTitle>
								<DialogDescription>{dialogDescription}</DialogDescription>
							</DialogHeader>
							<DialogFooter className="flex justify-center items-center mx-auto flex-col gap-3">
								<Accordion type="single" collapsible className="w-full">
									<AccordionItem value="item-1">
										<AccordionTrigger>{accordionItem}</AccordionTrigger>
										<AccordionContent>{accordionDescription}</AccordionContent>
									</AccordionItem>
									<AccordionItem value="item-2">
										<AccordionTrigger>{accordionItem}</AccordionTrigger>
										<AccordionContent>{accordionDescription}</AccordionContent>
									</AccordionItem>
									<AccordionItem value="item-3">
										<AccordionTrigger>{accordionItem}</AccordionTrigger>
										<AccordionContent>{accordionDescription}</AccordionContent>
									</AccordionItem>
								</Accordion>
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

export default AccordionDialog;
