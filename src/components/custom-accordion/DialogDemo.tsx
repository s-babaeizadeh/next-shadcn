"use client";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import { DialogDemoProps } from "../types/DialogDemo.types";
import AccordionComponent from "./AccordionComponent";

export const DialogDemo: React.FC<DialogDemoProps> = ({
  buttonColor,
  titleDialog = "Title for Dialog",
  descriptionDialog = "The dialog is an interactive feature that presents content of dialog.",
  titleForm,
  descriptionForm,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="flex justify-center mx-auto"
          style={{ backgroundColor: buttonColor }}
        >
          Open Dialog
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{titleDialog}</DialogTitle>
          <DialogDescription>{descriptionDialog}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-center items-center mx-auto flex-col gap-3">
          <AccordionComponent
            buttonColor={buttonColor}
            titleForm={titleForm}
            descriptionForm={descriptionForm}
          />
          <DialogClose asChild>
            <Button
              type="button"
              variant="default"
              style={{ backgroundColor: buttonColor }}
            >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
