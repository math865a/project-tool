/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { RemixBrowser } from "@remix-run/react";
import React, { startTransition, StrictMode, useState } from "react";
import { hydrateRoot } from "react-dom/client";
import { ClientStylesContext, createEmotionCache, theme } from "mui-config";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterLuxon } from "@mui/x-date-pickers-pro/AdapterLuxon";

/*
if (typeof window !== "undefined") {
    // Ensure __remixRouter is available for HMR
    if (!window.__remixRouter) {
        window.__remixRouter = null;
    }
}*/

interface ClientCacheProviderProps {
    children: React.ReactNode;
}

function ClientCacheProvider({ children }: ClientCacheProviderProps) {
    const [cache, setCache] = useState(createEmotionCache());

    const clientStyleContextValue = React.useMemo(
        () => ({
            reset() {
                setCache(createEmotionCache());
            },
        }),
        []
    );

    return (
        <ClientStylesContext.Provider value={clientStyleContextValue}>
            <CacheProvider value={cache}>{children}</CacheProvider>
        </ClientStylesContext.Provider>
    );
}

// Configure MobX for development
if (process.env.NODE_ENV === "development") {
    const { configure } = await import("mobx");
    configure({
        enforceActions: "never",
        computedRequiresReaction: false,
        reactionRequiresObservable: false,
        observableRequiresReaction: false,
        disableErrorBoundaries: false,
    });
}
/*
startTransition(() => {
	hydrateRoot(document, <StrictMode><RemixBrowser/></StrictMode>)
})
*/
startTransition(() => {
    hydrateRoot(
        document,
        <StrictMode>
            <ClientCacheProvider>
                <ThemeProvider theme={theme}>
                    <LocalizationProvider
                        dateAdapter={AdapterLuxon}
                        adapterLocale="da"
                    >
                        <CssBaseline />
                        <RemixBrowser />
                    </LocalizationProvider>
                </ThemeProvider>
            </ClientCacheProvider>
        </StrictMode>
    );
});

/*
startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
    </StrictMode>
  );
});
*/
