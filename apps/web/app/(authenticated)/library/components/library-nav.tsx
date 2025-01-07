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
    <header className="flex h-14 items-center gap-4 border-b px-4 md:px-6">
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={onMenuClick}
      >
        <Menu className="h-5 w-5" />
      </Button>
      <Link href="/" className="font-semibold heading text-2xl">
        Shelfie
      </Link>
      <div className="relative hidden flex-1 md:block">
        <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search for books, authors, shelves, users..."
          className="max-w-xs pl-8"
        />
      </div>
      <nav className="ml-auto hidden items-center gap-4 md:flex">
        <Button variant="ghost" size="sm">
          Home
        </Button>
        <Button variant="ghost" size="sm">
          Clubs
        </Button>
        <Button variant="ghost" size="sm">
          Explore
        </Button>
        <Button variant="ghost" size="sm">
          Library
        </Button>
      </nav>
      <div className="flex items-center gap-2">
        <Button size="icon" variant="ghost" className="hidden md:inline-flex">
          <MessageSquare className="h-5 w-5" />
        </Button>
        <Button size="icon" variant="ghost" className="hidden md:inline-flex">
          <Bell className="h-5 w-5" />
        </Button>
        <Button size="icon" variant="ghost">
          <MoreVertical className="h-5 w-5" />
        </Button>
        <Button size="icon" variant="ghost">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
