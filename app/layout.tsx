import 'styles/global.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Next v15 Practice</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
