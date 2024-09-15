"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import LoadingSpinner from "../LoadingSpinner";
import submitFormAction from "@/actions/submitFormAction";
import reportOfficerSchema from "./schema/reportOfficer";

const ReportOfficerForm = () => {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: zodResolver(reportOfficerSchema),
    mode: "onBlur",
  });

  const submit = async (data) => {
    if (Boolean(data.captcha)) {
      return setStatus("submitted");
    }

    try {
      setStatus("loading");
      const res = await submitFormAction("officer-complaint", data);

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

  return (
    <form className="bg-main p-4 border-r" onSubmit={handleSubmit(submit)}>
      <div className="row row-cols-1 row-cols-md-2">
        <div className="form-part col mb-3">
          <label className="form-label" htmlFor="name">
            Your Full Name*
          </label>
          <input
            id="name"
            type="text"
            disabled={status === "loading" || status === "submitted"}
            className={`form-control pg-input shadow ${errors.name ? "is-invalid" : ""} ${status === "submitted" ? "opacity-7" : ""}`}
            {...register("name", { required: true })}
          />
          {errors.name && <small className="text-danger text-xs">{errors.name.message}</small>}
        </div>

        <div className="form-part col mb-3">
          <label className="form-label" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            type="text"
            disabled={status === "loading" || status === "submitted"}
            className={`form-control pg-input shadow ${errors.phone ? "is-invalid" : ""} ${status === "submitted" ? "opacity-7" : ""}`}
            {...register("phone", { required: true })}
          />
          {errors.phone && <small className="text-danger text-xs">{errors.phone.message}</small>}
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2">
        <div className="form-part col mb-3">
          <label className="form-label" htmlFor="site-name">
            Inspection Site / Company Name
          </label>
          <input
            id="site-name"
            type="text"
            disabled={status === "loading" || status === "submitted"}
            className={`form-control pg-input shadow ${errors.phone ? "is-invalid" : ""} ${status === "submitted" ? "opacity-7" : ""}`}
            {...register("siteName", { required: true })}
          />
          {errors.siteName && <small className="text-danger text-xs">{errors.siteName.message}</small>}
        </div>
        <div className="form-part col mb-3">
          <label className="form-label" htmlFor="address">
            Inspection Site Address
          </label>
          <input
            id="address"
            type="text"
            disabled={status === "loading" || status === "submitted"}
            className={`form-control pg-input shadow ${errors.address ? "is-invalid" : ""} ${status === "submitted" ? "opacity-7" : ""}`}
            {...register("address", { required: true })}
          />
          {errors.address && <small className="text-danger text-xs">{errors.address.message}</small>}
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2">
        <div className="form-part col mb-3">
          <label className="form-label" htmlFor="officer-name">
            Officer Name
          </label>
          <input
            id="officer-name"
            type="text"
            disabled={status === "loading" || status === "submitted"}
            className={`form-control pg-input shadow ${errors.phone ? "is-invalid" : ""} ${status === "submitted" ? "opacity-7" : ""}`}
            {...register("officerName", { required: true })}
          />
          {errors.officerName && <small className="text-danger text-xs">{errors.officerName.message}</small>}
        </div>
        <div className="form-part col mb-3">
          <label className="form-label" htmlFor="officer-sia-number">
            Office SIA Number
          </label>
          <input
            id="officer-sia-number"
            type="text"
            disabled={status === "loading" || status === "submitted"}
            className={`form-control pg-input shadow ${errors.address ? "is-invalid" : ""} ${status === "submitted" ? "opacity-7" : ""}`}
            {...register("officerSiaNumber")}
          />
          {errors.officerSiaNumber !== "" ||
            (errors.officerSiaNumber && <small className="text-danger text-xs">{errors.officerSiaNumber.message}</small>)}
        </div>
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
      <div className="mb-3">
        <label className="form-label" htmlFor="message">
          Issue Description
        </label>
        <textarea
          id="message"
          disabled={status === "loading" || status === "submitted"}
          className={`form-control pg-input shadow ${errors.message ? "is-invalid" : ""} ${status === "submitted" ? "opacity-7" : ""}`}
          rows="5"
          type="text"
          {...register("message", { required: true })}
        />
        {errors.message && <small className="text-danger text-xs">{errors.message.message}</small>}
      </div>

      <button disabled={status === "loading" || status === "submitted"} className={`btn btn-light text-main shadow`} type="submit">
        {status === "loading" ? <LoadingSpinner /> : status === "submitted" ? "Submitted" : "Submit"}
      </button>
      {status === "submitted" && <span className="ms-4">Thank You!</span>}
      {status === "error" && <span className="text-danger ms-4">{errorMessage}</span>}
    </form>
  );
};

export default ReportOfficerForm;
