import { prisma } from "@/db";

function getUsers() {
  return prisma.user.findMany();
}

export default async function Admin() {
  const users = await getUsers();

  async function deleteUsers() {
    await prisma.user.deleteMany({});
  }

  return (
    <>
      <h1>Hello</h1>
      <ul className="pl-4">
        <li>Name - Email</li>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </>
  );
}
