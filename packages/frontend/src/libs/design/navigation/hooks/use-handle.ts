import { useMatches } from "react-router-dom";

export const useHandle = <T = any>(handle: string): T | undefined => {
    return useMatches()
        .filter((match) => Boolean(match?.handle?.[handle]))
        .map((match) =>
            typeof match?.handle?.[handle] === "function"
                ? match?.handle?.[handle](match.data)
                : match?.handle?.[handle],
        ) as T | undefined;
};

/*    const matches = useMatches();


    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const match = matches?.find((match) => match?.handle?.[handle] as T | undefined);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return match?.handle?.[handle] as T | undefined;*/
