import * as yup from "yup";

export const schema = yup
    .object({
        name: yup.string().required(),
        initials: yup.string().required(),
        costDefault: yup.number().default(0),
        costOvertime: yup.number().default(0),
    })
    .required();
