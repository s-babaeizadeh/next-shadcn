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
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCustomComponentStore } from "@/stores/useCustomComponentStore";
import type React from "react";

const MenuDialog: React.FC = () => {
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
						<DialogContent className="sm:max-w-[425px]">
							<DialogHeader>
								<DialogTitle>{dialogTitle}</DialogTitle>
								<DialogDescription>{dialogDescription}</DialogDescription>
							</DialogHeader>

							<DialogFooter className="flex justify-center items-center mx-auto flex-row gap-3">
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button
											variant="default"
											style={{ backgroundColor: buttonColor }}
										>
											{triggerButton}
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent className="w-56 text-sm text-black dark:text-white font-medium">
										<DropdownMenuLabel>Popover Title</DropdownMenuLabel>
										<DropdownMenuSeparator />
										<DropdownMenuGroup>
											<DropdownMenuItem>Item 1</DropdownMenuItem>
											<DropdownMenuItem>Item 2</DropdownMenuItem>
										</DropdownMenuGroup>
										<DropdownMenuSeparator />
										<DropdownMenuGroup>
											<DropdownMenuSub>
												<DropdownMenuSubTrigger>Item 4</DropdownMenuSubTrigger>
												<DropdownMenuPortal>
													<DropdownMenuSubContent>
														<DropdownMenuItem>Item 1</DropdownMenuItem>
														<DropdownMenuItem>Item 2</DropdownMenuItem>
														<DropdownMenuSeparator />
														<DropdownMenuItem>Item 3</DropdownMenuItem>
													</DropdownMenuSubContent>
												</DropdownMenuPortal>
											</DropdownMenuSub>
											<DropdownMenuItem>Item 3</DropdownMenuItem>
										</DropdownMenuGroup>
									</DropdownMenuContent>
								</DropdownMenu>

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

export default MenuDialog;
