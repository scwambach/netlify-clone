import "./styles.scss";
import { LinkProps } from "@/utils/types";
import Image, { ImageProps } from "next/image";
import { ButtonLink } from "@/components/modules/ButtonLink";

export interface HeroBannerProps {
  title: string;
  message: string;
  image: ImageProps;
  buttons: LinkProps[];
}

export const HeroBanner = ({
  title,
  message,
  image,
  buttons,
}: HeroBannerProps) => {
  return (
    <section className="hero-banner">
      <div className="container">
        <div className="hero-banner__inner">
          <div className="hero-banner__content">
            <h1 className="hero-banner__title heading">{title}</h1>
            <p>{message}</p>
            <div className="hero-banner__buttons">
              {buttons.map((button, index) => (
                <ButtonLink
                  key={index}
                  href={button.href}
                  className={button.className}
                >
                  {button.text}
                </ButtonLink>
              ))}
            </div>
          </div>
          <div className="hero-banner__image">
            <Image
              src={image.src}
              alt={title}
              placeholder="blur"
              unoptimized
              blurDataURL={image.blurDataURL}
              width={image.width}
              height={image.height}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
