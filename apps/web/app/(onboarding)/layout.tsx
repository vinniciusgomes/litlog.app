export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="flex h-screen flex-col">{children}</main>;
}
