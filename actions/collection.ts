"use server";

import { prisma } from "../lib/prisma";
import { createCollectionSchemaType } from "../schema/createCollection";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function createCollection(form: createCollectionSchemaType) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    throw new Error("user not found");
  }

  return await prisma.collection.create({
    data: {
      userId: user.id,
      color: form.color,
      name: form.name,
    },
  });
}