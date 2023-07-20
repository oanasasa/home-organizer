import Login from "@/components/authentification/login";
import Register from "@/components/authentification/register";

export default function Account() {
  return (
    <>
      <section className="grid grid-cols-2 gap-28	">
        <Register />
        <Login />
      </section>
    </>
  );
}
