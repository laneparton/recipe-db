import type { MetaFunction } from "@remix-run/node";
import { RecipeTable } from "~/components/recipe-table";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <RecipeTable />
    </div>
  );
}
