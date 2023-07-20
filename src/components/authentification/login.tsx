import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function Login() {
  async function authUser(data: FormData) {
    "use server";
    console.log("user already exists");
    const email = data.get("user-email")?.valueOf();
    const password = data.get("user-password")?.valueOf();

    console.log("pass: " + password);
    console.log("email: " + email);
  }

  return (
    <div>
      <h2 className="text-4xl mb-4">Sign in with your account</h2>
      <form action={authUser} className="flex gap-4 flex-col">
        <div>
          <p className="mb-2">Enter your email</p>
          <input
            type="email"
            name="user-email"
            placeholder="email"
            className="w-full	border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-width:border-slate-100"
          />
        </div>
        <div>
          <p className="mb-2">Enter your password</p>
          <input
            type="password"
            placeholder="password"
            name="user-password"
            className="w-full	border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-width:border-slate-100"
          />
        </div>
        <div className="flex flex-row gap-4 justify-end">
          <Link
            href=".."
            className="rounded-full bg-transparent px-4 py-2 border"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="rounded-full bg-white px-4 py-2 text-black"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
