/* eslint-disable @next/next/no-page-custom-font */
import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";
import {getClientConfig} from "./config/client";
import {type Metadata} from "next";

export const metadata: Metadata = {
    title: "Confucius - Your AI Chat Assistant",
    description: "Your personal AI Chat Bot.",
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 1,
    },
    themeColor: [
        {media: "(prefers-color-scheme: light)", color: "#fafafa"},
        {media: "(prefers-color-scheme: dark)", color: "#151515"},
    ],
    appleWebApp: {
        title: "Confucius - Your AI Chat Assistant",
        statusBarStyle: "default",
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
    <html lang="zh">
        <head>
            <meta name="config" content={JSON.stringify(getClientConfig())}/>
            <link rel="manifest" href="/site.webmanifest"></link>
            <script src="/serviceWorkerRegister.js" defer></script>
        </head>
        <body>{children}</body>
        </html>
    );
}
