import "./styles.scss";
import { HeadingProps } from "@/utils/types";
import { JSX } from "react";

export const Heading = ({
  eyebrow,
  title,
  message,
  headingLevel = 2,
}: HeadingProps) => {
  const HeadingTag = `h${headingLevel}` as keyof JSX.IntrinsicElements;

  return (
    <div className="heading">
      {eyebrow && <p className="heading__eyebrow">{eyebrow}</p>}
      <HeadingTag className="heading__title">{title}</HeadingTag>
      {message && <p className="heading__message">{message}</p>}
    </div>
  );
};
