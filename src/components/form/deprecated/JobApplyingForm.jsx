//  import { useForm, ValidationError } from "@formspree/react";

//  const JobApplyingForm = () => {
//  const [state, handleSubmit] = useForm("jobForm");
//  console.log(state);
//  return "INCOMING";
//  <form className="container bg-main p-4 border-r col-12" onSubmit={handleSubmit}>
//    <div className="h3">Your Details</div>
//    <div className="row row-cols-1 row-cols-md-2">
//      <div className="form-part col mb-3">
//        <label className="form-label" htmlFor="name">
//          Your Full Name*
//        </label>
//        <input
//          className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//          id="name"
//          type="text"
//          name="Full name"
//          required
//          disabled={state.succeeded}
//       />
//     </div>
//     <div className="form-part col mb-3">
//       <label className="form-label" htmlFor="phone">
//         Contact Number *
//       </label>
//       <input
//         className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//         id="phone"
//         type="text"
//         name="Phone Number"
//         required
//         disabled={state.succeeded}
//       />
//     </div>
//   </div>

//   <div className="form-part mb-3">
//     <label className="form-label" htmlFor="email">
//       Email Address*
//     </label>
//     <input
//       className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//       id="email"
//       type="email"
//       name="Email"
//       required
//       disabled={state.succeeded}
//     />
//   </div>

//   <div className="row row-cols-1 row-cols-md-2">
//     <div className="form-part col mb-3">
//       <label className="form-label" htmlFor="dob">
//         Date of Birth*
//       </label>
//       <input
//         className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//         id="dob"
//         type="date"
//         name="Date of Birth"
//         required
//         disabled={state.succeeded}
//       />
//     </div>
//     <div className="form-part col mb-3">
//       <label className="form-label" htmlFor="jobrole">
//         Role Applying for*
//       </label>
//       <input
//         className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//         id="jobrole"
//         type="text"
//         name="Job Role"
//         required
//         disabled={state.succeeded}
//       />
//     </div>
//   </div>

//   <div className="row row-cols-1 row-cols-md-2">
//     <div className="form-part col mb-3">
//       <label className="form-label" htmlFor="ninum">
//         NI Number*
//       </label>
//       <input
//         className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//         id="ninum"
//         type="text"
//         name="NI Number"
//         required
//         disabled={state.succeeded}
//       />
//     </div>
//     <div className="form-part col mb-3">
//       <label className="form-label" htmlFor="sianum">
//         SIA Number*
//       </label>
//       <input
//         className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//         id="sianum"
//         type="text"
//         name="SIA Number"
//         required
//         disabled={state.succeeded}
//       />
//     </div>
//   </div>

//   <div className="h3 mt-3">Your Address</div>
//   <div className="row row-cols-1 row-cols-md-2">
//     <div className="form-part col mb-3">
//       <label className="form-label" htmlFor="housenum">
//         House Number / Name
//       </label>
//       <input
//         className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//         id="housenum"
//         type="text"
//         name="House Number"
//         required
//         disabled={state.succeeded}
//       />
//     </div>
//     <div className="form-part col mb-3">
//       <label className="form-label" htmlFor="streetname">
//         Street Name*
//       </label>
//       <input
//         className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//         id="streetname"
//         type="text"
//         name="Street Name"
//         required
//         disabled={state.succeeded}
//       />
//     </div>
//     <div className="form-part col mb-3">
//       <label className="form-label" htmlFor="town">
//         Town*
//       </label>
//       <input
//         className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//         id="town"
//         type="text"
//         name="Town"
//         required
//         disabled={state.succeeded}
//       />
//     </div>
//     <div className="form-part col mb-3">
//       <label className="form-label" htmlFor="postCode">
//         Post Code*
//       </label>
//       <input
//         className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//         id="postCode"
//         type="text"
//         name="Post Code"
//         required
//         disabled={state.succeeded}
//       />
//     </div>
//     <div className="form-part col mb-3">
//       <p className="mb-1">Have you resided at the above address in last 5 years?*</p>
//       <label className="form-check-label" htmlFor="flexCheckDefault1">
//         <input className="form-check-input me-2" type="radio" value="" id="flexCheckDefault1" name="Resided in above address in last 5 days" disabled={state.succeeded} />
//         Yes
//       </label>
//       <label className="form-check-label" htmlFor="flexCheckDefault2">
//         <input className="form-check-input ms-3 me-2" type="radio" value="" id="flexCheckDefault2" name="Resided in above address in last 5 days" disabled={state.succeeded} />
//         No
//       </label>
//     </div>
//   </div>

//   <div className="form-part mb-3 ">
//     <label className="form-label" htmlFor="fiveyearproof">
//       Please include addresses covering this 5 year period*
//     </label>
//     <textarea
//       className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//       id="fiveyearproof"
//       name="Please include addresses covering this 5 year period"
//       rows="3"
//       required
//       disabled={state.succeeded}
//     />
//   </div>

//   <p className="h3 mt-3">Educations and Qualification</p>

//   <div className="row row-cols-1 row-cols-md-3">
//     <div className="form-part col mb-3">
//       <label className="form-label" htmlFor="qualification-1">
//         Qualification*
//       </label>
//       <input
//         className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//         id="qualification"
//         type="text"
//         name="Qualification - 1"
//         required
//         disabled={state.succeeded}
//       />
//     </div>
//     <div className="form-part col mb-3">
//       <label className="form-label" htmlFor="school">
//         School/College/University*
//       </label>
//       <input
//         className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//         id="school"
//         type="text"
//         name="School/College/University - 1"
//         required
//         disabled={state.succeeded}
//       />
//     </div>
//     <div className="form-part col mb-3">
//       <label className="form-label" htmlFor="leavingdate">
//         Leaving Date*
//       </label>
//       <input
//         className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//         id="leavingdate"
//         type="date"
//         name="Leaving Date - 1"
//         required
//         disabled={state.succeeded}
//       />
//     </div>
//   </div>
//   <hr className="my-2" />

//   <div className="row row-cols-1 row-cols-md-3">
//     <div className="form-part col mb-3">
//       <label className="form-label" htmlFor="qualification-2">
//         Qualification
//       </label>
//       <input
//         className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//         id="qualification-2"
//         type="text"
//         name="Qualification - 2"
//         disabled={state.succeeded}
//       />
//     </div>
//     <div className="form-part col mb-3">
//       <label className="form-label" htmlFor="school-2">
//         School/College/University
//       </label>
//       <input
//         className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//         id="school-2"
//         type="text"
//         name="School/College/University - 2"
//         disabled={state.succeeded}
//       />
//     </div>
//     <div className="form-part col mb-3">
//       <label className="form-label" htmlFor="leavindate-2">
//         Leaving Date
//       </label>
//       <input
//         className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//         id="leavindate-2"
//         type="date"
//         name="Leaving Date - 2"
//         disabled={state.succeeded}
//       />
//     </div>
//   </div>
//   <hr className="my-2" />

//   <div className="row row-cols-1 row-cols-md-3">
//     <div className="form-part col mb-3">
//       <label className="form-label" htmlFor="qualification-3">
//         Qualification
//       </label>
//       <input
//         className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//         id="qualification-3"
//         type="text"
//         name="Qualification - 3"
//         disabled={state.succeeded}
//       />
//     </div>
//     <div className="form-part col mb-3">
//       <label className="form-label" htmlFor="school-3">
//         School/College/University
//       </label>
//       <input
//         className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//         id="school-3"
//         type="text"
//         name="School/College/University - 3"
//         disabled={state.succeeded}
//       />
//     </div>
//     <div className="form-part col mb-3">
//       <label className="form-label" htmlFor="leavindate-3">
//         Leaving Date
//       </label>
//       <input
//         className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//         id="leavindate-3"
//         type="date"
//         name="Leaving Date - 3"
//         disabled={state.succeeded}
//       />
//     </div>
//   </div>
//   <hr className="my-2" />

//   <div className="row row-cols-1 row-cols-md-3">
//     <div className="form-part col mb-3">
//       <label className="form-label" htmlFor="qualification-4">
//         Qualification
//       </label>
//       <input
//         className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//         id="qualification-4"
//         type="text"
//         name="Qualification - 4"
//         disabled={state.succeeded}
//       />
//     </div>
//     <div className="form-part col mb-3">
//       <label className="form-label" htmlFor="school-4">
//         School/College/University
//       </label>
//       <input
//         className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//         id="school-4"
//         type="text"
//         name="School/College/University - 4"
//         disabled={state.succeeded}
//       />
//     </div>
//     <div className="form-part col mb-3">
//       <label className="form-label" htmlFor="leavindate-4">
//         Leaving Date
//       </label>
//       <input
//         className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//         id="leavindate-4"
//         type="date"
//         name="Leaving Date - 4"
//         disabled={state.succeeded}
//       />
//     </div>
//   </div>
//   <hr className="my-2" />

//   <div className="row row-cols-1 row-cols-md-3">
//     <div className="form-part col mb-3">
//       <label className="form-label" htmlFor="qualification-5">
//         Qualification
//       </label>
//       <input
//         className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//         id="qualification-5"
//         type="text"
//         name="Qualification - 5"
//         disabled={state.succeeded}
//       />
//     </div>
//     <div className="form-part col mb-3">
//       <label className="form-label" htmlFor="school-5">
//         School/College/University
//       </label>
//       <input
//         className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//         id="school-5"
//         type="text"
//         name="School/College/University - 5"
//         disabled={state.succeeded}
//       />
//     </div>
//     <div className="form-part col mb-3">
//       <label className="form-label" htmlFor="leavindate-5">
//         Leaving Date
//       </label>
//       <input
//         className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//         id="leavindate-5"
//         type="date"
//         name="Leaving Date - 5"
//         disabled={state.succeeded}
//       />
//     </div>
//   </div>

//   <p className="h3 mt-3">Employment History</p>
//   <div>
//     <div className="row row-cols-1 row-cols-md-3">
//       <div className="form-part col mb-3">
//         <label className="form-label" htmlFor="employername-1">
//           Name &amp; Address of Employer*
//         </label>
//         <input
//           className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//           id="employername-1"
//           type="text"
//           required
//           name="Name of Employer - 1"
//           disabled={state.succeeded}
//         />
//       </div>
//       <div className="form-part col mb-3">
//         <label className="form-label" htmlFor="startdate-1">
//           Start Date*
//         </label>
//         <input
//           className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//           id="startdate-1"
//           type="date"
//           required
//           name="Start Date - 1"
//           disabled={state.succeeded}
//         />
//       </div>
//       <div className="form-part col mb-3">
//         <label className="form-label" htmlFor="enddate-1">
//           End Date*
//         </label>
//         <input
//           className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//           id="enddate-1"
//           type="date"
//           required
//           name="End Date - 1"
//           disabled={state.succeeded}
//         />
//       </div>

//       <div className="form-part col mb-3">
//         <label className="form-label" htmlFor="contactdetails-1">
//           Contact Details*
//         </label>
//         <input
//           className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//           id="contactdetails-1"
//           type="text"
//           required
//           name="Contact Details - 1"
//           disabled={state.succeeded}
//         />
//       </div>
//       <div className="form-part col mb-3">
//         <label className="form-label" htmlFor="emailaddress-1">
//           Email Address*
//         </label>
//         <input
//           className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//           id="emailaddress-1"
//           type="email"
//           required
//           name="Email Address - 1"
//           disabled={state.succeeded}
//         />
//       </div>
//     </div>
//     <hr className="my-2" />

//     <div className="row row-cols-1 row-cols-md-3">
//       <div className="form-part col mb-3">
//         <label className="form-label" htmlFor="employername-2">
//           Name &amp; Address of Employer
//         </label>
//         <input
//           className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//           id="employername-2"
//           type="text"
//           name="Name of Employer - 2"
//           disabled={state.succeeded}
//         />
//       </div>
//       <div className="form-part col mb-3">
//         <label className="form-label" htmlFor="startdate-2">
//           Start Date
//         </label>
//         <input
//           className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//           id="startdate-2"
//           type="date"
//           name="Start Date - 2"
//           disabled={state.succeeded}
//         />
//       </div>
//       <div className="form-part col mb-3">
//         <label className="form-label" htmlFor="enddate-2">
//           End Date
//         </label>
//         <input
//           className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//           id="enddate-2"
//           type="date"
//           name="End Date - 2"
//           disabled={state.succeeded}
//         />
//       </div>
//       <div className="form-part col mb-3">
//         <label className="form-label" htmlFor="contactdetails-2">
//           Contact Details
//         </label>
//         <input
//           className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//           id="contactdetails-2"
//           type="text"
//           name="Contact Details - 2"
//           disabled={state.succeeded}
//         />
//       </div>
//       <div className="form-part col mb-3">
//         <label className="form-label" htmlFor="emailaddress-2">
//           Email Address
//         </label>
//         <input
//           className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//           id="emailaddress-2"
//           type="email"
//           name="Email Address - 2"
//           disabled={state.succeeded}
//         />
//       </div>
//     </div>

//     <hr className="my-2" />

//     <div className="row row-cols-1 row-cols-md-3">
//       <div className="form-part col mb-3">
//         <label className="form-label" htmlFor="employername-3">
//           Name &amp; Address of Employer
//         </label>
//         <input
//           className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//           id="employername-3"
//           type="text"
//           name="Name of Employer - 3"
//           disabled={state.succeeded}
//         />
//       </div>
//       <div className="form-part col mb-3">
//         <label className="form-label" htmlFor="startdate-3">
//           Start Date
//         </label>
//         <input
//           className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//           id="startdate-3"
//           type="date"
//           name="Start Date - 3"
//           disabled={state.succeeded}
//         />
//       </div>
//       <div className="form-part col mb-3">
//         <label className="form-label" htmlFor="enddate-3">
//           End Date
//         </label>
//         <input
//           className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//           id="enddate-3"
//           type="date"
//           name="End Date - 3"
//           disabled={state.succeeded}
//         />
//       </div>
//       <div className="form-part col mb-3">
//         <label className="form-label" htmlFor="contactdetails-3">
//           Contact Details
//         </label>
//         <input
//           className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//           id="contactdetails-3"
//           type="text"
//           name="Contact Details - 3"
//           disabled={state.succeeded}
//         />
//       </div>
//       <div className="form-part col mb-3">
//         <label className="form-label" htmlFor="emailaddress-3">
//           Email Address
//         </label>
//         <input
//           className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//           id="emailaddress-3"
//           type="email"
//           name="Email Address - 3"
//           disabled={state.succeeded}
//         />
//       </div>
//     </div>

//     <hr className="my-2" />

//     <div className="row row-cols-1 row-cols-md-3">
//       <div className="form-part col mb-3">
//         <label className="form-label" htmlFor="employername-4">
//           Name &amp; Address of Employer
//         </label>
//         <input
//           className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//           id="employername-4"
//           type="text"
//           name="Name of Employer - 4"
//           disabled={state.succeeded}
//         />
//       </div>
//       <div className="form-part col mb-3">
//         <label className="form-label" htmlFor="startdate-4">
//           Start Date
//         </label>
//         <input
//           className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//           id="startdate-4"
//           type="date"
//           name="Start Date - 4"
//           disabled={state.succeeded}
//         />
//       </div>
//       <div className="form-part col mb-3">
//         <label className="form-label" htmlFor="enddate-4">
//           End Date
//         </label>
//         <input
//           className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//           id="enddate-4"
//           type="date"
//           name="End Date - 4"
//           disabled={state.succeeded}
//         />
//       </div>
//       <div className="form-part col mb-3">
//         <label className="form-label" htmlFor="contactdetails-4">
//           Contact Details
//         </label>
//         <input
//           className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//           id="contactdetails-4"
//           type="text"
//           name="Contact Details - 4"
//           disabled={state.succeeded}
//         />
//       </div>
//       <div className="form-part col mb-3">
//         <label className="form-label" htmlFor="emailaddress-4">
//           Email Address
//         </label>
//         <input
//           className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//           id="emailaddress-4"
//           type="email"
//           name="Email Address - 4"
//           disabled={state.succeeded}
//         />
//       </div>
//     </div>

//     <hr className="my-2" />

//     <div className="row row-cols-1 row-cols-md-3">
//       <div className="form-part col mb-3">
//         <label className="form-label" htmlFor="employername-5">
//           Name &amp; Address of Employer
//         </label>
//         <input
//           className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//           id="employername-5"
//           type="text"
//           name="Name of Employer - 5"
//           disabled={state.succeeded}
//         />
//       </div>
//       <div className="form-part col mb-3">
//         <label className="form-label" htmlFor="startdate-5">
//           Start Date
//         </label>
//         <input
//           className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//           id="startdate-5"
//           type="date"
//           name="Start Date - 5"
//           disabled={state.succeeded}
//         />
//       </div>
//       <div className="form-part col mb-3">
//         <label className="form-label" htmlFor="enddate-5">
//           End Date
//         </label>
//         <input
//           className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//           id="enddate-5"
//           type="date"
//           name="End Date - 5"
//           disabled={state.succeeded}
//         />
//       </div>
//       <div className="form-part col mb-3">
//         <label className="form-label" htmlFor="contactdetails-5">
//           Contact Details
//         </label>
//         <input
//           className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//           id="contactdetails-5"
//           type="text"
//           name="Contact Details - 5"
//           disabled={state.succeeded}
//         />
//       </div>
//       <div className="form-part col mb-3">
//         <label className="form-label" htmlFor="emailaddress-5">
//           Email Address
//         </label>
//         <input
//           className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//           id="emailaddress-5"
//           type="email"
//           name="Email Address - 5"
//           disabled={state.succeeded}
//         />
//       </div>
//     </div>
//   </div>

//   <p className="h3 mt-3">Character Reference</p>
//   <div className="row row-cols-1">
//     <div className="form-part mb-3 ">
//       <label className="form-label" htmlFor="message">
//         Please provide details of someone you have known for at least 5 years (known to you during the 2 years prior to this application)*
//       </label>
//       <textarea
//         className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//         id="message"
//         name="message"
//         rows="3"
//         required
//         disabled={state.succeeded}
//       />
//     </div>
//     <div className="form-part mb-3 ">
//       <label className="form-label" htmlFor="message">
//         Self Employment Reference Name &amp; Contact Details*
//       </label>
//       <textarea
//         className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//         id="message"
//         name="message"
//         rows="3"
//         required
//         disabled={state.succeeded}
//       />
//     </div>
//     <div className="form-part col mb-3">
//       <label className="form-label" htmlFor="utrnum">
//         If available, your UTR Number
//       </label>
//       <input
//         className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//         id="utrnum"
//         type="text"
//         name="UTR Number"
//         disabled={state.succeeded}
//       />
//     </div>
//   </div>

//   <p className="h3 mt-3">Authorisation</p>
//   <div className="form-part col mb-3">
//     <p className="mb-1">
//       I hereby authorise PGSFM to approach former employers, educational establishments, Government Departments and personal referees for verification of my career and
//       employment/unemployment record. I understand that any documents I provide will be checked for authenticity using ultraviolet light. I hereby authorise Umbrella Security
//       to make necessary enquiries about me including DBS and CCJ Checks.*
//     </p>
//     <label className="form-check-label" htmlFor="authcheckyes">
//       <input required className="form-check-input me-2" type="radio" id="authcheckyes" name="Authorisation to Documents and Background Check" disabled={state.succeeded} />I
//       Authorise
//     </label>
//     <label className="form-check-label" htmlFor="authcheckno">
//       <input className="form-check-input ms-3 me-2" type="radio" id="authcheckno" name="Authorisation to Documents and Background Check" disabled={state.succeeded} />I do not
//       Authorise
//     </label>
//   </div>

//   <p className="h3 mt-3">Health Statement</p>
//   <div className="form-part col mb-3">
//     <p className="mb-1">I am physically fit with no medical conditions which would prevent me from performing the role of a security operative fit*</p>
//     <label className="form-check-label" htmlFor="healthcheckyes">
//       <input className="form-check-input me-2" type="radio" id="healthcheckyes" name="Health Statement Confirmation" disabled={state.succeeded} />I Confirm
//     </label>
//     <label className="form-check-label" htmlFor="healthcheckno">
//       <input className="form-check-input ms-3 me-2" type="radio" id="healthcheckno" name="Health Statement Confirmation" disabled={state.succeeded} />I do not Confirm
//     </label>
//   </div>

//   <div className="form-part mb-3 ">
//     <label className="form-label" htmlFor="medicaldetails">
//       If you chose &quot;I do not confirm&quot;, please state all medical issues which can impact your ability to perform the roles of a security operative
//     </label>
//     <textarea
//       className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
//       id="medicaldetails"
//       name="Medical Conditions in case of Don't confirm on Health Statement"
//       rows="5"
//       disabled={state.succeeded}
//     />
//   </div>

//   <p className="h4">
//     Download the application form
//     <a href="/forms/complaint_form.pdf" target="_blank" rel="noreferrer" className="text-light ms-2">
//       by clicking here
//     </a>
//   </p>
//   <button className={`btn btn-light text-main shadow ${state.succeeded && "disabled"}`} type="submit" disabled={state.submitting}>
//     {state.succeeded ? "✓ Submitted" : "Submit"}
//   </button>

//   {state.succeeded && (
//     <p className="text mt-3 text-center">Thank you for contacting us! We&apos;ll get back to you very soon! For emergency purposes, call us at 0800 0016 705.</p>
//   )}
// </form>
// };

// export default JobApplyingForm;
