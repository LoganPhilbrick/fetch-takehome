import { useState } from "react";
import { login } from "../api/login";
import { useNavigate } from "react-router-dom";

export default function LoginCard() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!name || !email) {
      if (!name) {
        setNameError("Name is required");
      } else {
        setNameError("");
      }
      if (!email) {
        setEmailError("Email is required");
      } else {
        setEmailError("");
      }
      return; // Stop execution if validation fails
    }

    // Proceed with login if both fields are provided
    login({ name, email }).then(() => navigate("/Dashboard"));
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      {/*<!-- Component: Card with form --> */}
      <form className="overflow-hidden rounded-4xl bg-white text-slate-500 shadow-md shadow-slate-200 w-96 h-88.8 ">
        <div>
          <a id="WindUI" aria-label="WindUI logo" aria-current="page" className="flex justify-center font-medium items-center gap-2 whitespace-nowrap pt-4 pb-3 text-lg " href="javascript:void(0)">
            <img className="w-18" src="https://img.icons8.com/?size=100&id=CJMxOJZyZfby&format=png&color=FD7E14" alt="fetch logo" />
          </a>
        </div>
        {/*  <!-- Body--> */}
        <div className="px-6 pb-6">
          <header className="text-center">
            <h3 className="text-xl font-medium text-slate-700">Login</h3>
          </header>
          <div className="flex flex-col space-y-8">
            {/*      <!-- Input field --> */}
            <div className="relative my-6">
              <input
                id="id-b13"
                type="text"
                name="id-b13"
                value={name}
                required
                placeholder="your name"
                onChange={(e) => setName(e.target.value)}
                className="peer relative h-10 w-full rounded border border-slate-200 px-4 pr-12 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="id-b13"
                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Your name
              </label>
              <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
                {nameError ? <p className="text-red-500">{nameError}*</p> : <span>Enter your name</span>}
              </small>
            </div>
            {/*      <!-- Input field --> */}
            <div className="relative my-6">
              <input
                id="id-b03"
                type="email"
                name="id-b03"
                value={email}
                placeholder="your email"
                required
                onChange={(e) => setEmail(e.target.value)}
                className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="id-b03"
                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Your email
              </label>
              <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
                {emailError ? <p className="text-red-500">{emailError}*</p> : <span>Enter your name</span>}
              </small>
            </div>
          </div>
        </div>
        {/*  <!-- Action base sized basic button --> */}
        <div className="flex justify-end p-6 ">
          <button
            type="submit"
            className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
            onClick={handleSubmit}
          >
            <span>Log in</span>
          </button>
        </div>
      </form>
      {/*<!-- End Card with form --> */}
    </div>
  );
}
