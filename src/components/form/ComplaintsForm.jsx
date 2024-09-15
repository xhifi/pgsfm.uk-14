// import { useForm, ValidationError } from "@formspree/react";

const Complaints = () => {
  // const [state, handleSubmit] = useForm("complaints");

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
  //         type="name"
  //         name="Full name"
  //         required
  //         disabled={state.succeeded}
  //       />
  //     </div>
  //     <div className="form-part col mb-3">
  //       <label className="form-label" htmlFor="phone">
  //         Contact Number
  //       </label>
  //       <input
  //         className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
  //         id="name"
  //         type="text"
  //         name="phone"
  //         disabled={state.succeeded}
  //       />
  //     </div>
  //   </div>

  //   <div className="row row-cols-1 row-cols-md-2">
  //     <div className="form-part mb-3 col">
  //       <label className="form-label" htmlFor="email">
  //         Email Address*
  //       </label>
  //       <input
  //         className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
  //         id="email"
  //         type="email"
  //         name="email"
  //         required
  //         disabled={state.succeeded}
  //       />
  //       <ValidationError prefix="Email" field="email" errors={state.errors} />
  //     </div>

  //     <div className="form-part mb-3 col">
  //       <label className="form-label" htmlFor="address">
  //         Inspection Site Address*
  //       </label>
  //       <input
  //         className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
  //         id="address"
  //         type="address"
  //         name="Inspection Site Address"
  //         disabled={state.succeeded}
  //       />
  //     </div>
  //   </div>

  //   <div className="form-part mb-3">
  //     <label className="form-label" htmlFor="message">
  //       Your Message*
  //     </label>
  //     <textarea
  //       className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
  //       id="message"
  //       name="message"
  //       rows="5"
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

export default Complaints;
