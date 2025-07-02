import { useState } from "react";
import { Button } from "@/presentation/components/ui/button";
import { Minus, Plus } from "lucide-react";

export function Home() {
  const [count, setCount] = useState(0);

  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement;

    if (name === "plus") setCount((prev) => prev++);

    if (name === "minus" && count > 0) setCount((prev) => prev - 1);

    return;
  };

  return (
    <main>
      <section>
        <h1>Boilerplate Vite React TS</h1>

        <div>
          <Button name="plus" onClick={handleButton}>
            <Plus />
          </Button>
          <span>{count}</span>
          <Button name="minus" onClick={handleButton}>
            <Minus />
          </Button>
        </div>
      </section>
    </main>
  );
}
