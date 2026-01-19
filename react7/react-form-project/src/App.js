import "./App.css";
import { useState } from "react";

function App() {
  const [userDetails, setUserDetails] = useState(
    {
      a_Title: "",
      b_First_Name: "",
      c_Last_Name: "",
      d_Gender: "",
      e_Email: "",
      f_Phone: "",
      g_House_no: "",
      h_Street_no: "",
      i_Country: "",
      j_Town_or_City: "",
      k_Postal_no: "",
      l_Contact_prefrence_call: false,
      m_Contact_prefrence_email: false,
      n_Contact_prefrence_SMS: false,
      o_Contact_prefrence_post: false,
    }
  )

  function changeHandler(event) {
    const {value, name, type, checked} = event.target
    setUserDetails((prev) => {
        return {
          ...prev,
          [name] : type === "checkbox" ? checked : value
        }
      })
  }


  function submitHandler(event) {
    event.preventDefault();
    //finally printing complete form data in object
    console.log("Finally printing complete form data in object")
    console.log(userDetails)
  }


  return (
    <form onSubmit={submitHandler}>
      <div className="w-[100vw] bg-slate-400 flex flex-col justify-center items-center gap-5">
          <div>
            <p className="text-2xl bg-slate-900 text-white rounded-md p-2 px-10 select-none">Form using React</p>
          </div>

          <div className="flex justify-evenly bg-slate-600 rounded-lg p-5 gap-10">

            <div className="select-none flex flex-col justify-evenly gap-3">
              <div>
                <label className="font-medium text-slate-100">Title</label>
              </div>

              <div>
                <label className="font-medium text-slate-100">First name<span>*</span></label>
              </div>

              <div>
                <label className="font-medium text-slate-100">Last name<span>*</span></label>
              </div>

              <div>
                <label className="font-medium text-slate-100">Gender<span>*</span></label>
              </div>

              <div>
                <label className="font-medium text-slate-100">Email<span>*</span></label>
              </div>

              <div>
                <label className="font-medium text-slate-100">Mobile</label>
              </div>

              <div>
                <label className="font-medium text-slate-100">House No.</label>
              </div>

              <div>
                <label className="font-medium text-slate-100">Street No.</label>
              </div>

              <div>
                <label className="font-medium text-slate-100">Country<span>*</span></label>
              </div>

              <div>
                <label className="font-medium text-slate-100">Town/City</label>
              </div>

              <div>
                <label className="font-medium text-slate-100">Postal no.</label>
              </div>

              <div>
                <label className="font-medium text-slate-100">Communication preferences</label>
              </div>

            </div>

            <div className="flex flex-col justify-evenly gap-3">
              <select 
                  name="a_Title"
                  value={userDetails.a_Title}
                  onChange={changeHandler}
                  className="text-[15px] p-[2px] w-full bg-slate-200 text-black rounded-sm outline-none px-1">
                <option className="hidden">Select</option>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Ms.">Ms.</option>
                <option value="Miss">Miss</option>
              </select>

              <input 
                className="text-[15px] p-[2px] w-full bg-slate-200 text-black rounded-sm outline-none pl-2"
                type="text"
                placeholder="Ravi"
                name="b_First_Name"
                value={userDetails.b_First_Name}
                onChange={changeHandler}
              />

              <input 
                className="text-[15px] p-[2px] w-full bg-slate-200 text-black rounded-sm outline-none pl-2"
                type="text"
                placeholder="Saini"
                name="c_Last_Name"
                value={userDetails.c_Last_Name}
                onChange={changeHandler}
              />

              <div className="select-none flex justify-between">
                <input 
                  id="female"
                  type="radio" 
                  name="d_Gender"
                  value="Female"
                  checked={userDetails.d_Gender === "Female"} 
                  onChange={changeHandler}
                />
                <label htmlFor="female" className="font-medium text-slate-200 translate-x-[-10px]">Female</label>
                <input 
                  id="male"
                  type="radio"  
                  name="d_Gender"
                  value="Male"
                  checked={userDetails.d_Gender === "Male"} 
                  onChange={changeHandler}
                />
                <label htmlFor="male" className="font-medium text-slate-200 translate-x-[-10px]">Male</label>
                <input 
                  id="others"
                  type="radio" 
                  name="d_Gender"
                  value="Others"
                  checked={userDetails.d_Gender === "Others"} 
                  onChange={changeHandler}
                />
                <label htmlFor="others" className="font-medium text-slate-200 translate-x-[-10px]">Others</label>
              </div>

              <input 
                className="w-full bg-slate-200 text-black rounded-sm outline-none pl-2"
                type="text"
                placeholder="xyz@gmail.com"
                name="e_Email"
                value={userDetails.e_Email}
                onChange={changeHandler}
              />

              <input 
                className="text-[15px] p-[2px] w-full bg-slate-200 text-black rounded-sm outline-none pl-2"
                type="text"
                placeholder="962784****"
                name="f_Phone"
                value={userDetails.f_Phone}
                onChange={changeHandler}
              />

              <input 
                className="text-[15px] p-[2px] w-full bg-slate-200 text-black rounded-sm outline-none pl-2"
                type="text"
                placeholder="House no. 132, first floor"
                name="g_House_no"
                value={userDetails.g_House_no}
                onChange={changeHandler}
              />

              <input 
                className="text-[15px] p-[2px] w-full bg-slate-200 text-black rounded-sm outline-none pl-2"
                type="text"
                placeholder="Street no. 3 main"
                name="h_Street_no"
                value={userDetails.h_Street_no}
                onChange={changeHandler}
              />

              <select 
                  className="text-[15px] p-[2px] w-full bg-slate-200 text-black rounded-sm outline-none px-1"
                  name="i_Country"
                  value={userDetails.i_Country}
                  onChange={changeHandler}
                >
                <option className="hidden">Select</option>
                <option value="India">India</option>
                <option value="Germany">Germany</option>
                <option value="Franch">Franch</option>
                <option value="U.S.A">U.S.A</option>
                <option value="Nepal">Nepal</option>
              </select>

              <input 
                className="text-[15px] p-[2px] w-full bg-slate-200 text-black rounded-sm outline-none pl-2"
                type="text"
                placeholder="Shamli"
                name="j_Town_or_City"
                value={userDetails.j_Town_or_City}
                onChange={changeHandler}
              />

              <input 
                className="text-[15px] p-[2px] w-full bg-slate-200 text-black rounded-sm outline-none pl-2"
                type="text"
                placeholder="110092"
                name="k_Postal_no"
                value={userDetails.k_Postal_no}
                onChange={changeHandler}
              />

              <div className="select-none flex gap-6">
                <div>
                  <input 
                    id="call"
                    type="checkbox"
                    name="l_Contact_prefrence_call"
                    checked={userDetails.l_Contact_prefrence_call}
                    onChange={changeHandler}
                  />
                  <label htmlFor="call" className="text-slate-200 ml-1">Call</label>
                </div>
                <div>
                  <input 
                    id="email"
                    type="checkbox"
                    name="m_Contact_prefrence_email"
                    checked={userDetails.m_Contact_prefrence_email}
                    onChange={changeHandler}
                  />
                  <label htmlFor="email" className="text-slate-200 ml-1">Email</label>
                </div>
                <div>
                  <input 
                    id="SMS"
                    type="checkbox"
                    name="n_Contact_prefrence_SMS"
                    checked={userDetails.n_Contact_prefrence_SMS}
                    onChange={changeHandler}
                  />
                  <label htmlFor="SMS" className="text-slate-200 ml-1">SMS</label>
                </div>
                <div>
                  <input 
                    id="post"
                    type="checkbox"
                    name="o_Contact_prefrence_post"
                    checked={userDetails.o_Contact_prefrence_post}
                    onChange={changeHandler}
                  />
                  <label htmlFor="post" className="text-slate-200 ml-1">Post</label>
                </div>
              </div>

            </div>

          </div>

          <div>
              <input className="px-10 py-2 font-bold bg-black rounded-md text-white text-xl hover:scale-90 transition-all duration-300" 
                type="submit" 
                value="Save" 
              />
          </div>
      </div>
    </form>
  );
}

export default App;
