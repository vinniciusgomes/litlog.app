"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { Textarea } from "@workspace/ui/components/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Checkbox } from "@workspace/ui/components/checkbox";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@workspace/ui/components/alert-dialog";
import { Lock, Trash2, Upload } from "lucide-react";

export default function SettingsPage() {
  const [avatar, setAvatar] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen p-4 md:p-8"
    >
      <div className="mx-auto max-w-4xl pt-8 pb-24">
        <h1 className="text-3xl heading font-bold tracking-tight">Settings</h1>

        <Tabs defaultValue="profile" className="space-y-8 mt-4">
          <TabsList className="border-b w-full justify-start rounded-none h-auto p-0 bg-transparent">
            <TabsTrigger
              value="profile"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary shadow-none data-[state=active]:bg-transparent"
            >
              Profile
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              Notifications
            </TabsTrigger>
            <TabsTrigger
              value="advanced"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              Advanced
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-8">
            <div className="space-y-4">
              <div className="relative w-24 h-24 mx-auto">
                <div className="w-full h-full rounded-full border-2 border-dashed flex items-center justify-center overflow-hidden">
                  {avatar ? (
                    <motion.img
                      src={avatar}
                      alt="Profile"
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    />
                  ) : (
                    <Upload className="w-6 h-6 text-muted-foreground" />
                  )}
                </div>
                <input
                  aria-label="Upload avatar"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setAvatar(reader.result as string);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
              <p className="text-sm text-center text-muted-foreground">
                Click to add your photo
              </p>
            </div>

            <div className="grid gap-6">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="vinnicius" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="vinniciusgomes@outlook.com.br"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Gomes" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio (you can add links, too)</Label>
                <Textarea id="bio" />
              </div>

              <div className="space-y-2">
                <Label>
                  What languages do you speak? This impacts the results in your
                  book search.
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                    <SelectItem value="pt">Portuguese</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button type="submit" className="w-full sm:w-auto sm:min-w-52">
              Save changes
            </Button>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Push notifications</h2>
                <div className="space-y-4">
                  {[
                    "New followers",
                    "New comments on one of your activities",
                    "Somebody mentions you in a comment or post",
                    "Somebody discovered a book through you",
                  ].map((item) => (
                    <div key={item} className="flex items-center space-x-2">
                      <Checkbox
                        id={item.toLowerCase().replace(/\s+/g, "-")}
                        defaultChecked
                      />
                      <Label htmlFor={item.toLowerCase().replace(/\s+/g, "-")}>
                        {item}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Email</h2>
                <div className="space-y-4">
                  {[
                    "Newsletter with updates on everything Literal",
                    "Weekly personal digest",
                    "Getting started tips",
                    "New followers",
                    "New comments on one of your activities",
                    "Somebody mentions you in a comment or post",
                    "Somebody discovered a book through you",
                  ].map((item) => (
                    <div key={item} className="flex items-center space-x-2">
                      <Checkbox
                        id={item.toLowerCase().replace(/\s+/g, "-")}
                        defaultChecked
                      />
                      <Label htmlFor={item.toLowerCase().replace(/\s+/g, "-")}>
                        {item}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full sm:w-auto sm:min-w-52">
              Save changes
            </Button>
          </TabsContent>

          <TabsContent value="advanced" className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Password</h2>
                <p className="text-sm text-muted-foreground">
                  You will receive a link to reset your password in your email:
                  vinniciusgomes@outlook.com.br
                </p>
                <Button variant="outline" className="gap-2">
                  <Lock className="w-4 h-4" />
                  Set a new password
                </Button>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Clear library</h2>
                <p className="text-sm text-muted-foreground">
                  Pressing the button below deletes your books, highlights and
                  reviews from your library. It also resets your Goodreads
                  import.
                </p>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline">Clear library</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your books, highlights and reviews from your
                        library.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Clear library</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Close account</h2>
                <p className="text-sm text-muted-foreground">
                  Pressing the button below deletes your account and all data
                  connected to it.
                </p>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive" className="gap-2">
                      <Trash2 className="w-4 h-4" />
                      Delete Account
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Delete account</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
}
