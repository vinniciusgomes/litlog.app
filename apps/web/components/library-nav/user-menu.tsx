import { useAuth } from "@clerk/nextjs";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@workspace/ui/components/dropdown-menu";
import {
  LogOut,
  MessageCircle,
  Settings,
  Target,
  UserCircle,
} from "lucide-react";
import Link from "next/link";

export const UserMenu = () => {
  const { signOut } = useAuth();

  return (
    <DropdownMenuContent align="end" className="w-56">
      <Link href="/settings">
        <DropdownMenuItem>
          <UserCircle className="mr-2 h-4 w-4" />
          <span>View profile</span>
        </DropdownMenuItem>
      </Link>
      <Link href="/goals">
        <DropdownMenuItem>
          <Target className="mr-2 h-4 w-4" />
          <span>Goals</span>
        </DropdownMenuItem>
      </Link>
      <Link href="/settings">
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
      </Link>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <MessageCircle className="mr-2 h-4 w-4" />
        <span>Feedback</span>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => signOut()} className="cursor-pointer text-destructive">
        <LogOut className="mr-2 h-4 w-4" />
        <span>Log out</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
};
