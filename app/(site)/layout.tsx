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
      className="bg-gradient-to-b from-[#001B26] to-slate-900 opacity-95 min-h-screen"
      lang="en"
    >
      <body className="bg-no-repeat bg-spectrum bg-top min-h-screen">
        <Nav />
        <Header />
        <div className="sm:px-8">
          <div className="mx-auto max-w-5xl lg:px-12">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
