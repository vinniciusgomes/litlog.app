"use client"

import {motion} from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {Card, CardContent} from "@workspace/ui/components/card"
import {GoogleBookItem} from "@/services/google/types";
import {Button} from "@workspace/ui/components/button";

interface SearchResultsProps {
  results: GoogleBookItem[]
  isLoading?: boolean
}

export function SearchResults({results, isLoading}: SearchResultsProps) {
  if (isLoading) {
    return (
        <div>
          {[...Array(3)].map((_, i) => (
              <Card key={i} className="overflow-hidden border-b-0 last:border-b">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-12 bg-muted animate-pulse" />
                    <div className="space-y-2 flex-1">
                      <div className="h-4 w-3/4 bg-muted animate-pulse rounded" />
                      <div className="h-3 w-1/2 bg-muted animate-pulse rounded" />
                    </div>
                  </div>
                </CardContent>
              </Card>
          ))}
        </div>
    )
  }

  return (
      <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          className="space-y-2"
      >
        {results.map((book) => (
            <Link key={book.id} href={`/book/${book.id}`}>
              <Card className="overflow-hidden transition-colors hover:bg-muted/50 border-b-0 last:border-b">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-12 overflow-hidden rounded">
                      <Image
                          src={book.thumbnail || "/placeholder.svg"}
                          alt={book.title}
                          fill
                          className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{book.title}</h3>
                      <p className="text-sm text-muted-foreground">{book.authors.map(author => author).join(", ")}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
        ))}

        <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{delay: 0.2}}>
          <Card className="overflow-hidden transition-colors hover:bg-none mt-8">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">Can't find your book?</h3>
                  <p className="text-sm text-muted-foreground">Add it manually to your library</p>
                </div>
                <Link href="/book/create/manual">
                  <Button variant="outline">Add Manually</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
  )
}
