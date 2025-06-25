export type Position = {
    x1: number;
    x2: number;
};
export type Coord = {
    x: number;
    w: number;
};
export type Delta = {
    dx: number;
    dw: number;
};
export type TimelineEventType = "move" | "resize-start" | "resize-end";

export interface HandlerArgs {
    dx: number;
    dy: number;
    x?: number;
    y?: number;
}

export type MouseTouchOrPointerEvent =
    | React.MouseEvent
    | React.TouchEvent
    | React.PointerEvent;

export interface UseDrag {
    isDragging: boolean;
    dragStart: (event: MouseTouchOrPointerEvent) => void;
    dragMove: (event: MouseTouchOrPointerEvent) => void;
    dragEnd: (event: MouseTouchOrPointerEvent) => void;
}
