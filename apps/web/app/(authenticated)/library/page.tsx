"use client";

import { Grid, List, Search } from "lucide-react";
import { LibrarySidebar } from "./components/library-sidebar";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import { Input } from "@workspace/ui/components/input";
import { Button } from "@workspace/ui/components/button";
import { BookCard } from "./components/book-card";
import { useState } from "react";
import { Sheet, SheetContent } from "@workspace/ui/components/sheet";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group";

const books = [
  {
    id: 1,
    title: "O peso da glória",
    author: "C. S. Lewis",
    cover: "https://m.media-amazon.com/images/I/91VlF54YAlL._SL1500_.jpg",
    status: "finished",
  },
  {
    id: 1,
    title: "O peso da glória",
    author: "C. S. Lewis",
    cover: "https://m.media-amazon.com/images/I/91VlF54YAlL._SL1500_.jpg",
    status: "finished",
  },
  {
    id: 1,
    title: "O peso da glória",
    author: "C. S. Lewis",
    cover: "https://m.media-amazon.com/images/I/91VlF54YAlL._SL1500_.jpg",
    status: "finished",
  },
  {
    id: 1,
    title: "O peso da glória",
    author: "C. S. Lewis",
    cover: "https://m.media-amazon.com/images/I/91VlF54YAlL._SL1500_.jpg",
    status: "finished",
  },
];

export default function LibraryPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="flex flex-1 overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <LibrarySidebar />
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <LibrarySidebar />
        </SheetContent>
      </Sheet>

      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <Tabs defaultValue="books">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <TabsList className="w-full sm:w-auto">
              <TabsTrigger value="books">Books</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="highlights">Highlights</TabsTrigger>
            </TabsList>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search in library..."
                  className="pl-8 h-12 md:w-80"
                />
              </div>
              <Button className="sm:w-auto h-12">Add book</Button>
            </div>
          </div>
          <TabsContent value="books" className="space-y-4">
            <div className="flex items-center justify-end">
              <ToggleGroup
                type="single"
                value={viewMode}
                onValueChange={(value) => setViewMode(value as "grid" | "list")}
              >
                <ToggleGroupItem value="grid" aria-label="Grid view">
                  <Grid className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="list" aria-label="List view">
                  <List className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div
              className={
                viewMode === "grid"
                  ? "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
                  : "space-y-4"
              }
            >
              {books.map((book, index) => (
                <BookCard key={book.id} index={index} book={book} viewMode={viewMode} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
