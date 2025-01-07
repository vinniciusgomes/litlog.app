import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const books = [
    {
      id: 1,
      src: "https://placehold.co/100x150/png",
      alt: "Book 1",
      style: "left-[10%] top-[20%]",
    },
    {
      id: 2,
      src: "https://placehold.co/100x150/png",
      alt: "Book 2",
      style: "left-[25%] top-[10%]",
    },
    {
      id: 3,
      src: "https://placehold.co/100x150/png",
      alt: "Book 3",
      style: "left-[40%] top-[25%]",
    },
    {
      id: 4,
      src: "https://placehold.co/100x150/png",
      alt: "Book 4",
      style: "left-[55%] top-[15%]",
    },
    {
      id: 5,
      src: "https://placehold.co/100x150/png",
      alt: "Book 5",
      style: "left-[70%] top-[20%]",
    },
    {
      id: 6,
      src: "https://placehold.co/100x150/png",
      alt: "Book 6",
      style: "left-[85%] top-[25%]",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="heading text-3xl font-bold leading-relaxed text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl/none max-w-3xl">
            Take <span className="text-[#278458]">control</span> of your
            personal library
          </h1>
          <p className="mx-auto max-w-[560px] text-gray-900 mt-8">
            Track what you're reading, follow friends and join clubs to
            collectively explore the ideas of the world's greatest authors.
          </p>

          <div className="w-full space-y-4 mt-20">
            <form className="flex flex-col gap-2 w-full justify-center min-[400px]:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-80 flex-1 px-4 py-[14px] h-14"
              />
              <Button className="bg-[#278458] hover:bg-[#389e6e] h-14 text-white w-full">
                Get Early Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
            <p className="text-xs text-gray-500">
              Join the waitlist for early access. No spam, ever.
            </p>
          </div>
        </div>

        <div className="relative mt-16 h-[400px] w-full">
          {books.map((book) => (
            <div
              key={book.id}
              className={`absolute ${book.style} transform cursor-pointer transition-transform hover:scale-110 animate-float`}
              style={{ animationDelay: `${book.id * 0.2}s` }}
            >
              <Image
                src={book.src}
                alt={book.alt}
                width={100}
                height={150}
                className="rounded-md shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
