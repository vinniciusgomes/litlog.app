"use client"

import {motion} from "framer-motion"
import {Button} from "@workspace/ui/components/button"
import {Input} from "@workspace/ui/components/input"
import {Label} from "@workspace/ui/components/label"
import {type FormEvent, useState} from "react"
import {SearchResults} from "./components/search-results"
import {fetchBooks} from "@/services/google/books-api";
import {GoogleBookItem} from "@/services/google/types";

export default function AddBookPage() {
  const [isSearching, setIsSearching] = useState(false)
  const [results, setResults] = useState<GoogleBookItem[]>([])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const query = formData.get("title") as string

    if (!query) return

    setIsSearching(true)
    try {
      const searchResults = await fetchBooks(query)
      setResults(searchResults)
    } catch (error) {
      console.error("Search failed:", error)
    } finally {
      setIsSearching(false)
    }
  }

  return (
      <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} className="min-h-screen p-4 md:p-8">
        <div className="mx-auto max-w-4xl pt-8 pb-24">
          <div className="mb-8">
            <h1 className="text-3xl heading font-bold tracking-tight">Find a book</h1>
            <p className="text-muted-foreground mt-2">Search for a book by title.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4 w-full">
                <div className="space-y-2 w-full">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" name="title" required />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button type="submit" className="w-full sm:w-auto sm:min-w-52">
                  Search book
                </Button>
              </div>
            </div>
          </form>

          <div className="mt-8">
            <SearchResults results={results} isLoading={isSearching} />
          </div>
        </div>
      </motion.div>
  )
}

