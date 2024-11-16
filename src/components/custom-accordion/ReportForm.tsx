import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CustomForm } from "@/components/types/CustomForm.types";

const ReportForm: React.FC<CustomForm> = ({ titleForm, descriptionForm }) => {
  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="area">Select 1</Label>
          <Select defaultValue="billing">
            <SelectTrigger id="area">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="team">Item 1</SelectItem>
              <SelectItem value="billing">Item 2</SelectItem>
              <SelectItem value="account">Item </SelectItem>
              <SelectItem value="deployments">Item 4</SelectItem>
              <SelectItem value="support">Item 5</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="security-level">Select 2</Label>
          <Select defaultValue="2">
            <SelectTrigger
              id="security-level"
              className="line-clamp-1 w-[160px] truncate"
            >
              <SelectValue placeholder="Select level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Item 1</SelectItem>
              <SelectItem value="2">Item 2</SelectItem>
              <SelectItem value="3">Item 3</SelectItem>
              <SelectItem value="4">Item 4</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="subject">{titleForm}</Label>
        <Input id="subject" placeholder="I need help with..." />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">{descriptionForm}</Label>
        <Textarea
          id="description"
          placeholder="Please include all information relevant to your issue."
        />
      </div>
    </div>
  );
};
export default ReportForm;
