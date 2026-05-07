import { HeadingProps } from "@/utils/types";
import "./styles.scss";
import { Heading } from "@/components/modules/Heading";
import {
  HistoryCard,
  HistoryCardProps,
} from "@/components/modules/HistoryCard";

export interface HistoryProps {
  heading: HeadingProps;
  cards: HistoryCardProps[];
}

export const History = ({ heading, cards }: HistoryProps) => {
  return (
    <section className="page-block history">
      <div className="container">
        <Heading {...heading} className="history__heading" isCentered />
        <div className="history__cards">
          {cards.map((card, index) => (
            <HistoryCard key={index} className="history__card" {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};
