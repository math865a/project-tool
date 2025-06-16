import { Await, useLoaderData, useNavigate, useSubmit } from "react-router-dom";

import { AddWorkpackageData } from "./loader.ts";
import { Suspense } from "react";
import { PageModal, SelectControl } from "@libs/design";
import { useForm } from "@mantine/form";
import { CreateWorkpackageDto, Option } from "@shared";
import { getAvatarName } from "@libs/util";
import {
    Button,
    Group,
    NumberInput,
    Stack,
    Textarea,
    TextInput,
} from "@mantine/core";
import { addWorkpackageAction } from "./action.ts";
import { DateInput } from "@mantine/dates";

export function AddWorkpackagePage() {
    const data = useLoaderData() as ReturnType<typeof addWorkpackageAction>;

    return (
        <PageModal
            centered={false}
            withCloseButton={false}
            title={"Opret arbejdspakke"}
            size={"lg"}
        >
            <Suspense fallback={<div>Loading...</div>}>
                <Await resolve={data}>
                    {(resolvedData) => <Component {...resolvedData} />}
                </Await>
            </Suspense>
        </PageModal>
    );
}

function Component(data: AddWorkpackageData) {
    const navigate = useNavigate();

    const submit = useSubmit();

    function getOnlyOneIfExists(data: Option[]) {
        if (data.length === 1) {
            return data[0].value;
        }
        return "";
    }

    const form = useForm<CreateWorkpackageDto>({
        initialValues: {
            name: "",
            description: "",
            serialNo: "",
            contract: getOnlyOneIfExists(data.contracts),
            financialSource: getOnlyOneIfExists(data.financialSources),
            projectManager: data.defaultProjectManagerId,
            stage: data.defaultStageId,
            startDate: "",
            endDate: "",
        },
    });

    const handleSubmit = (values: CreateWorkpackageDto) => {
        /*submit(toFormData({ data: JSON.stringify(values) }), {
			action: "/workpackages/add",
			method: "POST",
		});*/
        console.log(values);
    };

    const avatarName = getAvatarName(form.values.name);

    return (
        <form onSubmit={form.onSubmit(handleSubmit)} style={{ width: "100%" }}>
            <Stack spacing={"lg"}>
                <TextInput
                    {...form.getInputProps("name")}
                    label={"Navn"}
                    required
                    autoFocus={true}
                />

                <Textarea
                    {...form.getInputProps("description")}
                    label={"Beskrivelse"}
                    autosize={true}
                    minRows={3}
                    maxRows={6}
                />

                <SelectControl
                    data={data.contracts}
                    label={"Kontrakt"}
                    required={true}
                    {...form.getInputProps("contract")}
                />
                <SelectControl
                    data={data.financialSources}
                    label={"Finanskilde"}
                    required={true}
                    {...form.getInputProps("financialSource")}
                />

                <NumberInput
                    label={"Serienummer"}
                    rightSection={<></>}
                    required={true}
                    {...form.getInputProps("serialNo")}
                />

                <SelectControl
                    data={data.projectManagers}
                    label={"Projektleder"}
                    {...form.getInputProps("projectManager")}
                />

                <Group grow={true}>
                    <DateInput
                        {...form.getInputProps("startDate")}
                        label={"Startdato"}
                        valueFormat={"YYYY-MM-dd"}
                    />
                    <DateInput
                        {...form.getInputProps("endDate")}
                        label={"Slutdato"}
                        valueFormat={"YYYY-MM-dd"}
                    />
                </Group>

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
                        Tilføj arbejdspakke
                    </Button>
                </Group>
            </Stack>
        </form>
    );
}
