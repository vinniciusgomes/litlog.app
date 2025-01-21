import type { BookStatus } from "@prisma/client";
import { Badge } from "@workspace/ui/components/badge";
import { BookMarked, BookX, Glasses, Pin } from "lucide-react";

export function bookStatusToBadge(status: BookStatus) {
  switch (status) {
    case "WANT_TO_READ":
      return (
        <Badge variant="default">
          <Pin className="mr-1 h-3 w-3" />
          Want to read
        </Badge>
      );
    case "READING":
      return (
        <Badge variant="default">
          <Glasses className="mr-1 h-3 w-3" />
          Reading
        </Badge>
      );
    case "DID_NOT_FINISH":
      return (
        <Badge variant="default">
          <BookX className="mr-1 h-3 w-3" />
          Did not finish
        </Badge>
      );
    case "FINISHED":
      return (
        <Badge variant="default">
          <BookMarked className="mr-1 h-3 w-3" />
          Read
        </Badge>
      );
  }
}
