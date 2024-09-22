import GlobalStyles from "@/Styles/GlobalStyles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Task Flow",
  description: "Todo List",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <GlobalStyles />
        {children}
      </body>
    </html>
  );
}
