import { useNavigate, useSubmit } from "react-router-dom";
import { PageModal } from "@libs/design";
import { useForm } from "@mantine/form";
import { CreateContractDto } from "@shared";
import { toFormData } from "@libs/util";
import { Button, Group, Stack, TextInput } from "@mantine/core";

export function AddContractPage() {
    return (
        <PageModal
            centered={false}
            withCloseButton={false}
            title={"Opret kontrakt"}
            size={"lg"}
        >
            <Component />
        </PageModal>
    );
}

function Component() {
    const navigate = useNavigate();

    const submit = useSubmit();

    const form = useForm<CreateContractDto>({
        initialValues: {
            name: "",
            abbrevation: "",
        },
    });

    const handleSubmit = (values: CreateContractDto) => {
        submit(toFormData({ data: JSON.stringify(values) }), {
            action: "/contracts/add",
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

                <TextInput
                    {...form.getInputProps("abbrevation")}
                    label={"Forkortelse"}
                    required
                    w={150}
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
                        Tilføj kontrakt
                    </Button>
                </Group>
            </Stack>
        </form>
    );
}
