"use client";
import { useState } from "react";

import ReportOfficerForm from "@/components/form/ReportOfficerForm";
import GeneralQueryForm from "@/components/form/GeneralQueryForm";
import SiteComplaintForm from "@/components/form/SiteComplaintForm";
import JobApplyingForm from "@/components/form/JobApplyingForm";

const FormSelection = () => {
  const [formValue, setFormValue] = useState(0);
  return (
    <div className="col-12 col-md-8 mb-3 mb-md-0">
      <div>
        <span className="h3 mb-4">Chose a mode of contact</span>
        <div className="my-3">
          <select className="form-select h4" aria-label="Default select example" onChange={(e) => setFormValue(e.target.value)}>
            <option selected disabled>
              Select Contact Criteria
            </option>
            <option value="1">General query</option>
            <option value="2">Report our company officer</option>
            <option value="3">Site complaints</option>
            <option value="4">Applying for job</option>
          </select>
        </div>
      </div>
      {formValue === "1" && <GeneralQueryForm />}
      {formValue === "2" && <ReportOfficerForm />}
      {formValue === "3" && <SiteComplaintForm />}
      {formValue === "4" && <JobApplyingForm />}
    </div>
  );
};
export default FormSelection;
