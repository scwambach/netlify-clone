import { SocialIcon } from "react-social-icons";
import { LinkObject } from "../modules/LinkObject";
import "./styles.scss";

export interface FooterProps {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    website: {
      href: string;
      text: string;
    };
  };
  links: {
    resume: {
      href: string;
      text: string;
    };
    socials: string[];
  };
}

export const Footer = ({ personalInfo, links }: FooterProps) => {
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <p className="footer__content">
            {personalInfo.name}
            <br />
            <LinkObject href={`mailto:${personalInfo.email}`}>
              {personalInfo.email}
            </LinkObject>
            <br />
            <LinkObject href={`tel:${personalInfo.phone}`}>
              {personalInfo.phone}
            </LinkObject>
            <br />
            <LinkObject href={personalInfo.website.href}>
              {personalInfo.website.text}
            </LinkObject>
          </p>
        </div>
        <div className="footer__connect">
          <LinkObject href={links.resume.href} className="footer__link">
            {links.resume.text}
          </LinkObject>
          <div className="footer__socials">
            {links.socials.map((social, index) => (
              <SocialIcon
                key={index}
                url={social}
                bgColor="var(--black)"
                target="_blank"
                rel="noopener noreferrer"
                style={{ height: 30, width: 30 }}
                className="footer__social-icon"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
