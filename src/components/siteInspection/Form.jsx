// import { useForm, ValidationError } from "@formspree/react";

const SiteInspection = () => {
  // const [state, handleSubmit] = useForm("siteInspectionForm");

  return "INCOMING";
  // <form className="bg-main p-4 border-r" onSubmit={handleSubmit}>
  //   <div className="row row-cols-1 row-cols-md-2">
  //     <div className="form-part col mb-3">
  //       <label className="form-label" htmlFor="name">
  //         Your Full Name*
  //       </label>
  //       <input
  //         className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
  //         id="name"
  //         type="text"
  //         name="Full name"
  //         required
  //         disabled={state.succeeded}
  //       />
  //     </div>
  //     <div className="form-part col mb-3">
  //       <label className="form-label" htmlFor="phone">
  //         Contact Number*
  //       </label>
  //       <input
  //         className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
  //         id="phone"
  //         type="text"
  //         name="Contact Number"
  //         disabled={state.succeeded}
  //       />
  //     </div>
  //   </div>

  //   <div className="row row-cols-1 row-cols-md-2">
  //     <div className="form-part mb-3 col-12 col-md-6">
  //       <label className="form-label" htmlFor="siteName">
  //         Site Name*
  //       </label>
  //       <input
  //         className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
  //         id="siteName"
  //         type="text"
  //         name="siteName"
  //         required
  //         disabled={state.succeeded}
  //       />
  //     </div>

  //     <div className="form-part mb-3 col-12 col-md-6">
  //       <label className="form-label" htmlFor="inspectionAddress">
  //         Inspection Site Address*
  //       </label>
  //       <input
  //         className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
  //         id="inspectionAddress"
  //         type="text"
  //         name="Inspection Site Address"
  //         disabled={state.succeeded}
  //       />
  //     </div>
  //   </div>

  //   <div className="row row-cols-1 row-cols-md-2">
  //     <div className="form-part mb-3 col-12 col-md-6">
  //       <label className="form-label" htmlFor="officerName">
  //         Officer&apos;s Name*
  //       </label>
  //       <input
  //         className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
  //         id="officerName"
  //         type="text"
  //         name="Officer Name"
  //         required
  //         disabled={state.succeeded}
  //       />
  //     </div>

  //     <div className="form-part mb-3 col-12 col-md-6">
  //       <label className="form-label" htmlFor="siaNumber">
  //         Officer&apos;s SIA Number (16 Digits)*
  //       </label>
  //       <input
  //         className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
  //         id="siaNumber"
  //         type="text"
  //         placeholder="1234 5678 9012 3456"
  //         name="Officer SIA Number"
  //         required
  //         disabled={state.succeeded}
  //       />
  //     </div>
  //   </div>

  //   <div className="form-part mb-3">
  //     <label className="form-label" htmlFor="expiryDate">
  //       Expiry Date*
  //     </label>
  //     <input
  //       className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
  //       id="expiryDate"
  //       type="date"
  //       name="Expiry Date"
  //       required
  //       disabled={state.succeeded}
  //     />
  //   </div>

  //   <div className="form-part mb-3">
  //     <label className="form-label" htmlFor="details">
  //       Details for Inspection*
  //     </label>
  //     <textarea
  //       className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
  //       id="details"
  //       name="text"
  //       rows="10"
  //       required
  //       disabled={state.succeeded}
  //     />
  //     <ValidationError prefix="Message" field="message" errors={state.errors} />
  //   </div>

  //   <button className={`btn btn-light text-main shadow ${state.succeeded && "disabled"}`} type="submit" disabled={state.submitting}>
  //     {state.succeeded ? "✓ Submitted" : "Submit"}
  //   </button>

  //   {state.succeeded && (
  //     <p className="text mt-3 text-center">Thank you for contacting us! We&apos;ll get back to you very soon! For emergency purposes, call us at 0800 0016 705.</p>
  //   )}
  // </form>
};

export default SiteInspection;
