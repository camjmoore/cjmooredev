import "../globals.css";

export const metadata = {
  title: "sanity studio",
  description: "admin page for sanity content management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
