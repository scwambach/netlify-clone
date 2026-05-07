import { MediaCardItem } from "@/components/Blocks/MediaCards";
import "./styles.scss";
import Image from "next/image";
import { ButtonLink } from "../ButtonLink";

export const MediaCard = ({ title, image, message, button }: MediaCardItem) => {
  return (
    <div className="media-card">
      <div className="media-card__image">
        <Image
          placeholder="blur"
          unoptimized
          src={image.src}
          blurDataURL={image.blurDataURL}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      </div>
      <div className="media-card__content">
        <p className="media-card__title heading">{title}</p>
        <p className="media-card__message">{message}</p>
        {button && (
          <div className="media-card__buttons">
            {button.map((btn, index) => (
              <ButtonLink
                key={index}
                href={btn.href}
                className="media-card__button"
              >
                {btn.text}
              </ButtonLink>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
