import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    mobilenumber: "",
    email: "",
    message: "",
  });

  const InputEvent = (event) => {
    const {name, value} = event.target;

    setData((preVal)=>{
      return{
        ...preVal,[name]:value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`my name is ${data.fullname}. my mobile number ${data.mobilenumber}. my email id is ${data.email}. i want to suggest ${data.message}. `);
  };

  return (
    <>
      <div className="my-5 text-center">
        <h2>Contact Us</h2>
      </div>
      <div className="container contact_div">
        <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Full name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="fullname"
                value={data.fullname}
                onChange={InputEvent}
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Phone Number
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                name="mobilenumber"
                value={data.mobilenumber}
                onChange={InputEvent}
                placeholder="mobile number"
              />
            </div>

            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                name="email"
                value={data.email}
                onChange={InputEvent}
                placeholder="Enter your e-mail id"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                name="message"
                value={data.message}
                onChange={InputEvent}
                rows="3"
              ></textarea>
            </div>
            <div className="col-12">
              <button className="btn btn-outline-primary" type="submit">
                Submit form
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
