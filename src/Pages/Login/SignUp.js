import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const SignUp = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [
    createUserWithEmailAndPassword,
    signUpUser,
    signUpLoading,
    signUpError,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();

  // for react hook form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // for react hook form

  let signUpErrorMessage;

  if (signUpLoading || googleLoading || updating) {
    return <Loading></Loading>;
  }

  if (googleError || signUpError || updateError) {
    signUpError = (
      <p className="text-red-600">
        <small>
          {googleError?.message || signUpError?.message || updateError.message}
        </small>
      </p>
    );
  }

  if (signUpUser || googleUser) {
    console.log(signUpUser || googleUser);
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);

    await updateProfile({ displayName: data.name });

    console.log("profile updated");
    navigate("/appointment");
  };
  return (
    <div className="flex justify-center items-center h-screen p-5">
      <div className="card lg:max-w-lg text-primary-content shadow-lg p-5 ">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Sign Up</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* name */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
          {/* name */}
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

          {signUpError}

          <input
            className="btn w-full max-w-xs text-white"
            type="submit"
            value="Sign Up"
          />
        </form>

        <p className="my-4">
          <small>
            Already have an account?{" "}
            <Link className="text-primary" to="/signup">
              Please Login
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

export default SignUp;
