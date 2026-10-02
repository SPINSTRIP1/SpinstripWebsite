import type { ReactNode } from "react";
import "./careers.css";
import { CareersMotion } from "@/components/careers/careers-motion";

export default function CareersLayout({ children }: { children: ReactNode }) {
  return <><CareersMotion />{children}</>;
}
