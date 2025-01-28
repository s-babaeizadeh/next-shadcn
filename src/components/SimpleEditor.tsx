"use client";

// Custom
import content from "@/components/TextContent";
import { Button } from "@/components/ui/button"; // Import Shadcn Button components
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"; // Import Shadcn Dialog components
import { useCustomComponentStore } from "@/stores/useCustomComponentStore";
import Bold from "@tiptap/extension-bold";
import Code from "@tiptap/extension-code";
import Document from "@tiptap/extension-document";
import History from "@tiptap/extension-history";
import Italic from "@tiptap/extension-italic";
import Link from "@tiptap/extension-link";
import Paragraph from "@tiptap/extension-paragraph";
import Strike from "@tiptap/extension-strike";
import Text from "@tiptap/extension-text";
import Underline from "@tiptap/extension-underline";
// => Tiptap packages
import {
	BubbleMenu,
	type Editor,
	EditorContent,
	useEditor,
} from "@tiptap/react";
import classNames from "classnames";
import {
	BoldIcon,
	Code2,
	ItalicIcon,
	Link2,
	RotateCcw,
	RotateCw,
	Strikethrough,
	UnderlineIcon,
} from "lucide-react";
import type React from "react";
import { useCallback, useState } from "react";
import { Input } from "./ui/input";

const SimpleEditor: React.FC = () => {
	const { buttonColor } = useCustomComponentStore();

	const editor = useEditor({
		extensions: [
			Document,
			History,
			Paragraph,
			Text,
			Link.configure({
				openOnClick: false,
			}),
			Bold,
			Underline,
			Italic,
			Strike,
			Code,
		],
		content,
	}) as Editor;

	const [dialogOpen, setDialogOpen] = useState(false);
	const [url, setUrl] = useState<string>("");

	const openDialog = useCallback(() => {
		setUrl(editor.getAttributes("link").href);
		setDialogOpen(true);
	}, [editor]);

	const closeDialog = useCallback(() => {
		setDialogOpen(false);
		setUrl("");
	}, []);

	const saveLink = useCallback(() => {
		if (url) {
			editor
				.chain()
				.focus()
				.extendMarkRange("link")
				.setLink({ href: url, target: "_blank" })
				.run();
		} else {
			editor.chain().focus().extendMarkRange("link").unsetLink().run();
		}
		closeDialog();
	}, [editor, url, closeDialog]);

	const removeLink = useCallback(() => {
		editor.chain().focus().extendMarkRange("link").unsetLink().run();
		closeDialog();
	}, [editor, closeDialog]);

	const toggleBold = useCallback(() => {
		editor.chain().focus().toggleBold().run();
	}, [editor]);

	const toggleUnderline = useCallback(() => {
		editor.chain().focus().toggleUnderline().run();
	}, [editor]);

	const toggleItalic = useCallback(() => {
		editor.chain().focus().toggleItalic().run();
	}, [editor]);

	const toggleStrike = useCallback(() => {
		editor.chain().focus().toggleStrike().run();
	}, [editor]);

	const toggleCode = useCallback(() => {
		editor.chain().focus().toggleCode().run();
	}, [editor]);

	if (!editor) {
		return null;
	}

	return (
		<div className="editor">
			<div className="mb-3">
				<Button
					variant="outline"
					onClick={() => editor.chain().focus().undo().run()}
					disabled={!editor.can().undo()}
				>
					<RotateCcw />
				</Button>
				<Button
					variant="outline"
					onClick={() => editor.chain().focus().redo().run()}
					disabled={!editor.can().redo()}
				>
					<RotateCw />
				</Button>
				<Button
					variant="outline"
					className={classNames({ "is-active": editor.isActive("link") })}
					onClick={openDialog}
				>
					<Link2 />
				</Button>
				<Button
					variant="outline"
					className={classNames({ "is-active": editor.isActive("bold") })}
					onClick={toggleBold}
				>
					<BoldIcon />
				</Button>
				<Button
					variant="outline"
					className={classNames({ "is-active": editor.isActive("underline") })}
					onClick={toggleUnderline}
				>
					<UnderlineIcon />
				</Button>
				<Button
					variant="outline"
					className={classNames({ "is-active": editor.isActive("italic") })}
					onClick={toggleItalic}
				>
					<ItalicIcon />
				</Button>
				<Button
					variant="outline"
					className={classNames({ "is-active": editor.isActive("strike") })}
					onClick={toggleStrike}
				>
					<Strikethrough />
				</Button>
				<Button
					variant="outline"
					className={classNames({ "is-active": editor.isActive("code") })}
					onClick={toggleCode}
				>
					<Code2 />
				</Button>
			</div>

			<BubbleMenu
				className="bubble-menu-light ml-10"
				tippyOptions={{ duration: 150 }}
				editor={editor}
				shouldShow={({ editor, view, state, oldState, from, to }) => {
					return from === to && editor.isActive("link");
				}}
			>
				<Button onClick={openDialog} className="ml-20">
					Edit
				</Button>
				<Button variant="destructive" onClick={removeLink}>
					Remove
				</Button>
			</BubbleMenu>

			<EditorContent editor={editor} />

			{/* Shadcn Dialog */}
			<Dialog open={dialogOpen} onOpenChange={closeDialog}>
				<DialogContent>
					<DialogTitle>Edit Link</DialogTitle>
					<Input
						type="text"
						value={url}
						onChange={(e) => setUrl(e.target.value)}
						placeholder="Enter URL"
						className="w-full h-10 border-none"
					/>

					<div className="flex justify-end items-center gap-2 p-3">
						<Button onClick={saveLink}>Save</Button>
						<Button variant="destructive" onClick={removeLink}>
							Remove
						</Button>
						<Button variant="outline" onClick={closeDialog}>
							Cancel
						</Button>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default SimpleEditor;
