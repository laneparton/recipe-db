import { useLoaderData } from "@remix-run/react";
import PocketBase from 'pocketbase';

import type { MetaFunction } from "@remix-run/node";
import type { ClientLoaderFunctionArgs } from "@remix-run/react";


// TODO(LANE): Can I pass a title in??
export const meta: MetaFunction = () => {
    return [
        { title: "Recipe Details" },
        { name: "description", content: "Welcome to Remix (SPA Mode)!" },
    ];
};

export async function clientLoader({
    request,
    params
}: ClientLoaderFunctionArgs) {
    console.log(params)
    const pb = new PocketBase('http://127.0.0.1:8090');

    const recipeData = await pb.collection('recipes').getFirstListItem(`slug="${params.slug}"`);

    return recipeData;
}

export default function RecipeDetails() {
    const { name, author, cooking_time, ingredients, instructions, macros, url } = useLoaderData<typeof clientLoader>();
    return (
        <div className="container mx-auto">
            <img
                alt="Recipe image"
                className="aspect-square rounded-md object-cover mb-6"
                height="500"
                src="https://placehold.co/500"
                width="500"
            />
            <section className="mb-12 gap-2 flex flex-col">
                <h1 className="text-5xl font-bold">{name}</h1>
                <p>
                    <span className="font-bold">Author: </span>{author}
                </p>
                <p>
                    <span className="font-bold">Website: </span><a href={url} className="text-blue-500">{url}</a>
                </p>
            </section>
            <section>
                <h2 className="text-3xl">Ingredients:</h2>
                <div className="prose" dangerouslySetInnerHTML={{ __html: ingredients }} />
            </section>
            <section>
                <h2 className="text-3xl">Instructions:</h2>
                <div className="prose" dangerouslySetInnerHTML={{ __html: instructions }} />
            </section>
        </div>
    );
}