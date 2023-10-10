import React, { useState } from "react";

const Contact = () => {
const [data, setdata] = useState({
    fullname:'',
    email:'',
    password:'',
    msg:'',
});

const InputEvent = (event) =>{
    const {name, value} = event.target;

   setdata((preVal)=>{
    return{
        ...preVal, [name]:value,
    }
   })
};

    const formSubmit = (e) =>{
  e.preventDefault();
  alert(`${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Here is what I want to say ${data.msg}`);
    }
    return (
        <>
            <div className="my-5 ">
                <h1 className="text-center"> Contact US</h1>
                <div className="container contact_div">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <form>
                                <form onSubmit={formSubmit}>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">FullName</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="fullname" value={data.fullname} onChange={InputEvent} />
                                        <div id="emailHelp" class="form-text">Enter your FullName.</div>
                                    </div>

                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={data.email} onChange={InputEvent} />
                                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                    </div>

                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" name="password" value={data.password} onChange={InputEvent} />
                                    </div>

                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent}></textarea>
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                    </div>
                                    <button type="submit" class="btn btn-outline-primary">Submit form</button>
                                </form>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;