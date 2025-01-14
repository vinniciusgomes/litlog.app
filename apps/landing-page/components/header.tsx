"use client";

import { useState } from "react";
import { Button } from "@workspace/ui/components/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="border-b border-border sticky top-0 z-50 bg-background">
      <div className="flex items-center justify-between h-20">
        <div className="flex-shrink-0 px-4 sm:px-10">
          <p className="text-2xl heading">Shelfie</p>
        </div>
        <div className="hidden md:flex items-center">
          <Button
            className="h-20 px-8 border-l text-gray-500 hover:text-gray-900 transition-colors"
            variant="text"
          >
            About
          </Button>
          <Button
            className="h-20 px-8 border-l text-gray-500 hover:text-gray-900 transition-colors"
            variant="text"
          >
            Sign in
          </Button>
          <Button className="h-20 px-10" variant="brand">
            Join <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="md:hidden px-4">
          <Button
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
            variant="text"
            className="p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border z-50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: 0.1 }}
              >
                <Button
                  className="w-full text-left px-4 py-2 text-gray-500 hover:text-gray-900 transition-colors"
                  variant="text"
                >
                  About
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: 0.2 }}
              >
                <Button
                  className="w-full text-left px-4 py-2 text-gray-500 hover:text-gray-900 transition-colors"
                  variant="text"
                >
                  Sign in
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: 0.3 }}
              >
                <Button className="w-full px-4 py-2">
                  Join <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
