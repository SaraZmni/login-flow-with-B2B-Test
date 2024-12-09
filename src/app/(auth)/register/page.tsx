"use client";

import { useFormState } from "react-dom";
import Link from "next/link";
import { register } from "./_actions/register";

export default function RegisterPage() {
  const [state, formAction] = useFormState(register, null);

  return (
    <>
      <h1 className="mb-4 text-center text-xl">Register</h1>
      <form action={formAction} className="space-y-6">
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
          <p aria-live="polite">{state?.errors.email}</p>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" required />
          <p aria-live="polite">{state?.errors.password}</p>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
          />
          <p aria-live="polite">{state?.errors.confirmPassword}</p>
        </div>
        <button className="w-full bg-black px-3 py-2 text-white">
          Register
        </button>
        <p>
          {`Already have an account? `}
          <Link className="underline hover:opacity-60" href="/login">
            Login from here!
          </Link>
        </p>
      </form>
    </>
  );
}
