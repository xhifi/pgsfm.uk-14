"use client";
import { useState } from "react";

import CareersForm from "@/components/form/CareersForm";
import Complaints from "@/components/form/ComplaintsForm";
import ContactForm from "@/components/form/ContactForm";
import SiteInspection from "@/components/siteInspection/Form";

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
            <option value="1">Report our company officer</option>
            <option value="2">Applying for job</option>
            <option value="3">General query</option>
            <option value="4">Site complaints</option>
          </select>
        </div>
      </div>
      {formValue === "1" && <SiteInspection />}
      {formValue === "2" && <CareersForm />}
      {formValue === "3" && <ContactForm />}
      {formValue === "4" && <Complaints />}
    </div>
  );
};
export default FormSelection;
