import { useNavigation } from "react-router-dom";
import { useMemo } from "react";

export const useNavigationType = () => {
    const navigation = useNavigation();

    // transition.type === "actionSubmission"
    let isActionSubmission = useMemo(
        () => navigation.state === "submitting",
        [navigation.state],
    );

    // transition.type === "actionReload"
    let isActionReload = useMemo(
        () =>
            navigation.state === "loading" &&
            navigation.formMethod != null &&
            navigation.formMethod != "get" &&
            // We had a submission navigation and are loading the submitted location
            navigation.formAction === navigation.location.pathname,
        [
            navigation.state,
            navigation.formMethod,
            navigation.formAction,
            navigation.location?.pathname,
        ],
    );

    // transition.type === "actionRedirect"
    let isActionRedirect = useMemo(
        () =>
            navigation.state === "loading" &&
            navigation.formMethod != null &&
            navigation.formMethod != "get" &&
            // We had a submission navigation and are now navigating to different location
            navigation.formAction !== navigation.location.pathname,
        [
            navigation.state,
            navigation.formMethod,
            navigation.formAction,
            navigation.location?.pathname,
        ],
    );

    // transition.type === "loaderSubmission"
    let isLoaderSubmission = useMemo(
        () =>
            navigation.state === "loading" &&
            navigation.formMethod === "get" &&
            // We had a loader submission and are navigating to the submitted location
            navigation.formAction === navigation.location.pathname,
        [
            navigation.state,
            navigation.formMethod,
            navigation.formAction,
            navigation.location?.pathname,
        ],
    );

    // transition.type === "loaderSubmissionRedirect"
    let isLoaderSubmissionRedirect = useMemo(
        () =>
            navigation.state === "loading" &&
            navigation.formMethod === "get" &&
            // We had a loader submission and are navigating to a new location
            navigation.formAction !== navigation.location.pathname,
        [
            navigation.state,
            navigation.formMethod,
            navigation.formAction,
            navigation.location?.pathname,
        ],
    );

    const transitionType = useMemo(() => {
        if (isActionSubmission) {
            return "actionSubmission";
        } else if (isActionRedirect) {
            return "actionRedirect";
        } else if (isLoaderSubmission) {
            return "loaderSubmission";
        } else if (isLoaderSubmissionRedirect) {
            return "loaderSubmissionRedirect";
        } else if (isActionReload) {
            return "actionReload";
        } else {
            return "initial";
        }
    }, [
        isActionRedirect,
        isActionSubmission,
        isLoaderSubmission,
        isLoaderSubmissionRedirect,
        isActionReload,
    ]);

    return transitionType;
};
