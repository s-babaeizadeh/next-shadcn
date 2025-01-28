import type { MainNavItem, SidebarNavItem } from "@/types/nav";

export interface DocsConfig {
	mainNav: MainNavItem[];
	sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
	mainNav: [
		{
			title: "Docs",
			href: "/docs",
		},
		{
			title: "Components",
			href: "/docs/extensions/menu-dialog",
		},
	],
	sidebarNav: [
		{
			title: "Getting Started",
			items: [
				{
					title: "Introduction",
					href: "/docs",
					items: [],
				},
				{
					title: "Installation",
					href: "/docs/installation",
					items: [],
				},
			],
		},
		{
			title: "Components",
			items: [
				{
					title: "Modal Dialog",
					href: "/docs/extensions/modal-dialog",
					items: [],
				},
				{
					title: "Menu Dialog",
					href: "/docs/extensions/menu-dialog",
					items: [],
				},
				{
					title: "Hover Dialog",
					href: "/docs/extensions/hover-dialog",
					items: [],
				},
				{
					title: "Form Dialog",
					href: "/docs/extensions/form-dialog",
					items: [],
				},
				{
					title: "Accordion Dialog",
					href: "/docs/extensions/accordion-dialog",
					items: [],
				},
				{
					title: "Calendar Dialog",
					href: "/docs/extensions/calendar-dialog",
					items: [],
				},
				{
					title: "Combobox Dialog",
					href: "/docs/extensions/combobox-dialog",
					items: [],
				},
				{
					title: "Tiptap Dialog",
					href: "/docs/extensions/tiptap-dialog",
					items: [],
				},
			],
		},
	],
};
