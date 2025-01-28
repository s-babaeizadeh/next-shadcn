import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { useCustomComponentStore } from "@/stores/useCustomComponentStore";

const AccordionComponent: React.FC = () => {
	const { accordionDescription, accordionItem } = useCustomComponentStore();
	return (
		<Accordion type="single" collapsible className="w-full">
			<AccordionItem value="item-1">
				<AccordionTrigger>{accordionItem}</AccordionTrigger>
				<AccordionContent>{accordionDescription}</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>{accordionItem}</AccordionTrigger>
				<AccordionContent>{accordionDescription}</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>{accordionItem}</AccordionTrigger>
				<AccordionContent>{accordionDescription}</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
};

export default AccordionComponent;
