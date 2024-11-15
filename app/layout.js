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
          <Container
            pt={4}
            maxW="100vw"
            width="container.xl"
            maxH="100vh"
            p={2}
            display={"flex"}
            justifyContent={"center"}
          >
            {children}
          </Container>
        </Provider>
      </body>
    </html>
  );
}
