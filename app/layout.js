import localFont from "next/font/local";
import { Container } from "@chakra-ui/react";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Linea de Tiempo",
  description: "Generado por SIDI UNRaf",
};

import { Provider } from "@/components/provider";

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <Container maxW="container.xl" pt={4}>
            {children}
          </Container>
        </Provider>
      </body>
    </html>
  );
}
