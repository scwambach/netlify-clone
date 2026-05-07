import { LinkProps } from "@/utils/types";
import { ButtonLink } from "../ButtonLink";
import "./styles.scss";

export interface HistoryCardProps {
  company: string;
  title: string;
  date: string;
  description: string;
  className?: string;
  button?: LinkProps;
}

export const HistoryCard = ({
  company,
  title,
  date,
  description,
  className,
  button,
}: HistoryCardProps) => {
  return (
    <div className={`history-card${className ? ` ${className}` : ""}`}>
      <div className="history-card__content">
        <div className="history-card__info">
          <p className="history-card__company">{company}</p>
          <p className="history-card__title heading">{title}</p>
          <p className="history-card__date">{date}</p>
        </div>
        <p className="history-card__description">{description}</p>
      </div>
      {button && (
        <ButtonLink {...button} className="history-card__button primary">
          {button.text}
        </ButtonLink>
      )}
    </div>
  );
};
