"use client";

import { Button } from "@workspace/ui/components/button";
import { Card, CardContent } from "@workspace/ui/components/card";
import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs";
import { motion } from "framer-motion";
import { Shuffle, Sparkles } from "lucide-react";
import { useState } from "react";

import RecommendedBooks from "./components/recommended-books";
import SimilarReaders from "./components/similar-readers";
import TrendingBooks from "./components/trending-books";

export default function ExplorePage() {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <motion.h1
            className="text-4xl font-bold tracking-tight heading"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Explore
          </motion.h1>
          <Tabs defaultValue="all" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="fiction">Fiction</TabsTrigger>
              <TabsTrigger value="nonfiction">Non-Fiction</TabsTrigger>
              <TabsTrigger value="poetry">Poetry</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Recommended Section */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">
              Recommended for you
            </h2>
            <Button variant="ghost" size="sm">
              View all
            </Button>
          </div>
          <RecommendedBooks />
        </section>

        {/* Interactive Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="group relative overflow-hidden transition-colors hover:bg-accent">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Shuffle className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold">Feeling adventurous?</h3>
                  <p className="text-sm text-muted-foreground">
                    Jump to a random book
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="group relative overflow-hidden transition-colors hover:bg-accent">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold">
                    Don't know what to read next?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Let us pick for you
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trending Section */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">
              Trending with readers
            </h2>
            <Button variant="ghost" size="sm">
              View all
            </Button>
          </div>
          <TrendingBooks />
        </section>

        {/* Similar Readers Section */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">
              People with similar taste
            </h2>
            <Button variant="ghost" size="sm">
              View more
            </Button>
          </div>
          <SimilarReaders />
        </section>
      </div>
    </div>
  );
}
