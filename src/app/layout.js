import "./globals.css";

export const metadata = {
  title: "SaaS App | Banao",
  description: "Modern SaaS Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Removing hardcoded 'bg-white' from here allows 
          the globals.css variables to take over.
      */}
      <body className="antialiased selection:bg-blue-100 dark:selection:bg-blue-900">
        {children}
      </body>
    </html>
  );
}