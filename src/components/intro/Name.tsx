import { useEffect, useState } from "react";

type LinkedName = null | {
  name: string;
  next: null | LinkedName;
};

export const Name = () => {
  const [name, setName] = useState("Jean Alvarez");

  useEffect(() => {
    const first: LinkedName = { name: "Jean Alvarez", next: null };

    const second: LinkedName = { name: "Kuromika", next: first };

    first.next = second;

    let current: LinkedName = first;

    const interval = setInterval(() => {
      if (current) {
        setName(current.name);
        current = current.next;
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-center text-2xl font-bold uppercase sm:text-left sm:text-3xl md:text-4xl lg:text-5xl">
      <span aria-hidden="true" aria-label="Jean Alvarez">{name}</span>
      <span className="mt-3 block sm:ml-20">full-stack developer</span>
    </h1>
  );
};
