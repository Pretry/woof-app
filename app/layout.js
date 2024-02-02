import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
