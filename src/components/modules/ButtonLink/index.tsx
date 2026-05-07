import "./styles.scss";
import { LinkObject, LinkObjectProps } from "../LinkObject";

export const ButtonLink = ({ href, children, className }: LinkObjectProps) => {
  return (
    <LinkObject href={href} className={`button-link ${className}`}>
      <span className="heading">{children}</span>
    </LinkObject>
  );
};
