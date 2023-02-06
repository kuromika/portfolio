import { PropsWithChildren } from "react";
import dynamic from "next/dynamic";

export const NoSSR = (props: PropsWithChildren) => <>{props.children}</>;

export default dynamic(() => Promise.resolve(NoSSR), { ssr: false });
