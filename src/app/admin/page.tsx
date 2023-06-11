import { prisma } from "@/db";

function getUsers() {
  return prisma.user.findMany();
}

export default async function Admin() {
  const users = await getUsers();
  return (
    <>
      <h1>Hello</h1>
      <ul className="pl-4">
        {users.map((user) => (
          <li key={user.id}>
            {user.name} {user.email}
          </li>
        ))}
      </ul>
    </>
  );
}
