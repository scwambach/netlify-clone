import "./styles.scss";
import { Heading } from "@/components/modules/Heading";
import { MediaCard } from "@/components/modules/MediaCard";
import { HeadingProps, LinkProps } from "@/utils/types";
import { ImageProps } from "next/image";

export interface MediaCardItem {
  title: string;
  image: ImageProps;
  message: string;
  button?: LinkProps[];
}

export interface MediaCardProps {
  heading: HeadingProps;
  items: MediaCardItem[];
}

export const MediaCards = ({ heading, items }: MediaCardProps) => {
  return (
    <section className="page-block media-cards">
      <div className="container">
        <Heading {...heading} />
        <div className="media-cards__cards">
          {items.map((item, index) => (
            <MediaCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
