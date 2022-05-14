import React from "react";
import auth from "../../../firebase.init";

import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  // for react hook form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // for react hook form

  if (user) {
    console.log(user);
  }

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    // to keep a card exactly at the middle of any page
    <div className="flex justify-center items-center h-screen p-5">
      <div className="card lg:max-w-lg text-primary-content shadow-lg p-5 ">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
        </div>

        {/* form from daisyui, its the actual visual form start */}

        {/* Email field start */}
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            class="input input-bordered w-full max-w-xs"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide a valid Email",
              },
            })}
          />
          <label class="label">
            {errors.email?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span class="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
        {/* Email field end */}

        {/* password field start */}
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            class="input input-bordered w-full max-w-xs"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide a valid Email",
              },
            })}
          />
          <label class="label">
            {errors.email?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span class="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
        {/* password field end */}

        {/* form from daisyui, its the actual visual form end */}

        {/* form from reack hooks form for adding funtionalities to input fields */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input />
          {errors.firstName?.type === "required" && "First name is required"}

          <input {...register("lastName", { required: true })} />
          {errors.lastName && "Last name is required"}

          <input type="submit" />
        </form>
        {/* form from reack hooks form  */}

        <div className="divider">OR</div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-outline btn-accent"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
