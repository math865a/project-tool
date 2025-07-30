import { Box } from "@mui/material";
import { Assignment } from "gantt-models";
import { observer } from "mobx-react-lite";
import { ROW_HEIGHT } from "gantt/constants";
import Closures from "../shared/Closures";
import Bar from "./allocation/Bar";

export const AssignmentTimelineCell = observer(
    ({ Assignment }: { Assignment: Assignment }) => {
        return (
            <Box
                width="100%"
                minWidth="100%"
                maxWidth="100%"
                height={ROW_HEIGHT}
                position="relative"
            >
                <Closures />
                <RenderAllocations Assignment={Assignment} />
            </Box>
        );
    }
);

const RenderAllocations = observer(
    ({ Assignment }: { Assignment: Assignment }) => {
        return (
            <>
                {Assignment.Allocations.map((Allocation) => (
                    <>
                        <Bar Allocation={Allocation} key={Allocation.id} />
                    </>
                ))}
            </>
        );
    }
);
