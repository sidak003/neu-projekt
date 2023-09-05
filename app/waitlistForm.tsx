"use client";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";

export default function WaitlistForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const email = getValues("email");
    const res = await fetch("/api/joinWaitlist", {
      method: "POST",
      body: JSON.stringify({
        email: email,
      }),
    });
    if (!res.ok) {
      alert("Email not submitted, please try again");
      return;
    }
    alert("Thanks for joining our Waitlist");
    reset();
  };

  return (
    <form
      className="mt-8 flex flex-col gap-4 md:mt-12 md:flex-row md:gap-12"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        {...register("email", {
          required: "Email is required",
          minLength: 5,
          maxLength: 128,
        })}
        className="rounded border-2 border-text-100 px-4 py-3 text-text-75 shadow-drop outline-0 md:px-6 md:py-4 md:text-h5"
        type="email"
        placeholder="Enter your email..."
      ></input>
      <button
        className="rounded border-2 border-text-100 bg-red-fire px-4 py-3 text-center font-bold shadow-drop transition-all hover:bg-yellow-fire active:translate-x-0.5 active:translate-y-0.5 active:shadow-none disabled:bg-red-pastel md:px-6 md:py-4 md:text-left md:text-h5"
        disabled={isSubmitting}
      >
        Join Waitlist
      </button>
    </form>
  );
}
