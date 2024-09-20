"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import LoadingSpinner from "../LoadingSpinner";
import submitFormAction from "@/actions/submitFormAction";
import jobApplicationSchema from "./schema/jobApplication";

const ReportOfficerForm = () => {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(jobApplicationSchema),
    mode: "all",
  });

  const submit = async (data) => {
    if (Boolean(data.captcha)) {
      return setStatus("submitted");
    }

    const vals = {
      personalInfo: {
        name: data.name,
        phone: data.phone,
        email: data.email,
        dob: data.dob,
        roleAppliedFor: data.jobrole,
        niNumber: data.ninum,
        siaNumber: data.sianum,
        address: {
          houseNumber: data.housenum,
          streetName: data.streetname,
          town: data.town,
          postCode: data.postCode,
          fiveYearConsent: data.resided,
          fiveYearBackground: data.fiveyearproof,
        },
      },
      qualification: (() => {
        const qualifications = [];
        for (let i = 0; i < 5; i++) {
          qualifications.push({
            qualification: data[`qualification${i}`],
            school: data[`school${i}`],
            leavingDate: data[`leavingdate${i}`],
          });
        }
        return qualifications;
      })(),
      employerInfo: (() => {
        const employers = [];
        for (let i = 0; i < 5; i++) {
          employers.push({
            employerName: data[`employerName${i}`],
            employerAddress: data[`employerAddress${i}`],
            employerPhone: data[`employerPhone${i}`],
            employerEmail: data[`employerEmail${i}`],
            employmentStartDate: data[`employmentStartDate${i}`],
            employmentEndDate: data[`employmentEndDate${i}`],
          });
        }
        return employers;
      })(),
      characterReference: {
        relativeInfo: data.relativeInfo,
        selfEmploymentInfo: data.selfEmploymentInfo,
        utrNumber: data.utrnum,
      },
      authorization: data.authorization,
      healthStatement: {
        physicallyFit: data.physicallyFit,
        medicalDetails: data.medicalDetails,
      },
    };

    try {
      setStatus("loading");
      const res = await submitFormAction("job-application", data);

      if (res.message === "Message sent successfully") {
        setStatus("submitted");
      } else {
        setStatus("error");
        setErrorMessage(res.error);
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message);
    }
  };

  console.log(errors);

  return (
    <>
      <form className="container bg-main p-4 border-r col-12" onSubmit={handleSubmit(submit)}>
        <div className="h3">Your Details</div>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="form-part col mb-3">
            <label className="form-label" htmlFor="name">
              Your Full Name*
            </label>
            <input
              className={`form-control pg-input shadow ${errors.name ? "is-invalid" : ""} ${status === "submitted" ? "opacity-7" : ""}`}
              id="name"
              type="text"
              name="Full name"
              required
              disabled={status === "loading" || status === "submitted"}
              {...register("name", { required: true })}
            />
            {errors.name && <small className="text-danger text-xs">{errors.name.message}</small>}
          </div>
          <div className="form-part col mb-3">
            <label className="form-label" htmlFor="phone">
              Contact Number *
            </label>
            <input
              className={`form-control pg-input shadow ${errors.phone ? "is-invalid" : ""} ${status === "submitted" ? "opacity-7" : ""}`}
              id="phone"
              type="text"
              name="Phone Number"
              required
              disabled={status === "loading" || status === "submitted"}
              {...register("phone", { required: true })}
            />
            {errors.phone && <small className="text-danger text-xs">{errors.phone.message}</small>}
          </div>
        </div>
        <div className="form-part mb-3">
          <label className="form-label" htmlFor="email">
            Email Address*
          </label>
          <input
            className={`form-control pg-input shadow ${errors.email ? "is-invalid" : ""} ${status === "submitted" ? "opacity-7" : ""}`}
            id="email"
            type="email"
            name="Email"
            required
            {...register("email", { required: true })}
            disabled={status === "loading" || status === "submitted"}
          />
          {errors.email && <small className="text-danger text-xs">{errors.email.message}</small>}
        </div>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="form-part col mb-3">
            <label className="form-label" htmlFor="dob">
              Date of Birth*
            </label>
            <input
              className={`form-control pg-input shadow ${errors.dob ? "is-invalid" : ""} ${status === "submitted" ? "opacity-7" : ""}`}
              id="dob"
              type="date"
              name="Date of Birth"
              required
              disabled={status === "loading" || status === "submitted"}
              {...register("dob", { required: true })}
            />
            {errors.dob && <small className="text-danger text-xs">{errors.dob.message}</small>}
          </div>
          <div className="form-part col mb-3">
            <label className="form-label" htmlFor="jobrole">
              Role Applying for*
            </label>
            <input
              className={`form-control pg-input shadow ${errors.jobrole ? "is-invalid" : ""} ${status === "submitted" ? "opacity-7" : ""}`}
              id="jobrole"
              type="text"
              name="Job Role"
              required
              disabled={status === "loading" || status === "submitted"}
              {...register("jobrole", { required: true })}
            />
            {errors.jobrole && <small className="text-danger text-xs">{errors.jobrole.message}</small>}
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2">
          <div className="form-part col mb-3">
            <label className="form-label" htmlFor="ninum">
              NI Number*
            </label>
            <input
              className={`form-control pg-input shadow ${errors.ninum ? "is-invalid" : ""} ${status === "submitted" ? "opacity-7" : ""}`}
              id="ninum"
              type="text"
              name="NI Number"
              required
              disabled={status === "loading" || status === "submitted"}
              {...register("ninum", { required: true })}
            />
            {errors.ninum && <small className="text-danger text-xs">{errors.ninum.message}</small>}
          </div>
          <div className="form-part col mb-3">
            <label className="form-label" htmlFor="sianum">
              SIA Number*
            </label>
            <input
              className={`form-control pg-input shadow ${errors.sianum ? "is-invalid" : ""} ${status === "submitted" ? "opacity-7" : ""}`}
              id="sianum"
              type="text"
              name="SIA Number"
              required
              disabled={status === "loading" || status === "submitted"}
              {...register("sianum", { required: true })}
            />
            {errors.sianum && <small className="text-danger text-xs">{errors.sianum.message}</small>}
          </div>
        </div>

        <div className="h3 mt-3">Your Address</div>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="form-part col mb-3">
            <label className="form-label" htmlFor="housenum">
              House Number / Name
            </label>
            <input
              className={`form-control pg-input shadow ${errors.housenum ? "is-invalid" : ""} ${status === "submitted" ? "opacity-7" : ""}`}
              id="housenum"
              type="text"
              disabled={status === "loading" || status === "submitted"}
              {...register("housenum", { required: true })}
            />
            {errors.housenum && <small className="text-danger text-xs">{errors.housenum.message}</small>}
          </div>
          <div className="form-part col mb-3">
            <label className="form-label" htmlFor="streetname">
              Street Name*
            </label>
            <input
              className={`form-control pg-input shadow ${errors.streetname ? "is-invalid" : ""} ${
                status === "submitted" ? "opacity-7" : ""
              }`}
              id="streetname"
              type="text"
              disabled={status === "loading" || status === "submitted"}
              {...register("streetname", { required: true })}
            />
            {errors.streetname && <small className="text-danger text-xs">{errors.streetname.message}</small>}
          </div>
          <div className="form-part col mb-3">
            <label className="form-label" htmlFor="town">
              Town*
            </label>
            <input
              className={`form-control pg-input shadow ${errors.town ? "is-invalid" : ""} ${status === "submitted" ? "opacity-7" : ""}`}
              id="town"
              type="text"
              disabled={status === "loading" || status === "submitted"}
              {...register("town", { required: true })}
            />
            {errors.town && <small className="text-danger text-xs">{errors.town.message}</small>}
          </div>
          <div className="form-part col mb-3">
            <label className="form-label" htmlFor="postCode">
              Post Code*
            </label>
            <input
              className={`form-control pg-input shadow ${errors.postCode ? "is-invalid" : ""} ${status === "submitted" ? "opacity-7" : ""}`}
              id="postCode"
              type="text"
              disabled={status === "loading" || status === "submitted"}
              {...register("postCode", { required: true })}
            />
            {errors.postCode && <small className="text-danger text-xs">{errors.postCode.message}</small>}
          </div>
        </div>
        <div className="form-part col mb-3">
          <p className="mb-1">Have you resided at the above address in last 5 years?*</p>
          <label htmlFor="residedYes">
            <input
              className={`form-check-input me-2 ${errors.resided ? "is-invalid" : ""} ${status === "submitted" ? "opacity-7" : ""}`}
              type="radio"
              value="Yes"
              id="residedYes"
              disabled={status === "loading" || status === "submitted"}
              {...register("resided", { required: true })}
            />
            Yes
          </label>
          <label htmlFor="residedNo">
            <input
              className={`form-check-input ms-3 me-2 ${errors.resided ? "is-invalid" : ""} ${status === "submitted" ? "opacity-7" : ""}`}
              type="radio"
              value="No"
              id="residedNo"
              disabled={status === "loading" || status === "submitted"}
              {...register("resided", { required: true })}
            />
            No
          </label>
          <div>{errors.resided && <small className="text-danger text-xs">{errors.resided.message}</small>}</div>
        </div>
        <div className="form-part mb-3 ">
          <label className="form-label" htmlFor="fiveyearproof">
            Please include addresses covering this 5 year period*
          </label>
          <textarea
            className={`form-control pg-input shadow ${errors.fiveyearproof ? "is-invalid" : ""} ${
              status === "submitted" ? "opacity-7" : ""
            }`}
            id="fiveyearproof"
            name="Please include addresses covering this 5 year period"
            rows="3"
            required
            disabled={status === "loading" || status === "submitted"}
            {...register("fiveyearproof", { required: true })}
          />
          {errors.fiveyearproof && <small className="text-danger text-xs">{errors.fiveyearproof.message}</small>}
        </div>

        <div className="h3">Educations and Qualification</div>
        {[...new Array(5)].map((_, i) => {
          return (
            <>
              <div className="row row-cols-1 row-cols-md-3">
                <div className="form-part col mb-3">
                  <label className="form-label" htmlFor={`qualification${i}`}>
                    {`Qualification${i === 0 ? "*" : ""}`}
                  </label>
                  <input
                    className={`form-control pg-input shadow ${errors[`qualification${i}`] ? "is-invalid" : ""} ${
                      status === "submitted" ? "opacity-7" : ""
                    }`}
                    id={`qualification${i}`}
                    type="text"
                    disabled={status === "loading" || status === "submitted"}
                    {...register(`qualification${i}`, { required: i === 0 })}
                  />
                  {errors[`qualification${i}`] && <small className="text-danger text-xs">{errors[`qualification${i}`].message}</small>}
                </div>
                <div className="form-part col mb-3">
                  <label className="form-label" htmlFor={`school${i}`}>
                    {`School/College/University${i === 0 ? "*" : ""}`}
                  </label>
                  <input
                    className={`form-control pg-input shadow ${errors[`school${i}`] ? "is-invalid" : ""} ${
                      status === "submitted" ? "opacity-7" : ""
                    }`}
                    id={`school${i}`}
                    type="text"
                    disabled={status === "loading" || status === "submitted"}
                    {...register(`school${i}`, { required: i === 0 })}
                  />
                  {errors[`school${i}`] && <small className="text-danger text-xs">{errors[`school${i}`].message}</small>}
                </div>
                <div className="form-part col mb-3">
                  <label className="form-label" htmlFor={`leavingdate${i}`}>
                    {`Leaving Date${i === 0 ? "*" : ""}`}
                  </label>
                  <input
                    className={`form-control pg-input shadow ${errors[`leavingdate${i}`] ? "is-invalid" : ""} ${
                      status === "submitted" ? "opacity-7" : ""
                    }`}
                    id={`leavingdate${i}`}
                    type="date"
                    disabled={status === "loading" || status === "submitted"}
                    {...register(`leavingdate${i}`, { required: i === 0 })}
                  />
                  {errors[`leavingdate${i}`] && <small className="text-danger text-xs">{errors[`leavingdate${i}`].message}</small>}
                </div>
              </div>
              <hr className="my-2" />
            </>
          );
        })}

        <div className="h3">Employment History</div>
        {[...new Array(5)].map((_, i) => {
          return (
            <>
              <div className="row row-cols-1 row-cols-md-3">
                <div className="form-part col mb-3">
                  <label className="form-label" htmlFor={`employerName${i}`}>
                    {`Name of Employer${i === 0 ? "*" : ""}`}
                  </label>
                  <input
                    className={`form-control pg-input shadow ${errors[`employerName${i}`] ? "is-invalid" : ""} ${
                      status === "submitted" ? "opacity-7" : ""
                    }`}
                    id={`employerName${i}`}
                    type="text"
                    disabled={status === "loading" || status === "submitted"}
                    {...register(`employerName${i}`, { required: i === 0 ? true : false })}
                  />
                  {errors[`employerName${i}`] && <small className="text-danger text-xs">{errors[`employerName${i}`].message}</small>}
                </div>
                <div className="form-part col mb-3">
                  <label className="form-label" htmlFor={`employerAddress${i}`}>
                    {`Address of Employer${i === 0 ? "*" : ""}`}
                  </label>
                  <input
                    className={`form-control pg-input shadow ${errors[`employerAddress${i}`] ? "is-invalid" : ""} ${
                      status === "submitted" ? "opacity-7" : ""
                    }`}
                    id={`employerAddress${i}`}
                    type="text"
                    disabled={status === "loading" || status === "submitted"}
                    {...register(`employerAddress${i}`, { required: i === 0 ? true : false })}
                  />
                  {errors[`employerAddress${i}`] && <small className="text-danger text-xs">{errors[`employerAddress${i}`].message}</small>}
                </div>
                <div className="form-part col mb-3">
                  <label className="form-label" htmlFor={`employmentStartDate${i}`}>
                    {`Start Date${i === 0 ? "*" : ""}`}
                  </label>
                  <input
                    className={`form-control pg-input shadow ${errors[`employmentStartDate${i}`] ? "is-invalid" : ""} ${
                      status === "submitted" ? "opacity-7" : ""
                    }`}
                    id={`employmentStartDate${i}`}
                    type="date"
                    disabled={status === "loading" || status === "submitted"}
                    {...register(`employmentStartDate${i}`, { required: i === 0 ? true : false })}
                  />
                  {errors[`employmentStartDate${i}`] && (
                    <small className="text-danger text-xs">{errors[`employmentStartDate${i}`].message}</small>
                  )}
                </div>
                <div className="form-part col mb-3">
                  <label className="form-label" htmlFor={`employmentEndDate${i}`}>
                    {`End Date${i === 0 ? "*" : ""}`}
                  </label>
                  <input
                    className={`form-control pg-input shadow ${errors[`employmentEndDate${i}`] ? "is-invalid" : ""} ${
                      status === "submitted" ? "opacity-7" : ""
                    }`}
                    id={`employmentEndDate${i}`}
                    type="date"
                    disabled={status === "loading" || status === "submitted"}
                    {...register(`employmentEndDate${i}`, { required: i === 0 ? true : false })}
                  />
                  {errors[`employmentEndDate${i}`] && (
                    <small className="text-danger text-xs">{errors[`employmentEndDate${i}`].message}</small>
                  )}
                </div>

                <div className="form-part col mb-3">
                  <label className="form-label" htmlFor={`employerPhone${i}`}>
                    {`Contact Details${i === 0 ? "*" : ""}`}
                  </label>
                  <input
                    className={`form-control pg-input shadow ${errors[`employerPhone${i}`] ? "is-invalid" : ""} ${
                      status === "submitted" ? "opacity-7" : ""
                    }`}
                    id={`employerPhone${i}`}
                    type="text"
                    disabled={status === "loading" || status === "submitted"}
                    {...register(`employerPhone${i}`, { required: i === 0 ? true : false })}
                  />
                  {errors[`employerPhone${i}`] && <small className="text-danger text-xs">{errors[`employerPhone${i}`].message}</small>}
                </div>
                <div className="form-part col mb-3">
                  <label className="form-label" htmlFor={`employerEmail${i}`}>
                    {`Email Address${i === 0 ? "*" : ""}`}
                  </label>
                  <input
                    className={`form-control pg-input shadow ${errors[`employerEmail${i}`] ? "is-invalid" : ""} ${
                      status === "submitted" ? "opacity-7" : ""
                    }`}
                    id={`employerEmail${i}`}
                    type="email"
                    disabled={status === "loading" || status === "submitted"}
                    {...register(`employerEmail${i}`, { required: i === 0 ? true : false })}
                  />
                  {errors[`employerEmail${i}`] && <small className="text-danger text-xs">{errors[`employerEmail${i}`].message}</small>}
                </div>
              </div>
              <hr className="my-2" />
            </>
          );
        })}

        <div className="h3">Character Reference</div>
        <div className="row row-cols-1">
          <div className="form-part mb-3 ">
            <label className="form-label" htmlFor="relativeInfo">
              Please provide details of someone you have known for at least 5 years (known to you during the 2 years prior to this
              application)*
            </label>
            <textarea
              className={`form-control pg-input shadow ${errors.relativeInfo ? "is-invalid" : ""} ${
                status === "submitted" ? "opacity-7" : ""
              }`}
              id="relativeInfo"
              rows="3"
              disabled={status === "loading" || status === "submitted"}
              {...register("relativeInfo", { required: true })}
            />
            {errors["relativeInfo"] && <small className="text-danger text-xs">{errors["relativeInfo"].message}</small>}
          </div>
          <div className="form-part mb-3 ">
            <label className="form-label" htmlFor="selfEmploymentInfo">
              Self Employment Reference Name &amp; Contact Details*
            </label>
            <textarea
              className={`form-control pg-input shadow ${errors.selfEmploymentInfo ? "is-invalid" : ""} ${
                status === "submitted" ? "opacity-7" : ""
              }`}
              id="selfEmploymentInfo"
              rows="3"
              disabled={status === "loading" || status === "submitted"}
              {...register(`selfEmploymentInfo`, { required: true })}
            />
            {errors["selfEmploymentInfo"] && <small className="text-danger text-xs">{errors["selfEmploymentInfo"].message}</small>}
          </div>
          <div className="form-part col mb-3">
            <label className="form-label" htmlFor="utrnum">
              If available, your UTR Number
            </label>
            <input
              className={`form-control pg-input shadow ${errors.utrnum ? "is-invalid" : ""} ${status === "submitted" ? "opacity-7" : ""}`}
              id="utrnum"
              type="text"
              disabled={status === "loading" || status === "submitted"}
              {...register(`utrnum`, { required: false })}
            />
            {errors["utrnum"] && <small className="text-danger text-xs">{errors["utrnum"].message}</small>}
          </div>
        </div>

        <div className="h3">Authorization</div>

        <div className="form-part col mb-3">
          <p className="mb-1">
            I hereby authorize PGSFM to approach former employers, educational establishments, Government Departments and personal referees
            for verification of my career and employment/unemployment record. I understand that any documents I provide will be checked for
            authenticity using ultraviolet light. I hereby authorize Umbrella Security to make necessary enquiries about me including DBS
            and CCJ Checks.*
          </p>
          <label htmlFor="authorizeYes">
            <input
              className={`form-check-input me-2 ${errors.authorization ? "is-invalid" : ""} ${status === "submitted" ? "opacity-7" : ""}`}
              type="radio"
              value="I authorize"
              id="authorizeYes"
              disabled={status === "loading" || status === "submitted"}
              {...register("authorization", { required: true })}
            />
            I authorize
          </label>
          <label htmlFor="authorizeNo">
            <input
              className={`form-check-input me-2 ms-3 ${errors.authorization ? "is-invalid" : ""} ${
                status === "submitted" ? "opacity-7" : ""
              }`}
              type="radio"
              value="I don't Authorize"
              id="authorizeNo"
              disabled={status === "loading" || status === "submitted"}
              {...register("authorization", { required: true })}
            />
            I don&apos;t authorize
          </label>
          <div>{errors["authorization"] && <small className="text-danger text-xs">{errors["authorization"].message}</small>}</div>
        </div>

        <div className="h3">Health Statement</div>
        <div className="form-part col mb-3">
          <p className="mb-1">
            I am physically fit with no medical conditions which would prevent me from performing the role of a security operative fit*
          </p>
          <label htmlFor="physicallyFitYes">
            <input
              className={`form-check-input me-2 ${errors.physicallyFit ? "is-invalid" : ""} ${status === "submitted" ? "opacity-7" : ""}`}
              type="radio"
              value="I confirm"
              id="physicallyFitYes"
              disabled={status === "loading" || status === "submitted"}
              {...register("physicallyFit", { required: true })}
            />
            I confirm
          </label>
          <label htmlFor="physicallyFitNo">
            <input
              className={`form-check-input ms-3 me-2 ${errors.physicallyFit ? "is-invalid" : ""} ${
                status === "submitted" ? "opacity-7" : ""
              }`}
              type="radio"
              value="I don't confirm"
              id="physicallyFitNo"
              disabled={status === "loading" || status === "submitted"}
              {...register("physicallyFit", { required: true })}
            />
            I don&apos;t confirm
          </label>
          <div>{errors["physicallyFit"] && <small className="text-danger text-xs">{errors["physicallyFit"].message}</small>}</div>
        </div>
        <div className="form-part mb-3 ">
          <label className="form-label" htmlFor="medicalDetails">
            If you chose &quot;I do not confirm&quot;, please state all medical issues which can impact your ability to perform the roles of
            a security operative
          </label>
          <textarea
            className={`form-control pg-input shadow ${errors.medicalDetails ? "is-invalid" : ""} ${
              status === "submitted" ? "opacity-7" : ""
            }`}
            id="medicalDetails"
            rows="5"
            disabled={status === "loading" || status === "submitted"}
            {...register("medicalDetails")}
          />
        </div>
        <div className="mb-3 d-none">
          <label className="form-label d-none" htmlFor="captcha">
            1 + 2 = ?
          </label>
          <input
            id="captcha"
            disabled={status === "loading" || status === "submitted"}
            className={`d-none form-control pg-input shadow ${errors.message ? "is-invalid" : ""} ${
              status === "submitted" ? "opacity-7" : ""
            }`}
            type="text"
            {...register("captcha")}
          />
        </div>
        <p className="h4">
          Download the application form
          <a href="/forms/complaint_form.pdf" target="_blank" rel="noreferrer" className="text-light ms-2">
            by clicking here
          </a>
        </p>

        <button disabled={status === "loading" || status === "submitted"} className={`btn btn-light text-main shadow`} type="submit">
          {status === "loading" ? <LoadingSpinner /> : status === "submitted" ? "Submitted" : "Submit"}
        </button>
        {status === "submitted" && <span className="ms-4">Thank You!</span>}
        {status === "error" && <span className="text-danger ms-4">{errorMessage}</span>}
      </form>
    </>
  );
};

export default ReportOfficerForm;
