import * as React from "react";
import CustomDialog from "@/components/custom-modal/CustomDialog";
import CustomMenu from "@/components/custom-menu/CustomMenu";
import CustomHover from "@/components/custom-hover/CustomHover";
import CustomForm from "@/components/custom-form-request/CustomForm";

import CustomCalendar from "@/components/custom-calendar/CustomCalendar";
import CustomFormCombobox from "@/components/custom-combobox /CustomFormCombobox";
import CustomAccordion from "@/components/custom-accordion/CustomAccordion";

const Home = () => {
  return (
    <div className="grid gap-6">
      <CustomDialog />
      <CustomMenu />
      <CustomHover />
      <CustomForm />
      <CustomCalendar />
      <CustomFormCombobox />
      <CustomAccordion />
    </div>
  );
};

export default Home;
