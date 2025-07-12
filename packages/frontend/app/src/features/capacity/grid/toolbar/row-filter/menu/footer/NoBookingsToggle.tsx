import { Box, FormControlLabel, Checkbox } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useBoard } from "~/src/features/capacity/_provider";
import RowFilter from "../../index";

const NoBookingToggle = observer(() => {
    const {
        Filter: { RowFilter },
    } = useBoard();

    return (
        <Box>
            <FormControlLabel
                label="Vis rækker uden bookinger"
                sx={{
                    "& .MuiTypography-root": { fontSize: 12 },
                }}
                control={
                    <Checkbox
                        size="small"
                        checked={RowFilter.showRowsWithoutBookings}
                        value={RowFilter.showRowsWithoutBookings}
                        onChange={(event, checked) =>
                            RowFilter.updateShowRowsWithoutBookings(checked)
                        }
                    />
                }
            />
        </Box>
    );
});

export default NoBookingToggle;
