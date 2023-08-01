import "../globals.css";
import localFont from "@next/font/local";
import Header from "../header";
import Nav from "../nav-bar";

export const metadata = {
  title: "Portfolio and blog",
  description: "personal portfolio and blog generated with create next app",
};

const quattro = localFont({
  src: [
    {
      path: "../fonts/iAWriterQuattroS-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/iAWriterQuattroS-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/iAWriterQuattroS-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/iAWriterQuattroS-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${quattro.className} bg-gradient-to-b from-bathys1 to-abyss1 min-h-screen`}
      lang="en"
    >
      <body className="bg-no-repeat bg-spectrum bg-top min-h-screen">
        <Nav />
        <Header />
        <div className="sm:px-8">
          <div className="mx-auto max-w-5xl lg:px-12">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto mb-12 max-w-2xl lg:max-w-5xl">
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
