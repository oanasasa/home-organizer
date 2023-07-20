import { prisma } from "@/db";

function getUsers() {
  return prisma.user.findMany();
}

export default async function Admin() {
  const users = await getUsers();

  return (
    <>
      <ul className="pl-4">
        <li>Name - Email</li>
        {users.map((user) => (
          <div>
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          </div>
        ))}
      </ul>
    </>
  );
}
