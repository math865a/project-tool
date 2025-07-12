import { Box, Button } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useBoard } from "~/src/features/capacity/_provider";

const ClearFilterAction = observer(() => {
    const {
        Filter: { RowFilter },
    } = useBoard();
    return (
        <Box>
            {RowFilter.filterCount > 0 && (
                <Button
                    variant="text"
                    size="small"
                    onClick={RowFilter.clearFilter}
                >
                    Ryd filter
                </Button>
            )}
        </Box>
    );
});

export default ClearFilterAction;
