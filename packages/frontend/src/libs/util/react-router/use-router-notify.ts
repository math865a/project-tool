import { Fetcher } from "react-router-dom";

import { useEffect, useState } from "react";
import { notifyResponse } from "../../design";
import { FormResponse } from "@shared";

export const useRouterNotify = (fetcher: Fetcher<FormResponse>) => {
    const [waiting, setWaiting] = useState<boolean>(false);

    useEffect(() => {
        if (waiting && fetcher.data && fetcher.state === "idle") {
            notifyResponse(fetcher.data);
            setWaiting(false);
        }
    }, [fetcher.data, fetcher.state, waiting]);

    useEffect(() => {
        if (fetcher.state === "submitting") {
            setWaiting(true);
        }
    }, [fetcher.state]);
};
