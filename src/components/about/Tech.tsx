import Image from "next/image";

export const Tech = (props: {
  stack: { url: string; name: string }[];
  header: string;
}) => {
  return (
    <div className="flex gap-2">
      <h4 className="">{props.header}</h4>
      {props.stack.map((item) => {
        return (
          <div className="relative h-12 w-12" key={item.name}>
            <Image
              fill
              src={item.url}
              alt={item.name}
              title={item.name}
            ></Image>
          </div>
        );
      })}
    </div>
  );
};
