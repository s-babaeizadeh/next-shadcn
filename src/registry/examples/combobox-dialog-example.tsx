"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useCustomComponentStore } from "@/stores/useCustomComponentStore";
import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";

const frameworks = [
	{ value: "next.js", label: "Next.js" },
	{ value: "sveltekit", label: "SvelteKit" },
	{ value: "nuxt.js", label: "Nuxt.js" },
	{ value: "remix", label: "Remix" },
	{ value: "astro", label: "Astro" },
];

const ComboboxDialog: React.FC = () => {
	const {
		sectionClassName,
		cardClassName,
		titleClassName,
		descriptionClassName,
		cardTitle,
		cardDescription,
	} = useCustomComponentStore();

	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState("");

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
					<Popover open={open} onOpenChange={setOpen}>
						<PopoverTrigger asChild>
							<Button
								variant="default"
								role="combobox"
								className="flex justify-center mx-auto"
								aria-expanded={open}
							>
								{value
									? frameworks.find((framework) => framework.value === value)
											?.label
									: "Select framework..."}
								<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
							</Button>
						</PopoverTrigger>
						<PopoverContent className="w-[200px] p-0">
							<Command>
								<CommandInput placeholder="Search framework..." />
								<CommandList>
									<CommandEmpty>No framework found.</CommandEmpty>
									<CommandGroup>
										{frameworks.map((framework) => (
											<CommandItem
												key={framework.value}
												value={framework.value}
												onSelect={(currentValue) => {
													setValue(currentValue === value ? "" : currentValue);
													setOpen(false);
												}}
											>
												<Check
													className={cn(
														"mr-2 h-4 w-4",
														value === framework.value
															? "opacity-100"
															: "opacity-0",
													)}
												/>
												{framework.label}
											</CommandItem>
										))}
									</CommandGroup>
								</CommandList>
							</Command>
						</PopoverContent>
					</Popover>
				</CardContent>
			</Card>
		</section>
	);
};

export default ComboboxDialog;
