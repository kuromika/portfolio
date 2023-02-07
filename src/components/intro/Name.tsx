import { useEffect, useState } from "react";

type LinkedName = null | {
  name: string;
  next: null | LinkedName;
};

export const Name = () => {

  return (
    <h1 className="text-center text-2xl font-bold uppercase sm:text-left sm:text-3xl md:text-4xl lg:text-5xl">
      <span>Jean Alvarez</span>
      <span className="mt-3 block sm:ml-20">full-stack developer</span>
    </h1>
  );
};
