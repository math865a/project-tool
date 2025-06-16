import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { ActionIcon, Group, Text, Tooltip } from "@mantine/core";
import { IconLink, IconPencil, IconTrash } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import React from "react";
import { FinancialSourceViewRow } from "@shared";

const { accessor, display } = createColumnHelper<FinancialSourceViewRow>();

export const financialSourcesColumns: ColumnDef<FinancialSourceViewRow, any>[] =
    [
        display({
            id: "actions",
            size: 80,
            cell: ({ row }) => (
                <Group>
                    <Tooltip label={"Slet"}>
                        <ActionIcon type={"submit"}>
                            <IconTrash size={16} />
                        </ActionIcon>
                    </Tooltip>
                    <Tooltip label={"Redigér"}>
                        <ActionIcon
                            component={Link}
                            to={`/financialsources/edit/${row.original.id}`}
                        >
                            <IconPencil size={16} />
                        </ActionIcon>
                    </Tooltip>
                    <Tooltip label={"Gå til"}>
                        <ActionIcon
                            component={Link}
                            to={`/financialsources/${row.original.id}`}
                        >
                            <IconLink size={16} />
                        </ActionIcon>
                    </Tooltip>
                </Group>
            ),
        }),
        accessor("node.name", {
            cell: (props) => <Text>{props.row.original.node.name}</Text>,
            meta: {
                title: "Navn",
            },
        }),
        accessor("workpackageCount", {
            cell: (props) => <Text>{props.row.original.workpackageCount}</Text>,
            meta: {
                title: "Antal arbejdspakker",
                align: "center",
            },
        }),
    ];
