import { DateTime as dt, Settings } from "luxon";
import { Fallback, Page } from "~/src/design-system";
import { useEvents } from "./useEvents";

import { Box, Divider } from "@mui/material";
import { useMemo } from "react";
import {
    Calendar as BigCalendar,
    luxonLocalizer,
    Views,
} from "react-big-calendar";

export function Calendar({ resourceId }: { resourceId: string }) {
    const { events, loadEvents, hasLoaded } = useEvents(resourceId);

    const handleRangeChange = (r: any) => {
        const range = r as unknown as { start: Date; end: Date };
        loadEvents(dt.fromJSDate(range.start), dt.fromJSDate(range.end));
    };

    const props = useMemo(() => {
        Settings.defaultZone = dt.local().zone;
        return {
            defaultDate: dt.now().toJSDate(),
            getNow: () => dt.now().toJSDate(),
            localizer: luxonLocalizer(dt, {
                firstDayOfWeek: 1,
            }),
        };
    }, []);

    return (
        <Page.SubLayout>
            <Divider />
            <Box flexGrow={1} pt={4} height={"80vh"}>
                {hasLoaded ? (
                    <BigCalendar
                        showAllEvents
                        onRangeChange={handleRangeChange}
                        events={events}
                        views={[Views.MONTH]}
                        {...props}
                    />
                ) : (
                    <Fallback.SectionLoading height="85vh" />
                )}
            </Box>
        </Page.SubLayout>
    );
}
