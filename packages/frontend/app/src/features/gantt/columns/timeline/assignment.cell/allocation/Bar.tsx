import { useDraggable } from "@dnd-kit/core";
import { Box } from "@mui/material";
import { useNavigate } from "@remix-run/react";
import { Allocation } from "gantt-models";
import { observer } from "mobx-react-lite";
import { Action, Subject } from "~/src/_definitions";
import { Can } from "~/src/session-user";
import BarContent from "./BarContent";
import { DailyWorkWarning } from "./DailyWorkWarning";

const Bar = observer(({ Allocation }: { Allocation: Allocation }) => {
    const {
        setNodeRef: dragRef,
        attributes,
        listeners,
        isDragging,
        setActivatorNodeRef,
    } = useDraggable({
        id: `draggable-${Allocation.id}`,
        data: {
            Allocation: Allocation,
        },
    });

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`${Allocation.id}`);
    };

    return (
        <Can I={Action.Write} a={Subject.Workpackages} passThrough>
            {(allowed) => (
                <Box
                    ref={dragRef}
                    /*style={{
                        transform: CSS.Translate.toString(
                            Allocation.Bar.transform
                        ),
                    }}*/
                    onDoubleClick={handleClick}
                    sx={{
                        position: "absolute",
                        left: Allocation.Bar.x1,
                        top: Allocation.Bar.y,
                        height: Allocation.Bar.h,
                        width: Allocation.Bar.w,
                        textDecoration: "none",
                        cursor: "pointer",
                    }}
                    onMouseEnter={() => Allocation.Bar.setIsHovering(true)}
                    onMouseLeave={() => Allocation.Bar.setIsHovering(false)}
                >
                    <DailyWorkWarning
                        Allocation={Allocation}
                        isDragging={isDragging}
                    />

                    {allowed && (
                        <>
                            <div
                                {...attributes}
                                {...listeners}
                                ref={setActivatorNodeRef}
                                className="resize-start"
                                style={{
                                    position: "absolute",
                                    height: Allocation.Bar.h,
                                    width: Math.min(
                                        25,
                                        Allocation.Bar.coord.w / 3
                                    ),
                                    left: 0,
                                    zIndex: 401,
                                }}
                            />
                            <div
                                {...attributes}
                                {...listeners}
                                ref={setActivatorNodeRef}
                                className="move"
                                style={{
                                    backgroundColor: "transparent",
                                    position: "absolute",
                                    left: 25,
                                    right: 25,
                                    height: Allocation.Bar.h,
                                    zIndex: 400,
                                }}
                            />

                            <div
                                {...attributes}
                                {...listeners}
                                ref={setActivatorNodeRef}
                                className="resize-end"
                                style={{
                                    position: "absolute",
                                    right: 0,
                                    height: Allocation.Bar.h,
                                    width: Math.min(
                                        25,
                                        Allocation.Bar.coord.w / 3
                                    ),
                                    zIndex: 401,
                                }}
                            />
                        </>
                    )}

                    <BarContent
                        Allocation={Allocation}
                        width={Allocation.Bar.coord.w}
                    />
                </Box>
            )}
        </Can>
    );
});

export default Bar;
