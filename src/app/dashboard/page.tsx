import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "../../../lib/prisma";
import CreateButton from "@/components/create-button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import CollectionCard from "@/components/collection-card";

export default function Dashboard() {
  return (
    <div className="container">
      <CollectionList />
    </div>
  );
}

async function CollectionList() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const collections = await prisma.collection.findMany({
    include: {
      tasks: true,
    },
    where: {
      userId: user?.id,
    },
  });

  if (collections.length === 0) {
    return (
      <div className="flex flex-col gap-5">
        <Alert>
          <AlertTitle>There are no collections yet!</AlertTitle>
          <AlertDescription>
            Create a collection to get started
          </AlertDescription>
        </Alert>
        <CreateButton />
      </div>
    );
  }

  return (
    <>
      <CreateButton />{" "}
      <div className="flex flex-col gap-4 mt-6">
        {collections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
    </>
  );
}
