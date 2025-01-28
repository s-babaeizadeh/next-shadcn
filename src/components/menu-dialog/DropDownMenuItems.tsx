import { Button } from "@/components/ui/button";
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

const DropDownMenuItems: React.FC = () => {
	const { buttonColor, popoverTitle, triggerButton } =
		useCustomComponentStore();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="default" style={{ backgroundColor: buttonColor }}>
					{triggerButton}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56 text-sm text-black dark:text-white font-medium">
				<DropdownMenuLabel>{popoverTitle}</DropdownMenuLabel>
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
	);
};
export default DropDownMenuItems;
