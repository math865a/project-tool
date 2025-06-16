import { useNavigate, useSubmit } from "react-router-dom";
import { PageModal } from "@libs/design";
import { useForm } from "@mantine/form";
import { CreateFinancialSourceDto } from "@shared";
import { toFormData } from "@libs/util";
import { Button, Group, Stack, TextInput } from "@mantine/core";

export function AddFinancialSourcePage() {
    return (
        <PageModal
            centered={false}
            withCloseButton={false}
            title={"Opret finanskilde"}
            size={"lg"}
        >
            <Component />
        </PageModal>
    );
}

function Component() {
    const navigate = useNavigate();

    const submit = useSubmit();

    const form = useForm<CreateFinancialSourceDto>({
        initialValues: {
            name: "",
        },
    });

    const handleSubmit = (values: CreateFinancialSourceDto) => {
        submit(toFormData({ data: JSON.stringify(values) }), {
            action: "/financialsources/add",
            method: "POST",
        });
    };

    return (
        <form onSubmit={form.onSubmit(handleSubmit)} style={{ width: "100%" }}>
            <Stack spacing={"lg"}>
                <TextInput
                    {...form.getInputProps("name")}
                    label={"Navn"}
                    required
                    autoFocus={true}
                />

                <Group mt={"md"} position={"right"} w={"100%"}>
                    <Button
                        type={"button"}
                        color={"red"}
                        size={"sm"}
                        onClick={() => navigate("/resources")}
                    >
                        Annullér
                    </Button>
                    <Button type={"submit"} variant={"filled"} size={"sm"}>
                        Tilføj finanskilde
                    </Button>
                </Group>
            </Stack>
        </form>
    );
}
