export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>UDigital</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
