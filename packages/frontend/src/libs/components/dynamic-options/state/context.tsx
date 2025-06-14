import React, { createContext } from "react";
import { DynamicBag } from "../types.ts";

export const DynamicContext = createContext<DynamicBag | undefined>(undefined);
