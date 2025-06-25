import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
/*
declare module "@remix-run/node" {
    interface Future {
        v3_singleFetch: true;
    }
}
*/
export default defineConfig({
    plugins: [
        remix({
            future: {
                v3_fetcherPersist: true,
                v3_relativeSplatPath: true,
                v3_throwAbortReason: true,
                v3_singleFetch: true,
                v3_lazyRouteDiscovery: true,
            },
            ignoredRouteFiles: [".*", "**/*.css", "**/*.test.{js,jsx,ts,tsx}"],
        }),
        tsconfigPaths({
            ignoreConfigErrors: true,
        }),
    ],

    server: {
        host: "0.0.0.0",
        port: 5173,
        hmr: {
            port: 5173,
            host: "localhost",
        },
    },
    ssr: {
        noExternal: [
            "remix-utils",
            "d3-color",
            "@visx/drag",
            "d3-interpolate",
            "query-string",
            "d3-format",
            "d3-scale-chromatic",
            "luxon",
            "mobx",
            "mobx-keystone",
        ],
    },
});
