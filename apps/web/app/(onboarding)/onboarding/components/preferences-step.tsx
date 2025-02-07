import { Button } from "@workspace/ui/components/button";
import { Card, CardContent } from "@workspace/ui/components/card";
import { useState } from "react";

import { Genre } from "../types/onboarding";
import { genres } from "../utils/mock";

interface PreferencesStepProps {
  onNext: (preferences: Genre[]) => void;
}

export function PreferencesStep({ onNext }: PreferencesStepProps) {
  const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);

  const toggleGenre = (genre: Genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  return (
    <Card className="border-none">
      <CardContent className="py-6 px-0">
        <h2 className="text-2xl heading font-bold mb-4">
          Selecione seus gêneros favoritos
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {genres.map((genre) => (
            <Button
              key={genre}
              variant={selectedGenres.includes(genre) ? "default" : "outline"}
              onClick={() => toggleGenre(genre)}
              className="w-full"
            >
              {genre}
            </Button>
          ))}
        </div>
        <Button
          onClick={() => onNext(selectedGenres)}
          disabled={selectedGenres.length === 0}
          className="w-full"
        >
          Próximo
        </Button>
      </CardContent>
    </Card>
  );
}
