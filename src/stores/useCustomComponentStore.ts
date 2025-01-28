import { create } from "zustand";

interface useCustomComponentStore {
	sectionClassName: string;
	cardClassName: string;
	titleClassName: string;
	descriptionClassName: string;
	backgroundImage: string;
	buttonColor: string;
	cardTitle: string;
	cardDescription: string;
	dialogTitle: string;
	dialogDescription: string;
	formTitle?: string;
	formDescription?: string;
	popoverTitle: string;
	popoverDescription: string;
	hoverButton?: string;
	dialogButton: string;
	closeButton: string;
	triggerButton?: string;
	cancelButton?: string;
	submitButton?: string;
	accordionDescription?: string;
	accordionItem?: string;
	calenderDescription?: string;
	calenderTitle?: string;
	openDialog?: string;
	setValues: (values: Partial<useCustomComponentStore>) => void;
}

// Create the Zustand store with proper typing
export const useCustomComponentStore = create<useCustomComponentStore>(
	(set) => ({
		sectionClassName:
			"flex items-center justify-center p-10 min-h-[40vh] relative bg-cover bg-center bg-no-repeat bg-[url('/img.svg')]",
		cardClassName:
			"backdrop-blur-xl bg-white/30 border p-6 w-full sm:w-50 md:w-80 lg:w-96 h-auto dark:border-white dark:text-black",
		titleClassName: "font-bold text-xl",
		descriptionClassName: "pt-2",
		backgroundImage: "/img.svg",
		buttonColor: "bg-purple-800 text-white shadow hover:bg-purple-900",
		cardTitle: "Title for Custom Dialog",
		cardDescription:
			"The dialog is an interactive feature that presents content of custom dialog.",
		dialogTitle: "Title for Dialog",
		dialogDescription:
			"The dialog is an interactive feature that presents content of dialog in hover.",
		popoverTitle: "Title for Popover",
		popoverDescription:
			"The dialog is an interactive feature that presents content of popover.",
		formTitle: "Title for subject form",
		formDescription: "Description of request",
		hoverButton: "Hover",
		dialogButton: "Open Dialog",
		closeButton: "close",
		cancelButton: "cancel",
		submitButton: "submit",
		triggerButton: "Trigger",
		accordionDescription: "Description for Item",
		accordionItem: "Item",
		calenderDescription: "Your date of birth is used to calculate your age.",
		calenderTitle: "Date of birth",
		openDialog: " Open Dialog",

		// Properly typed setValues function
		setValues: (values) => set((state) => ({ ...state, ...values })),
	}),
);
