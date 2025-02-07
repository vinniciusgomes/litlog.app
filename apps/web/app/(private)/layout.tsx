import { LibraryNav } from "@/components/library-nav";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen flex-col">
      <LibraryNav />

      {children}
    </main>
  );
}
