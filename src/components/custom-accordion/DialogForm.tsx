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

import ReportForm from "./ReportForm";
import { DialogDemoProps } from "../types/DialogDemo.types";

const DialogForm: React.FC<DialogDemoProps> = ({
  buttonColor,
  titleForm = "Title for Form",
  descriptionForm = "Description for form",
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" style={{ backgroundColor: buttonColor }}>
          Trigger
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{titleForm}</DialogTitle>
          <DialogDescription>{descriptionForm}</DialogDescription>
        </DialogHeader>
        <ReportForm titleForm={titleForm} descriptionForm={descriptionForm} />
        <DialogFooter className="flex justify-between mx-auto flex-row gap-3">
          <DialogClose asChild>
            <Button
              type="button"
              variant="default"
              style={{ backgroundColor: buttonColor }}
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            type="button"
            variant="default"
            style={{ backgroundColor: buttonColor }}
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default DialogForm;
