import type { ClientActionFunctionArgs } from "@remix-run/react";
import PocketBase from 'pocketbase';

export const clientAction = async ({
    request,
}: ClientActionFunctionArgs) => {
    const formData = await request.formData();

    console.log(request, formData)
    const recipe = await createRecipe(formData);

    return 'hi'
};

async function createRecipe(formData) {
    const pb = new PocketBase('http://127.0.0.1:8090');

    // example create data
    const data = {
        "name": "test",
        "url": "https://example.com",
        "macros": "JSON",
        "instructions": "test",
        "ingredients": "test",
        "author": "test",
        "cooking_time": "test",
        "slug": "test"
    };

    // const record = await pb.collection('recipes').create(data);
}