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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useCustomComponentStore } from "@/stores/useCustomComponentStore";
import type React from "react";

const FormDialog: React.FC = () => {
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
		formTitle,
		formDescription,
		dialogButton,
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
							{/* Form Section */}
							<div className="grid gap-6">
								{/* Select Fields */}
								<div className="grid grid-cols-2 gap-4">
									<div className="grid gap-2">
										<Label htmlFor="select1">Select Option</Label>
										<Select defaultValue="billing">
											<SelectTrigger id="select1">
												<SelectValue placeholder="Select" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="team">Item 1</SelectItem>
												<SelectItem value="billing">Item 2</SelectItem>
												<SelectItem value="account">Item 3</SelectItem>
												<SelectItem value="deployments">Item 4</SelectItem>
												<SelectItem value="support">Item 5</SelectItem>
											</SelectContent>
										</Select>
									</div>
									{/* Additional Select Field */}
									<div className="grid gap-2">
										<Label htmlFor="select2">Select Level</Label>
										<Select defaultValue="2">
											<SelectTrigger
												id="select2"
												className="line-clamp-1 w-[160px] truncate"
											>
												<SelectValue placeholder="Select level" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="1">Level 1</SelectItem>
												<SelectItem value="2">Level 2</SelectItem>
												<SelectItem value="3">Level 3</SelectItem>
												<SelectItem value="4">Level 4</SelectItem>
											</SelectContent>
										</Select>
									</div>
								</div>

								{/* Text Input */}
								<div className="grid gap-2">
									<Label htmlFor="subject">{formTitle}</Label>
									<Input id="subject" placeholder="I need help with..." />
								</div>

								{/* Textarea for Description */}
								<div className="grid gap-2">
									<Label htmlFor="description">{formDescription}</Label>
									<Textarea
										id="description"
										placeholder="Please include all information relevant to your issue."
									/>
								</div>
							</div>

							{/* Footer with Buttons */}
							<DialogFooter className="flex justify-between mx-auto flex-row gap-3">
								<DialogClose asChild>
									<Button
										type="button"
										variant="default"
										style={{ backgroundColor: buttonColor }}
									>
										Cancel
									</Button>
								</DialogClose>
								<Button
									type="button"
									variant="default"
									style={{ backgroundColor: buttonColor }}
								>
									Submit
								</Button>
							</DialogFooter>
						</DialogContent>
					</Dialog>
				</CardContent>
			</Card>
		</section>
	);
};

export default FormDialog;
