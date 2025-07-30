import { Box, Menu, Stack, TextField, Typography } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid-pro";
import { Assignment } from "gantt-models";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Action, FormUI } from "design";
import { IconEdit } from "@tabler/icons-react";

export const AssignmentWorkCell = observer(
    (props: GridRenderCellParams<Assignment>) => {
        const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
        const open = Boolean(anchorEl);
        const [isHovering, setIsHovering] = useState<boolean>(false);

        const Assignment = props.row;
        const [defaultWork, setDefaultWork] = useState<number>(
            Assignment.Allocation.timesheet.defaultMinutes / 60
        );
        const [overtimeWork, setOvertimeWork] = useState<number>(
            Assignment.Allocation.timesheet.overtimeMinutes / 60
        );

        const handleChange = (field: string, value: string) => {
            const parsedValue = parseFloat(value);
            if (isNaN(parsedValue)) return;

            if (field === "defaultWork") {
                setDefaultWork(parsedValue);
            } else if (field === "overtimeWork") {
                setOvertimeWork(parsedValue);
            }
        };

        const handleClose = () => {
            Assignment.Allocation.updateTimesheet(defaultWork, overtimeWork);
            setAnchorEl(null);
            setIsHovering(false);
        };

        return (
            <>
                <Box
                    flexGrow={1}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography fontSize={12} color="text.secondary">
                            {props.row.workHours.total}
                        </Typography>
                        {(isHovering || open) && (
                            <Action.Symbol
                                title="Vælg arbejde"
                                iconSize={18}
                                icon={IconEdit}
                                onClick={(event) =>
                                    setAnchorEl((prev) =>
                                        prev ? null : event.currentTarget
                                    )
                                }
                            />
                        )}
                    </Stack>
                </Box>
                <Menu
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{ horizontal: "right", vertical: "top" }}
                    transformOrigin={{ horizontal: "left", vertical: "top" }}
                    PaperProps={{
                        sx: {
                            backgroundColor: "#fff",
                            borderRadius: 4,
                            px: 1,
                            pb: 2,
                        },
                    }}
                >
                    <Typography py={1} pl={1} fontWeight={"bold"}>
                        Arbejde
                    </Typography>
                    <Stack direction="row" alignItems="center" pl={2}>
                        <Stack direction={"row"} spacing={3}>
                            <FormUI.Label label="Timer" widthFrac={0.5}>
                                <TextField
                                    autoFocus={true}
                                    value={defaultWork}
                                    variant="standard"
                                    size="small"
                                    onChange={(event) =>
                                        handleChange(
                                            "defaultWork",
                                            event.target.value
                                        )
                                    }
                                    tabIndex={1}
                                />
                            </FormUI.Label>
                            <FormUI.Label
                                label="Overarbejde (t)"
                                widthFrac={0.5}
                            >
                                <TextField
                                    value={overtimeWork}
                                    onChange={(event) =>
                                        handleChange(
                                            "overtimeWork",
                                            event.target.value
                                        )
                                    }
                                    name="overtime"
                                    variant="standard"
                                    size="small"
                                    tabIndex={2}
                                />
                            </FormUI.Label>
                        </Stack>
                    </Stack>
                </Menu>
            </>
        );
    }
);
