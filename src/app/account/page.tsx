import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function Account() {
  async function createUser(data: FormData) {
    "use server";

    const name = data.get("username")?.valueOf();
    const email = data.get("useremail")?.valueOf();
    if (
      (typeof email !== "string" || email.length === 0) &&
      (typeof name !== "string" || name.length === 0)
    ) {
      throw new Error("Invalid Email");
    }

    await prisma.user.create({ data: { name, email } });
    redirect("/");
  }

  return (
    <>
      <section className="grid grid-cols-2 gap-28	">
        <div>
          <h2 className="text-4xl mb-4">Create your account</h2>
          <form action={createUser} className="flex gap-4 flex-col">
            <div>
              <p className="mb-2">Enter your name</p>
              <input
                type="text"
                name="username"
                placeholder="name"
                className="w-full	border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-width:border-slate-100"
              />
            </div>
            <div>
              <p className="mb-2">Enter your email</p>
              <input
                type="email"
                name="useremail"
                placeholder="email"
                className="w-full	border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-width:border-slate-100"
              />
            </div>
            <div>
              <p className="mb-2">Enter your password</p>
              <input
                type="password"
                placeholder="password"
                name="password"
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
      </section>
    </>
  );
}
