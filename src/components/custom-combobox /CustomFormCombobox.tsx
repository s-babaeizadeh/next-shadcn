import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { CustomDialogProps } from "../types/CustomDialog.types";
import { ComboboxForm } from "./ComboboxForm";

const CustomFormCombobox: React.FC<CustomDialogProps> = ({
  containerClassName = "flex items-center justify-center p-10 min-h-[40vh] min-w-[30vw]",
  cardClassName = "backdrop-blur-xl bg-white/30 border p-6 w-full sm:w-50 md:w-80 lg:w-96 h-auto dark:border-white dark:text-black",
  titleClassName = "font-bold text-xl",
  descriptionClassName = "pt-2",
  backgroundImage = "/img.svg",
  title = "Title for Custom Dialog",
  description = "The dialog is an interactive feature that presents content of custom dialog.",
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
          <ComboboxForm />
        </CardContent>
      </Card>
    </section>
  );
};

export default CustomFormCombobox;
