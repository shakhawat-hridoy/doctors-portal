import React from "react";
import auth from "../../../firebase.init";

import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../../Shared/Loading";
import { Link } from "react-router-dom";

const Login = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useSignInWithEmailAndPassword(auth);

  // for react hook form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // for react hook form

  let signInError;

  if (emailLoading || googleLoading) {
    return <Loading></Loading>;
  }

  if (googleError || emailError) {
    signInError = (
      <p className="text-red-600">
        <small>{googleError?.message || emailError?.message}</small>
      </p>
    );
  }

  if (emailUser || googleUser) {
    console.log(emailUser || googleUser);
  }

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    // to keep a card exactly at the middle of any page
    <div className="flex justify-center items-center h-screen p-5">
      <div className="card lg:max-w-lg text-primary-content shadow-lg p-5 ">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is Required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provide a valid Email",
                },
              })}
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is Required",
                },
                minLength: {
                  value: 6,
                  message: "Must be 6 characters or longer",
                },
              })}
            />
            <label className="label">
              {errors.password?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
            </label>
          </div>

          {signInError}

          <input
            className="btn w-full max-w-xs text-white"
            type="submit"
            value="Login"
          />
        </form>

        <p className="my-4">
          <small>
            New to Doctor's Portal?{" "}
            <Link className="text-primary" to="/signup">
              Create New Account
            </Link>
          </small>
        </p>

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
