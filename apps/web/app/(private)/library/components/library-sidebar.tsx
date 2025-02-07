import { Button } from "@workspace/ui/components/button";
import { Dialog, DialogTrigger } from "@workspace/ui/components/dialog";
import { ScrollArea } from "@workspace/ui/components/scroll-area";
import {
  BookMarked,
  BookX,
  Download,
  Glasses,
  Library,
  Pin,
  Plus,
} from "lucide-react";

import { CreateShelfDialog } from "./create-shelf";

interface LibrarySidebarProps {
  libraryInfo: {
    allBooksLength: number;
    wantToReadLength: number;
    currentlyReadingLength: number;
    didNotFinishLength: number;
    finishedLength: number;
  };
}

export function LibrarySidebar({ libraryInfo }: LibrarySidebarProps) {
  const menuList = [
    { name: "All books", icon: Library, count: libraryInfo.allBooksLength },
    { name: "Want to read", icon: Pin, count: libraryInfo.wantToReadLength },
    {
      name: "Currently reading",
      icon: Glasses,
      count: libraryInfo.currentlyReadingLength,
    },
    {
      name: "Did not finish",
      icon: BookX,
      count: libraryInfo.didNotFinishLength,
    },
    { name: "Finished", icon: BookMarked, count: libraryInfo.finishedLength },
  ];

  return (
    <Dialog>
      <div className="h-full w-64 border-r">
        <ScrollArea className="h-full py-4">
          <div className="space-y-4 px-4">
            <div className="space-y-1">
              {menuList.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="w-full justify-between"
                >
                  <div className="flex items-center gap-2">
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </div>
                  <span className="text-muted-foreground">{item.count}</span>
                </Button>
              ))}
            </div>
            <DialogTrigger asChild>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Plus className="h-4 w-4" />
                Create shelf
              </Button>
            </DialogTrigger>
            <div className="pt-4">
              <Button variant="outline" className="w-full justify-start gap-2">
                <Download className="h-4 w-4" />
                Import your library
              </Button>
            </div>
          </div>
        </ScrollArea>
      </div>

      <CreateShelfDialog />
    </Dialog>
  );
}
