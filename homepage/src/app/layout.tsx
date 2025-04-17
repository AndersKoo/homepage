import type { Metadata } from "next";

export default function RootLayout({}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h2>test</h2>
      </body>
    </html>
  );
}
