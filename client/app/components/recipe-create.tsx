import { Label } from "~/components/ui/label"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"
import { Button } from "~/components/ui/button"
import { Form } from "@remix-run/react";

export function RecipeCreate() {
  return (
    <div className="grid gap-4 md:gap-8">
      <h1 className="font-semibold text-lg md:text-2xl">Add New Recipe</h1>
      <Form className="grid gap-4 md:gap-6" method="post" action="/recipes/add" navigate={false} >
        <div className="grid gap-2">
          <Label htmlFor="title">Title</Label>
          <Input name="title" id="title" placeholder="Enter recipe title" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="ingredients">Ingredients</Label>
          <Textarea name="ingredients" id="ingredients" placeholder="Enter ingredients" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="instructions">Instructions</Label>
          <Textarea name="instructions" id="instructions" placeholder="Enter instructions" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="cooking-time">Cooking Time</Label>
          <Input name="cooking-time" id="cooking-time" placeholder="Enter cooking time" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="url">URL</Label>
          <Input name="url" id="url" placeholder="Enter web address" />
        </div>
        <Button className="ml-auto" size="sm">
          Add Recipe
        </Button>
      </Form>
    </div>
  )
}
