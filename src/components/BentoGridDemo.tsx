import { BentoGrid, BentoGridItem } from "@/components/bento-grid";
import { cn } from "@/lib/utils";
import React from "react";

import AccordionDialog from "./accordion-dialog/AccordionDialog";
import CalendarDialog from "./calendar-dialog/CalendarDialog";
import ComboboxDialog from "./combobox-dialog /ComboboxDialog";
import HoverDialog from "./hover-dialog/HoverDialog";
import MenuDialog from "./menu-dialog/MenuDialog";
import ModalDialog from "./modal-dialog/ModalDialog";
import RequestFormDialog from "./requestform-dialog/RequestFormDialog";
import TiptapDialog from "./tiptap-dialog/TiptapDialog";

export function BentoGridDemo() {
	return (
		<BentoGrid className="max-w-7xl mx-auto">
			{items.map((item, i) => (
				<BentoGridItem
					key={i}
					title={item.title}
					description={item.description}
					header={item.header}
					className={i === 3 || i === 6 ? "md:col-span-2" : ""}
				/>
			))}
		</BentoGrid>
	);
}

const items = [
	{
		title: "Dialog",
		description:
			"The Dialog Component is a versatile, ready-to-use interface element designed to present important information or prompt user actions in a focused manner. When activated, the dialog overlays the main content, drawing the user's attention to its contents. This feature enhances user experience by providing a clear and organized way to communicate messages, gather input, or confirm actions, all while maintaining the context of the underlying application.",
		header: <ModalDialog />,
	},
	{
		title: "Accordion Dialog",
		description:
			"The Accordion Dialog is a ready-to-use component that seamlessly integrates an accordion feature within a dialog box. When the dialog is opened, the accordion expands to reveal its contents, providing an organized and interactive way to display information.",
		header: <AccordionDialog />,
	},
	{
		title: "Hover Digital",
		description:
			"The Hover Dialog is a ready-to-use component that activates when a user hovers over a designated area. Upon hovering, the dialog appears, displaying relevant information in an engaging and unobtrusive manner. This feature enhances user experience by providing instant access to content without requiring a click.",
		header: <HoverDialog />,
	},
	{
		title: "Calendar Dialog",
		description:
			"The Calendar Dialog is a ready-to-use component that presents a user-friendly interface for selecting dates. When activated, the dialog displays a calendar, allowing users to easily navigate through months and select specific dates. This feature enhances user experience by providing an intuitive way to manage and schedule events, appointments, or reminders.",
		header: <CalendarDialog />,
	},
	{
		title: "Combobox Dialog",
		description:
			"The Combobox Dialog is a ready-to-use component that combines the functionality of a dropdown list with a dialog interface. When activated, the dialog allows users to select an option from the combobox while also providing additional information or actions related to their selection. This interactive feature enhances user experience by streamlining choices and facilitating quick decision-making.",
		header: <ComboboxDialog />,
	},
	{
		title: "Menu Dialog",
		description:
			"The Multiple Menu Dialog is a ready-to-use component designed to facilitate the selection of options from various menus within a single dialog interface. When activated, this dialog presents users with multiple menus, enabling them to make selections efficiently and intuitively. This feature enhances user experience by streamlining navigation and allowing for quick access to related options, making it ideal for complex decision-making scenarios.",
		header: <MenuDialog />,
	},
	{
		title: "Form Dialog",
		description:
			"The Form Dialog Component is a ready-to-use interface element designed to facilitate user input through a structured form. When activated, the dialog overlays the main content, allowing users to enter data or provide feedback in a focused environment. This feature enhances user experience by guiding users through the input process, ensuring that all necessary information is collected efficiently and effectively, while maintaining the context of the application. ",
		header: <RequestFormDialog />,
	},
	{
		title: "Tiptap Dialog",
		description:
			"The Tiptap Dialog Component is a ready-to-use interface designed for creating and modifying content in a focused environment. When activated, this dialog overlays the main content, providing users with a rich text editor or code editor to input and format their text or code. This feature enhances user experience by offering a dedicated space for editing, complete with tools and options that streamline the editing process, while keeping users engaged with the overall application context. ",
		header: <TiptapDialog />,
	},
];
