import Link from "next/link";
import {
  Bell,
  Menu,
  MessageSquare,
  MoreVertical,
  Search,
  User,
} from "lucide-react";
import { Input } from "@workspace/ui/components/input";
import { Button } from "@workspace/ui/components/button";

interface LibraryNavProps {
  onMenuClick: () => void;
}

export function LibraryNav({ onMenuClick }: LibraryNavProps) {
  return (
    <header className="flex h-20 items-center gap-4 border-b px-4 md:px-6">
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={onMenuClick}
      >
        <Menu className="h-5 w-5" />
      </Button>
      <div className="h-full border-r flex justify-center items-center pr-6">
        <Link href="/" className="font-semibold heading text-2xl">
          Shelfie
        </Link>
      </div>
      <div className="relative hidden flex-1 md:block mr-6">
        <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search for books, authors, shelves, users..."
          className="pl-8 h-20 border-none ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
        />
      </div>
      <nav className="ml-auto hidden items-center gap-2 md:flex border-l h-full pl-6">
        <Button variant="text" className="text-gray-900">
          Library
        </Button>
        <Button variant="text" className="text-gray-400 hover:text-gray-900 transition-colors">
          Clubs
        </Button>
        <Button variant="text" className="text-gray-400 hover:text-gray-900 transition-colors">
          Explore
        </Button>
      </nav>
      <div className="flex items-center gap-2 border-l h-full pl-6">
        <Button size="icon" variant="text" className="hidden md:inline-flex">
          <MessageSquare className="h-6 w-6 text-gray-400 hover:text-gray-900 transition-colors" />
        </Button>
        <Button size="icon" variant="text" className="hidden md:inline-flex">
          <Bell className="h-6 w-6 text-gray-400 hover:text-gray-900 transition-colors" />
        </Button>
        <Button size="icon" variant="text" className="hidden md:inline-flex">
          <MoreVertical className="h-6 w-6 text-gray-400 hover:text-gray-900 transition-colors" />
        </Button>
        <Button size="icon" variant="text" className="hidden md:inline-flex">
          <User className="h-6 w-6 text-gray-400 hover:text-gray-900 transition-colors" />
        </Button>
      </div>
    </header>
  );
}
