import Image from "next/image";
import { Check } from "lucide-react";
import { Card, CardContent } from "@workspace/ui/components/card";
import { Badge } from "@workspace/ui/components/badge";
import Link from "next/link";
import { cn } from "@workspace/ui/lib/utils";
import { motion } from "framer-motion";

interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  status: string;
}

interface BookCardProps {
  index: number;
  book: Book;
  viewMode: "grid" | "list";
}

export function BookCard({ index, book, viewMode }: BookCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: index * 0.05,
      },
    },
  };

  // List View
  if (viewMode === "list") {
    return (
      <Link href={`/book/${book.id}`}>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Card
            className={cn(
              "overflow-hidden rounded-none",
              index % 2 === 0 ? "" : ""
            )}
          >
            <CardContent className="flex items-center p-4">
              <motion.div className="relative h-16 w-12 flex-shrink-0">
                <Image
                  src={book.cover}
                  alt={book.title}
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>
              <div className="ml-4 flex-grow">
                <motion.h3
                  className="font-semibold heading text-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {book.title}
                </motion.h3>
                <motion.p
                  className="text-sm text-muted-foreground italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {book.author}
                </motion.p>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <Badge
                  variant={book.status === "reading" ? "secondary" : "default"}
                >
                  <Check className="mr-1 h-3 w-3" />
                  {book.status === "reading" ? "Reading" : "Finished"}
                </Badge>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </Link>
    );
  }

  // Grid View
  return (
    <Link href={`/book/${book.id}`}>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        <Card className="overflow-hidden rounded-none border-none">
          <CardContent className="p-0">
            <motion.div className="relative aspect-[3/4] w-full">
              <Image
                src={book.cover}
                alt={book.title}
                layout="responsive"
                width={120}
                height={160}
                className="object-cover"
              />
              <motion.div
                className="absolute right-3 top-3"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Badge
                  variant={book.status === "reading" ? "secondary" : "default"}
                >
                  <Check className="mr-1 h-3 w-3" />
                  {book.status === "reading" ? "Reading" : "Finished"}
                </Badge>
              </motion.div>
            </motion.div>
            <motion.div
              className="py-3 px-0"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="line-clamp-1 font-semibold heading text-gray-700">
                {book.title}
              </h3>
              <p className="line-clamp-1 text-sm text-muted-foreground italic">
                {book.author}
              </p>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}
