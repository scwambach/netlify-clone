import { ButtonLink } from "../modules/ButtonLink";
import "./styles.scss";

export const Header = ({
  title,
  message,
  button,
}: {
  title: string;
  message: string;
  button: {
    className?: string;
    href: string;
    text: string;
  };
}) => {
  return (
    <header className="header">
      <div className="container">
        <div>
          <p className="header__title heading">{title}</p>
          <p className="header__message">{message}</p>
        </div>
        <ButtonLink
          href={button.href}
          className={`header__button${button.className ? ` ${button.className}` : ""}`}
        >
          {button.text}
        </ButtonLink>
      </div>
    </header>
  );
};
