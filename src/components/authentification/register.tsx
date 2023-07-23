import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function Register() {
  async function createUser(data: FormData) {
    "use server";

    const name = data.get("user-name")?.valueOf();
    const email = data.get("user-email")?.valueOf();
    const password = data.get("user-password")?.valueOf();

    if (typeof name !== "string" || name.length === 0) {
      alert("Please enter a valid Name");
      throw new Error("Invalid Name");
    }

    if (typeof email !== "string" || email.length === 0) {
      throw new Error("Invalid Email");
    }

    if (typeof password !== "string" || password.length === 0) {
      throw new Error("Invalid Password");
    }
    await prisma.user.create({ data: { name, email } });
    redirect("/select-home");
  }

  return (
    <div>
      <h2 className="text-4xl mb-4">Create your account</h2>
      <form action={createUser} className="flex gap-4 flex-col">
        <div>
          <p className="mb-2">Enter your name</p>
          <input
            type="text"
            name="user-name"
            placeholder="Enter your name"
            className="w-full	border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-width:border-slate-100"
          />
        </div>
        <div>
          <p className="mb-2">Enter your email</p>
          <input
            type="email"
            name="user-email"
            placeholder="Enter your email"
            className="w-full	border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-width:border-slate-100"
          />
        </div>
        <div>
          <p className="mb-2">Enter your password (at least 12 caracthers)</p>
          <input
            type="password"
            placeholder="Enter a password"
            name="user-password"
            minLength={12}
            pattern="[a-z0-9]{1,15}"
            title="Password should be digits (0 to 9) or alphabets (a to z)."
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
