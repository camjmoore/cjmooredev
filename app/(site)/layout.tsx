import "../globals.css";
import Header from "../header";
import Nav from "../nav-bar";

export const metadata = {
  title: "Portfolio and blog",
  description: "personal portfolio and blog generated with create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className="bg-gradient-to-b from-[#001B26] to-slate-900 opacity-80 min-h-screen"
      lang="en"
    >
      <body className="bg-spectrum bg-bottom">
        <Nav />
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
