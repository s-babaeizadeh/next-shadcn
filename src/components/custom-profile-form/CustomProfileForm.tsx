import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { DialogDemo } from "./DialogDemo";
import { CustomDialogProps } from "../types/CustomDialog.types";

const CustomFormRequest: React.FC<CustomDialogProps> = ({
  containerClassName = "flex items-center justify-center p-10 min-h-[40vh] min-w-[30vw]",
  cardClassName = "backdrop-blur-xl bg-white/30 border p-6 w-full sm:w-50 md:w-80 lg:w-96 h-auto dark:border-white dark:text-black",
  titleClassName = "font-bold text-xl",
  descriptionClassName = "pt-2",
  backgroundImage = "/img.svg",
  buttonColor = "bg-purple-800 text-white shadow hover:bg-purple-900",
  title = "Title for Custom Dialog",
  description = "The dialog is an interactive feature that presents content of custom dialog.",
  titleDialog,
  descriptionDialog,
  titlePopover,
  descriptionPopover,
}) => {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };
  return (
    <section
      style={sectionStyle}
      className={`${containerClassName} rounded-lg border border-gray-300 bg-cover bg-no-repeat bg-center`}
    >
      <Card className={cardClassName}>
        <CardHeader>
          <CardTitle className={titleClassName}>{title}</CardTitle>
          <CardDescription className={descriptionClassName}>
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DialogDemo
            buttonColor={buttonColor}
            titleDialog={titleDialog}
            descriptionDialog={descriptionDialog}
            titlePopover={titlePopover}
            descriptionPopover={descriptionPopover}
          />
        </CardContent>
      </Card>
    </section>
  );
};

export default CustomFormRequest;
