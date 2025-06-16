import { createBrowserRouter } from "react-router-dom";
import { Root } from "./root.tsx";
import {
    addContractAction,
    AddContractPage,
    addFinancialSourceAction,
    AddFinancialSourcePage,
    addResourceAction,
    addResourceLoader,
    AddResourcePage,
    addResourceTypeAction,
    addResourceTypeLoader,
    AddResourceTypePage,
    addWorkpackageAction,
    addWorkpackageLoader,
    AddWorkpackagePage,
    App,
    AppLayout,
    ContractsLayout,
    contractsLayoutHandle,
    contractsViewHandle,
    contractsViewLoader,
    ContractsViewPage,
    deleteResourceAction,
    FinancialSourcesLayout,
    financialSourcesLayoutHandle,
    financialSourcesViewHandle,
    financialSourcesViewLoader,
    FinancialSourcesViewPage,
    PagesLayout,
    ResourcesLayout,
    resourcesLayoutHandle,
    resourcesViewHandle,
    resourcesViewLoader,
    ResourcesViewPage,
    ResourceTypesLayout,
    resourceTypesLayoutHandle,
    resourceTypesViewHandle,
    resourceTypesViewLoader,
    ResourceTypesViewPage,
    WorkpackagesLayout,
    workpackagesLayoutHandle,
    workpackagesViewHandle,
    workpackagesViewLoader,
    WorkpackagesViewPage,
} from "./app";

export const router = createBrowserRouter([
    {
        element: <Root />,
        children: [
            {
                path: "api",
                children: [
                    {
                        path: "resources",
                        children: [
                            {
                                path: "delete/:resourceId",
                                action: deleteResourceAction,
                            },
                        ],
                    },
                ],
            },
            {
                element: <App />,
                children: [
                    {
                        path: "/",
                        element: <AppLayout />,
                        children: [
                            {
                                element: <PagesLayout />,
                                children: [
                                    {
                                        element: <WorkpackagesLayout />,
                                        handle: workpackagesLayoutHandle,
                                        children: [
                                            {
                                                path: "workpackages",
                                                element: (
                                                    <WorkpackagesViewPage />
                                                ),
                                                loader: workpackagesViewLoader,
                                                handle: workpackagesViewHandle,
                                                children: [
                                                    {
                                                        path: "add",
                                                        element: (
                                                            <AddWorkpackagePage />
                                                        ),
                                                        loader: addWorkpackageLoader,
                                                        action: addWorkpackageAction,
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        element: <ResourcesLayout />,
                                        handle: resourcesLayoutHandle,
                                        children: [
                                            {
                                                path: "resources",
                                                element: <ResourcesViewPage />,
                                                loader: resourcesViewLoader,
                                                handle: resourcesViewHandle,
                                                children: [
                                                    {
                                                        path: "add",
                                                        element: (
                                                            <AddResourcePage />
                                                        ),
                                                        loader: addResourceLoader,
                                                        action: addResourceAction,
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        element: <ResourceTypesLayout />,
                                        handle: resourceTypesLayoutHandle,
                                        children: [
                                            {
                                                path: "resourcetypes",
                                                element: (
                                                    <ResourceTypesViewPage />
                                                ),
                                                loader: resourceTypesViewLoader,
                                                handle: resourceTypesViewHandle,
                                                children: [
                                                    {
                                                        path: "add",
                                                        element: (
                                                            <AddResourceTypePage />
                                                        ),
                                                        loader: addResourceTypeLoader,
                                                        action: addResourceTypeAction,
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        element: <ContractsLayout />,
                                        handle: contractsLayoutHandle,
                                        children: [
                                            {
                                                path: "contracts",
                                                element: <ContractsViewPage />,
                                                loader: contractsViewLoader,
                                                handle: contractsViewHandle,
                                                children: [
                                                    {
                                                        path: "add",
                                                        element: (
                                                            <AddContractPage />
                                                        ),
                                                        action: addContractAction,
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        element: <FinancialSourcesLayout />,
                                        handle: financialSourcesLayoutHandle,
                                        children: [
                                            {
                                                path: "financialsources",
                                                element: (
                                                    <FinancialSourcesViewPage />
                                                ),
                                                loader: financialSourcesViewLoader,
                                                handle: financialSourcesViewHandle,
                                                children: [
                                                    {
                                                        path: "add",
                                                        element: (
                                                            <AddFinancialSourcePage />
                                                        ),
                                                        action: addFinancialSourceAction,
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
]);
