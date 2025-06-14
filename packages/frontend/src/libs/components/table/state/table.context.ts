import {createContext} from "react";
import {TableStoreApi} from "./types.ts";

export const TableContext = createContext<TableStoreApi | undefined>(undefined);