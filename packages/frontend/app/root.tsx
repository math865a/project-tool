import { withEmotionCache } from "@emotion/react";

import {
    Box,
    Typography,
    unstable_useEnhancedEffect as useEnhancedEffect,
} from "@mui/material";
import { LicenseInfo } from "@mui/x-data-grid-pro";
import { json, MetaFunction } from "@remix-run/node";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import { ClientStylesContext, theme } from "mui-config";
import * as React from "react";
//import calendarStyles from "react-big-calendar/lib/css/react-big-calendar.css";
import { namespaces } from "./server";

//import styles from "./styles/scrollbar.css";

export function links() {
    return [
        {
            rel: "icon",
            href: "/favicon.png",
            type: "image/x-icon",
        },
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Poppins",
        },
        /*{
		   rel: "stylesheet",
		   href: styles,
	   },
	  {
		   rel: "stylesheet",
		   href: calendarStyles,
	   },**/
    ];
}

export const meta: MetaFunction = () => {
    return [
        {
            charset: "utf-8",
            title: "Project Tool",
            viewport: "width=device-width,initial-scale=1",
        },
    ];
};

LicenseInfo.setLicenseKey("**MISSING_LICENSE**");

interface DocumentProps {
    children: React.ReactNode;
    title?: string;
}

export async function loader() {
    return json(namespaces);
}

const Document = withEmotionCache(
    ({ children, title }: DocumentProps, emotionCache) => {
        const clientStyleData = React.useContext(ClientStylesContext);
        // Only executed on client
        useEnhancedEffect(() => {
            // re-link sheet container
            emotionCache.sheet.container = document.head;
            // re-inject tags
            const tags = emotionCache.sheet.tags;
            emotionCache.sheet.flush();
            tags.forEach((tag) => {
                // eslint-disable-next-line no-underscore-dangle
                (emotionCache.sheet as any)._insertTag(tag);
            });
            // reset cache to reapply global styles
            clientStyleData.reset();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        return (
            <html lang="en">
                <head>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width,initial-scale=1"
                    />
                    <meta
                        name="theme-color"
                        content={theme.palette.primary.main}
                    />
                    {title ? <title>{title}</title> : null}
                    <Meta />
                    <Links />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                    <meta
                        name="emotion-insertion-point"
                        content="emotion-insertion-point"
                    />
                </head>
                <body>
                    {process.env.NODE_ENV === "development" && (
                        <LiveReload origin={"http://172.19.0.3"} port={8002} />
                    )}
                    {children}
                    <ScrollRestoration />
                    <Scripts />
                </body>
            </html>
        );
    }
);

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
export default function App() {
    return (
        <Document>
            <Outlet />
        </Document>
    );
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary({ error }: { error: Error }) {
    console.error(error);

    return (
        <Document title="Error!">
            <Box
                position="absolute"
                left={0}
                top={0}
                right={0}
                bottom={0}
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
            >
                <Typography
                    fontWeight="bold"
                    color="text.secondary"
                    fontSize={16}
                >
                    Der skete en fejl.
                </Typography>
            </Box>
        </Document>
    );
}


/*
import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
    },
    {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
    },
];

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}
*/