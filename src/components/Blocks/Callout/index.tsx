import { HeadingProps } from "@/utils/types";
import "./styles.scss";
import Image, { ImageProps } from "next/image";
import { Heading } from "@/components/modules/Heading";

export interface CalloutProps {
  heading: HeadingProps;
  image: ImageProps;
  items: string[];
}

export const Callout = ({ heading, image, items }: CalloutProps) => {
  return (
    <section className="page-block callout">
      <div className="container">
        <div className="callout__box">
          <div className="callout__content">
            <Heading {...heading} className="callout__heading" />
            <ul className="callout__list">
              {items.map((item, index) => (
                <li key={index} className="callout__list-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="callout__image">
            <Image {...image} alt={image.alt} />
          </div>
        </div>
      </div>
    </section>
  );
};
