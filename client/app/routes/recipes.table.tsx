import { RecipeTable } from "~/components/recipe-table";
import { useLoaderData } from "@remix-run/react";
import PocketBase from 'pocketbase';

import type { MetaFunction } from "@remix-run/node";
import type { ClientLoaderFunctionArgs } from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [
        { title: "New Remix SPA" },
        { name: "description", content: "Welcome to Remix (SPA Mode)!" },
    ];
};

export async function clientLoader({
    request,
}: ClientLoaderFunctionArgs) {
    const pb = new PocketBase('http://127.0.0.1:8090');

    const recipeData = await pb.collection('recipes').getFullList({
        sort: '-created',
    });

    return {
        recipeData
    };
}

export default function RecipesTable() {
    const data = useLoaderData<typeof clientLoader>(); // client data
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
            <RecipeTable recipes={data.recipeData} />
        </div>
    );
}