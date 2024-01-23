import { Link } from "@remix-run/react";
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "~/components/ui/dropdown-menu"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "~/components/ui/table"
import { RecipeCreate } from "./recipe-create";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "~/components/ui/dialog"

export function RecipeTable() {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
        <Link className="lg:hidden" href="#">
          <Package2Icon className="h-6 w-6" />
          <span className="sr-only">Home</span>
        </Link>
        <div className="w-full flex-1">
          <form>
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                placeholder="Search recipes..."
                type="search"
              />
            </div>
          </form>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
              size="icon"
              variant="ghost"
            >
              <img
                alt="Avatar"
                className="rounded-full"
                height="32"
                src="https://placehold.co/32"
                style={{
                  aspectRatio: "32/32",
                  objectFit: "cover",
                }}
                width="32"
              />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="flex items-center">
          <h1 className="font-semibold text-lg md:text-2xl">Recipes</h1>
          <Dialog>
            <DialogTrigger className="ml-auto" >
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
                <TableHead className="w-[80px]">Image</TableHead>
                <TableHead className="max-w-[150px]">Title</TableHead>
                <TableHead className="hidden md:table-cell">Ingredients</TableHead>
                <TableHead className="hidden md:table-cell">Instructions</TableHead>
                <TableHead>Cooking Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <img
                    alt="Recipe image"
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src="https://placehold.co/64"
                    width="64"
                  />
                </TableCell>
                <TableCell className="font-medium">Chicken Curry</TableCell>
                <TableCell className="hidden md:table-cell">Chicken, Curry Sauce, Rice, Vegetables</TableCell>
                <TableCell>Cook chicken in curry sauce. Add rice and vegetables.</TableCell>
                <TableCell>30 minutes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <img
                    alt="Recipe image"
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src="https://placehold.co/64"
                    width="64"
                  />
                </TableCell>
                <TableCell className="font-medium">Pasta Carbonara</TableCell>
                <TableCell className="hidden md:table-cell">Pasta, Eggs, Bacon, Parmesan Cheese</TableCell>
                <TableCell>Cook pasta. Add eggs, bacon, and Parmesan cheese.</TableCell>
                <TableCell>15 minutes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <img
                    alt="Recipe image"
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src="https://placehold.co/64"
                    width="64"
                  />
                </TableCell>
                <TableCell className="font-medium">Vegetable Soup</TableCell>
                <TableCell className="hidden md:table-cell">Vegetables, Broth, Spices</TableCell>
                <TableCell>Cook vegetables in broth. Add spices.</TableCell>
                <TableCell>45 minutes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <img
                    alt="Recipe image"
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src="https://placehold.co/64"
                    width="64"
                  />
                </TableCell>
                <TableCell className="font-medium">Chocolate Cake</TableCell>
                <TableCell className="hidden md:table-cell">Flour, Sugar, Cocoa Powder, Eggs, Milk</TableCell>
                <TableCell>Mix ingredients. Bake in oven.</TableCell>
                <TableCell>60 minutes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  )
}


function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
