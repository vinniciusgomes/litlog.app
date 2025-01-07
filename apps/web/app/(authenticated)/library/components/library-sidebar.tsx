import { Button } from "@workspace/ui/components/button";
import { ScrollArea } from "@workspace/ui/components/scroll-area";
import { BookMarked, ChevronDown, Download, List, Plus } from "lucide-react";

const shelves = [
  { name: "All books", icon: List, count: 2 },
  { name: "Want to read", icon: BookMarked, count: 0 },
  { name: "Currently reading", icon: BookMarked, count: 1 },
  { name: "Did not finish", icon: ChevronDown, count: 0 },
  { name: "Finished", icon: BookMarked, count: 1 },
];

export function LibrarySidebar() {
  return (
    <div className="h-full w-64 border-r">
      <ScrollArea className="h-full py-4">
        <div className="space-y-4 px-4">
          <div className="space-y-1">
            {shelves.map((shelf) => (
              <Button
                key={shelf.name}
                variant="ghost"
                className="w-full justify-between"
              >
                <div className="flex items-center gap-2">
                  <shelf.icon className="h-4 w-4" />
                  <span>{shelf.name}</span>
                </div>
                <span className="text-muted-foreground">{shelf.count}</span>
              </Button>
            ))}
          </div>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Plus className="h-4 w-4" />
            Create shelf
          </Button>
          <div className="pt-4">
            <Button variant="outline" className="w-full justify-start gap-2">
              <Download className="h-4 w-4" />
              Import your library
            </Button>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
