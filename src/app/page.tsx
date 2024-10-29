import * as React from "react";
import CustomDialog from "@/components/custom-modal/CustomDialog";
import CustomMenu from "@/components/custom-menu/CustomMenu";
import CustomHover from "@/components/custom-hover/CustomHover";
import CustomForm from "@/components/custom-form-request/CustomForm";

import CustomProfileForm from "@/components/custom-profile-form/CustomProfileForm";
import CustomFormCombobox from "@/components/custom-combobox /CustomFormCombobox";

const Home = () => {
  return (
    <div className="grid gap-6">
      <CustomDialog />
      <CustomMenu />
      <CustomHover />
      <CustomForm />
      <CustomProfileForm />
      <CustomFormCombobox />
    </div>
  );
};

export default Home;
