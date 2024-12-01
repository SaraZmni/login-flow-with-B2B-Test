import Link from "next/link";

export default function LoginPage() {
  return (
    <div>
      <h1 className="mb-4 text-center text-xl">Login</h1>
      <form className="space-y-6">
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" />
        </div>
        <button className="w-full bg-black px-3 py-2 text-white">Login</button>
        <p>
          {`Don't have an account? `}
          <Link className="underline hover:opacity-60" href="/register">
            Register for one!
          </Link>
        </p>
      </form>
    </div>
  );
}
