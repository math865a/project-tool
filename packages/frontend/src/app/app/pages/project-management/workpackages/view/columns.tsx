import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { ActionIcon, Group, Text, Tooltip } from "@mantine/core";
import { IconLink, IconPencil, IconTrash } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import React from "react";
import { WorkpackageViewRow } from "@shared";
import { Identity, LinkWrapper, Tag } from "@libs/design";
import { getAvatarName } from "@libs/util";

const { accessor, display } = createColumnHelper<WorkpackageViewRow>();

export const workpackagesColumns: ColumnDef<WorkpackageViewRow, any>[] = [
    display({
        id: "actions",
        size: 100,
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
                        to={`/workpackages/edit/${row.original.id}`}
                    >
                        <IconPencil size={16} />
                    </ActionIcon>
                </Tooltip>
                <Tooltip label={"Gå til"}>
                    <ActionIcon
                        component={Link}
                        to={`/workpackages/${row.original.id}`}
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
    accessor("node.systematicName", {
        cell: (props) => <Text>{props.row.original.node.systematicName}</Text>,
        meta: {
            title: "Systematisk navn",
            align: "center",
        },
    }),
    accessor("contract", {
        cell: (props) => (
            <LinkWrapper to={`/contracts/${props.row.original.contract.id}`}>
                <Text>{props.row.original.contract.name}</Text>
            </LinkWrapper>
        ),
        meta: {
            title: "Kontrakt",
            align: "center",
        },
    }),
    accessor("financialSource", {
        cell: (props) => (
            <LinkWrapper
                to={`/financialSources/${props.row.original.financialSource.id}`}
            >
                <Text>{props.row.original.financialSource.name}</Text>
            </LinkWrapper>
        ),
        meta: {
            title: "Finanskilde",
            align: "center",
        },
    }),
    accessor("projectManager", {
        cell: (props) => (
            <LinkWrapper
                to={`/project-managers/${props.row.original.projectManager.id}`}
            >
                <Identity
                    avatar={{
                        color: props.row.original.projectManager.color,
                        text: getAvatarName(
                            props.row.original.projectManager.name,
                        ),
                    }}
                    name={props.row.original.projectManager.name}
                />
            </LinkWrapper>
        ),
        meta: {
            title: "Projektleder",
            align: "center",
        },
    }),
    accessor("plan.startDate", {
        cell: (props) => <Text>{props.row.original.plan.startDate}</Text>,
        meta: {
            title: "Startdato",
            align: "center",
        },
    }),
    accessor("plan.endDate", {
        cell: (props) => <Text>{props.row.original.plan.endDate}</Text>,
        meta: {
            title: "Slutdato",
            align: "center",
        },
    }),
    accessor("stage", {
        cell: (props) => (
            <Tag color={props.row.original.stage.color}>
                {props.row.original.stage.name}
            </Tag>
        ),
        meta: {
            title: "Stadie",
            align: "center",
        },
    }),
    accessor("bookingStage", {
        cell: (props) => (
            <Tag color={props.row.original.bookingStage.color}>
                {props.row.original.bookingStage.name}
            </Tag>
        ),
        meta: {
            title: "Booking-stadie",
            align: "center",
        },
    }),
];
