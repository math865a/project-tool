import { createBrowserRouter } from 'react-router-dom';
import { Root } from './root.tsx';
import {
    addResourceAction,
    addResourceLoader,
    AddResourcePage,
    App,
    AppLayout,
    deleteResourceAction,
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
} from './app';

export const router = createBrowserRouter([
    {
        element: <Root />,
        children: [
            {
                path: 'api',
                children: [
                    {
                        path: 'resources',
                        children: [
                            {
                                path: 'delete/:resourceId',
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
                        path: '/',
                        element: <AppLayout />,
                        children: [
                            {
                                element: <PagesLayout />,
                                children: [
                                    {
                                        element: <ResourcesLayout />,
                                        handle: resourcesLayoutHandle,
                                        children: [
                                            {
                                                path: 'resources',
                                                element: <ResourcesViewPage />,
                                                loader: resourcesViewLoader,
                                                handle: resourcesViewHandle,
                                                children: [
                                                    {
                                                        path: 'add',
                                                        element: <AddResourcePage />,
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
                                                path: 'resourcetypes',
                                                element: <ResourceTypesViewPage />,
                                                loader: resourceTypesViewLoader,
                                                handle: resourceTypesViewHandle,
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
