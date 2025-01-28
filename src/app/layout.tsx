import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
	title: "Next Shadcn",
	description:
		"The sets of fully customizable components to be used are created with shadcn/ui components for a Next.js application.",
};

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

const fontMono = {
	className: GeistMono.className,
	variable: "--font-geist-mono",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable,
					fontMono.className,
				)}
			>
				<ThemeProvider attribute="class">
					<TooltipProvider>
						<Header />
						{children}
					</TooltipProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
