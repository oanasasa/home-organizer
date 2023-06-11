import Header from "@/components/layout/header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <section>
        <h1 className="text-5xl leading-relaxed mb-10 max-w-xl">
          Design your dream home{" "}
          <span className="italic">that you deserve...</span>
        </h1>
        <p className="text-2xl mb-10">
          All-in-one Online Interior Design: Floor Planning, Modeling &
          Rendering
        </p>
        <div className="flex gap-8">
          <Link
            className="rounded-full bg-white px-4 py-2 text-black"
            href="/account"
          >
            See for yourself
          </Link>
          <Link
            className="rounded-full bg-transparent px-4 py-2 border"
            href="/about"
          >
            About
          </Link>
        </div>
      </section>
    </>
  );
}
