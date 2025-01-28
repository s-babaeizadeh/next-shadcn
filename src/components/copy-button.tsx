"use client";

import type { NpmCommands } from "@/types/unist";
import type { DropdownMenuTriggerProps } from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ClipboardIcon } from "lucide-react";
import * as React from "react";

import { Button, type ButtonProps } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface CopyButtonProps extends ButtonProps {
	value: string;
	src?: string;
}

export async function copyToClipboardWithMeta(value: string) {
	navigator.clipboard.writeText(value);
}

export function CopyButton({
	value,
	className,
	src,
	variant = "ghost",
	...props
}: CopyButtonProps) {
	const [hasCopied, setHasCopied] = React.useState(false);

	React.useEffect(() => {
		setTimeout(() => {
			setHasCopied(false);
		}, 2000);
	}, []);

	return (
		<Button
			size="icon"
			variant={variant}
			className={cn(
				"relative z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 [&_svg]:h-3 [&_svg]:w-3",
				className,
			)}
			onClick={() => {
				copyToClipboardWithMeta(value);
				setHasCopied(true);
			}}
			{...props}
		>
			<span className="sr-only">Copy</span>
			{hasCopied ? <CheckIcon /> : <ClipboardIcon />}
		</Button>
	);
}

interface CopyWithClassNamesProps extends DropdownMenuTriggerProps {
	value: string;
	classNames: string;
	className?: string;
}

export function CopyWithClassNames({
	value,
	classNames,
	className,
	...props
}: CopyWithClassNamesProps) {
	const [hasCopied, setHasCopied] = React.useState(false);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	React.useEffect(() => {
		setTimeout(() => {
			setHasCopied(false);
		}, 2000);
	}, [hasCopied]);

	const copyToClipboard = React.useCallback((value: string) => {
		copyToClipboardWithMeta(value);
		setHasCopied(true);
	}, []);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					size="icon"
					variant="ghost"
					className={cn(
						"relative z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50",
						className,
					)}
					{...props}
				>
					{hasCopied ? (
						<CheckIcon className="h-3 w-3" />
					) : (
						<ClipboardIcon className="h-3 w-3" />
					)}
					<span className="sr-only">Copy</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => copyToClipboard(value)}>
					Component
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => copyToClipboard(classNames)}>
					Classname
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

interface CopyNpmCommandButtonProps extends DropdownMenuTriggerProps {
	commands: Required<NpmCommands>;
}

export function CopyNpmCommandButton({
	commands,
	className,
	...props
}: CopyNpmCommandButtonProps) {
	const [hasCopied, setHasCopied] = React.useState(false);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	React.useEffect(() => {
		setTimeout(() => {
			setHasCopied(false);
		}, 2000);
	}, [hasCopied]);

	const copyCommand = React.useCallback((value: string) => {
		copyToClipboardWithMeta(value);
		setHasCopied(true);
	}, []);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					size="icon"
					variant="ghost"
					className={cn(
						"relative z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50",
						className,
					)}
					{...props}
				>
					{hasCopied ? (
						<CheckIcon className="h-3 w-3" />
					) : (
						<ClipboardIcon className="h-3 w-3" />
					)}
					<span className="sr-only">Copy</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => copyCommand(commands.__npmCommand__)}>
					npm
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => copyCommand(commands.__yarnCommand__)}>
					yarn
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => copyCommand(commands.__pnpmCommand__)}>
					pnpm
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => copyCommand(commands.__bunCommand__)}>
					bun
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
