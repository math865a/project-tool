import {Modal, ModalProps} from "@mantine/core";
import {useLocation, useNavigate} from "react-router-dom";
import {useMemo} from "react";

interface PageModalProps extends Omit<ModalProps, "opened" | "onClose"> {
    children?: React.ReactNode;
}

export const usePageModalClose = (closeTo?: string) => {
    const navigate = useNavigate();
    const location = useLocation();

    const closeUrl = useMemo(() => {
        if (closeTo) {
            return closeTo;
        }
        /*Take location pathname and remove last part of the path*/
        const parts = location.pathname.split("/");
        parts.pop();
        return parts.join("/");
    }, [closeTo, location.pathname]);

    return () => {
        navigate(closeUrl);
    };
};

export function PageModal({children, ...rest}: PageModalProps) {
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const handleClose = () => {

        /*navigate to previous page*/


        const parts = pathname.split("/");
        parts.pop();
        const closeUrl = parts.join("/");
        navigate(closeUrl);
    };

    return (
        <Modal centered opened closeOnEscape onClose={handleClose} {...rest}>
            {children}
        </Modal>
    );
}
