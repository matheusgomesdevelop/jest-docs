import { ReactElement, ReactNode } from "react";

import Link from "next/link";

interface I_LinkTest {
  href: string;
  children: ReactNode;
}

export const LinkTest = ({ href, children }: I_LinkTest): any => {
  return <Link href={href}>{children}</Link>;
};
