import Link from "next/link";

export default function Header() {
  return (
    <>
      <section className="flex justify-between items-center mb-20">
        <div>
          <Link href="/">
            <img className="w-20 rounded-full" src="/logo.jpg" />
          </Link>
        </div>
        <div className="flex gap-8">
          <Link href="/account">Account</Link>
          <Link href="/about">About</Link>
        </div>
      </section>
    </>
  );
}
