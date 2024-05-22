"use client";
import React, { useState } from "react";
import { Collapsible, CollapsibleTrigger } from "./ui/collapsible";
import { Button } from "./ui/button";
import { CaretDownIcon, CaretUpIcon, TrashIcon } from "@radix-ui/react-icons";

import { Collection, Task } from "@prisma/client";
import { CollectionColor, CollectionColors } from "../../lib/constants";
import { cn } from "@/lib/utils";

interface Props {
  collection: Collection & {
    tasks: Task[];
  };
}
function CollectionCard({ collection }: Props) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button
            variant={"ghost"}
            className={cn(
              "flex w-full justify-between p-6",
              isOpen && "rounded-b-none",
              CollectionColors[collection.color as CollectionColor]
            )}
          >
            <span className="text-white font-bold">{collection.name}</span>
            {!isOpen && <CaretDownIcon className="h-6 w-6" />}
            {isOpen && <CaretUpIcon className="h-6 w-6" />}
          </Button>
        </CollapsibleTrigger>
      </Collapsible>
    </>
  );
}

export default CollectionCard;
