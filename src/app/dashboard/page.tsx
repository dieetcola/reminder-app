import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "../../../lib/prisma";

export default function Dashboard() {
  return (
    <div className="container">
      <div className="card start-hero">
        <p className="text-body-2 start-hero-intro">Woohoo!</p>
        <p className="text-display-2">
          Your authentication is all sorted.
          <br />
          Build the important stuff.
        </p>
      </div>
      <section className="next-steps-section">
        <h2 className="text-heading-1">Next steps for you</h2>
      </section>
      <CollectionList />
    </div>
  );
}

async function CollectionList() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const collections = await prisma.collection.findMany({
    where: {
      userId: user?.id,
    },
  });

  if (collections.length === 0) {
    return (
      <div className="flex flex-col gap-5">
        <p>There are no collections yet!</p>
        <p>Create a collection to get started</p>
      </div>
    );
  }
}
