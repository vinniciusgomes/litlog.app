"use client";

import Link from "next/link";
import {
  Bell,
  Menu,
  MessageSquare,
  MoreVertical,
  Search,
  User,
  Settings,
  LogOut,
  UserCircle,
  Target,
  UserPlus,
  MessageCircle,
  BookOpen,
  Diamond,
} from "lucide-react";
import { Input } from "@workspace/ui/components/input";
import { Button } from "@workspace/ui/components/button";
import { STRINGS } from "@/constants/strings";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import { UserMenu } from "./user-menu";

interface LibraryNavProps {
  // onMenuClick: () => void;
}

export function LibraryNav({}: LibraryNavProps) {
  return (
    <header className="flex h-20 items-center gap-4 border-b px-4 md:px-6 sticky top-0 bg-white z-50">
      {/* <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={onMenuClick}
      >
        <Menu className="h-5 w-5" />
      </Button> */}
      <div className="h-full border-r flex justify-center items-center pr-6">
        <Link href="/" className="font-semibold heading text-2xl">
          {STRINGS.appName}
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
        <Link href="/library">
          <Button variant="text" className="text-gray-900">
            Library
          </Button>
        </Link>
        <Link href="/goals">
          <Button
            variant="text"
            className="text-gray-400 hover:text-gray-900 transition-colors"
          >
            Goals
          </Button>
        </Link>
        <Link href="/explore">
          <Button
            variant="text"
            className="text-gray-400 hover:text-gray-900 transition-colors"
          >
            Explore
          </Button>
        </Link>
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size="icon"
              variant="text"
              className="hidden md:inline-flex rounded-full"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <UserMenu />
        </DropdownMenu>
      </div>
    </header>
  );
}
