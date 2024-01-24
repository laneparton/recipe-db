import { Button } from "~/components/ui/button"
import { useNavigate } from "@remix-run/react";
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "~/components/ui/table"
import { RecipeCreate } from "./recipe-create";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "~/components/ui/dialog"

export function RecipeTable({ recipes }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center mb-8">
        <h1 className="font-semibold text-lg md:text-2xl">Recipes</h1>
        <Dialog>
          <DialogTrigger asChild className="ml-auto" >
            <Button size="sm">
              Add recipe
            </Button>
          </DialogTrigger>
          <DialogContent>
            <RecipeCreate />
          </DialogContent>
        </Dialog>
      </div>
      <div className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Image</TableHead>
              <TableHead className="max-w-[150px]">Title</TableHead>
              <TableHead className="hidden md:table-cell">Author</TableHead>
              <TableHead className="hidden md:table-cell">Macros</TableHead>
              <TableHead>Cooking Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recipes.map(recipe => (
              <TableRow key={recipe.name} onClick={() => navigate('/recipe/' + recipe.slug)}>
                <TableCell>
                  <img
                    alt="Recipe image"
                    className="aspect-square rounded-md object-cover"
                    height="100"
                    src="https://placehold.co/100"
                    width="100"
                  />
                </TableCell>
                <TableCell className="font-medium">{recipe.name}</TableCell>
                <TableCell className="hidden md:table-cell">{recipe.author}</TableCell>
                <TableCell><span className="font-bold">P:</span> {recipe.macros.protein} / <span className="font-bold">F:</span> {recipe.macros.fat} / <span className="font-bold">C:</span> {recipe.macros.carbohydrates}</TableCell>
                <TableCell>{recipe.cooking_time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}