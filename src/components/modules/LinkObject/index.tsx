"use client";
import { handleAnchorClick } from "./logic";
import "./styles.scss";
import Link from "next/link";

export interface LinkObjectProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  "aria-label"?: string;
}

export const LinkObject = ({
  href,
  children,
  className,
  style,
  "aria-label": providedAriaLabel,
}: LinkObjectProps) => {
  const newTab = href.startsWith("http");

  // Auto-generate aria-label for simple string children, or use provided label
  const ariaLabel = providedAriaLabel
    ? providedAriaLabel
    : newTab && typeof children === "string"
      ? `${children} (opens in new tab)`
      : undefined;

  return (
    <Link
      className={`link-object ${className || ""}`}
      href={href}
      target={newTab ? "_blank" : "_self"}
      style={style}
      rel={newTab ? "noopener noreferrer" : undefined}
      onClick={handleAnchorClick(href)}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
};
