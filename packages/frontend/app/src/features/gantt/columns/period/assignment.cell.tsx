import { Box, Menu, Typography } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid-pro";
import { Assignment } from "gantt-models";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Action, PickerDay } from "design";
import { IconCalendar } from "@tabler/icons-react";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro";
import { DateTime as dt } from "luxon/src/datetime";

export const AssignmentPeriodCell = observer(
    (props: GridRenderCellParams<Assignment>) => {
        const [isHovering, setIsHovering] = useState<boolean>(false);
        const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
        const open = Boolean(anchorEl);

        return (
            <>
                <Box
                    flexGrow={1}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    onMouseOver={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    <Typography fontSize={12} color="text.secondary">
                        {props.row.period}
                    </Typography>

                    {(isHovering || open) && (
                        <Action.Symbol
                            title="Vælg periode"
                            icon={IconCalendar}
                            onClick={(event) =>
                                setAnchorEl((prev) =>
                                    prev ? null : event.currentTarget
                                )
                            }
                        />
                    )}
                </Box>
                <Menu
                    open={open}
                    anchorEl={anchorEl}
                    onClose={() => setAnchorEl(null)}
                    anchorOrigin={{ horizontal: "right", vertical: "top" }}
                    transformOrigin={{ horizontal: "left", vertical: "top" }}
                    PaperProps={{
                        sx: {
                            backgroundColor: "#fff",
                            borderRadius: 4,
                            px: 1,
                        },
                    }}
                >
                    <Box>
                        <DateRangeCalendar<dt>
                            displayWeekNumber
                            value={[
                                props.row.Allocation.Interval.startDate,
                                props.row.Allocation.Interval.endDate,
                            ]}
                            onChange={
                                props.row.Allocation.handleDatePickerChange
                            }
                            minDate={props.row.Task.Interval.startDate}
                            maxDate={props.row.Task.Interval.endDate}
                            slots={{ day: PickerDay }}
                            sx={{
                                "& .MuiDateRangeCalendar-monthContainer": {
                                    px: 1,
                                    textTransform: "capitalize",
                                },
                            }}
                        />
                    </Box>
                </Menu>
            </>
        );
    }
);
