import "./styles.scss";
import { HeadingProps } from "@/utils/types";
import { JSX } from "react";
import { ButtonLink } from "../ButtonLink";

export const Heading = ({
  eyebrow,
  title,
  message,
  headingLevel = 2,
  isCentered = false,
  className = "",
  buttons,
}: HeadingProps) => {
  const HeadingTag = `h${headingLevel}` as keyof JSX.IntrinsicElements;

  return (
    <div
      className={`heading ${isCentered ? "heading--centered" : ""}${className ? ` ${className}` : ""}`}
    >
      {eyebrow && <p className="heading__eyebrow">{eyebrow}</p>}
      <HeadingTag className="heading__title">{title}</HeadingTag>
      {message && <p className="heading__message">{message}</p>}
      {buttons && buttons.length > 0 && (
        <div className="heading__buttons">
          {buttons.map((button, index) => (
            <ButtonLink
              href={button.href}
              className={button.className}
              key={index}
            >
              {button.text}
            </ButtonLink>
          ))}
        </div>
      )}
    </div>
  );
};
