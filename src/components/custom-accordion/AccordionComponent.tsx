import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { DialogDemoProps } from "../types/DialogDemo.types";

const AccordionComponent: React.FC<DialogDemoProps> = ({
  buttonColor,
  titleForm = "Title",
  descriptionForm = "Description",
}) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>{titleForm}</AccordionTrigger>
        <AccordionContent>{descriptionForm}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>{titleForm}</AccordionTrigger>
        <AccordionContent>{descriptionForm}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>{titleForm}</AccordionTrigger>
        <AccordionContent>{descriptionForm}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionComponent;
