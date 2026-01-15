import "./globals.css";

export const metadata = {
  title: "SaaS App",
  description: "Frontend Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
