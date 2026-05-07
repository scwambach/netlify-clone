import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Footer, FooterProps } from "./index";

expect.extend(toHaveNoViolations);

const mockProps: FooterProps = {
  personalInfo: {
    name: "John Doe",
    email: "john@example.com",
    phone: "(555) 123-4567",
    website: {
      href: "https://johndoe.com",
      text: "johndoe.com",
    },
  },
  links: {
    resume: {
      href: "/resume.pdf",
      text: "Download Resume",
    },
    socials: [
      "https://github.com/johndoe",
      "https://linkedin.com/in/johndoe",
      "https://twitter.com/johndoe",
    ],
  },
};

describe("Footer", () => {
  it("should render with required props", () => {
    render(<Footer {...mockProps} />);

    expect(screen.getByText(/john doe/i)).toBeInTheDocument();
  });

  it("should render personal information", () => {
    render(<Footer {...mockProps} />);

    expect(screen.getByText(/john doe/i)).toBeInTheDocument();
    expect(screen.getByText(/john@example.com/i)).toBeInTheDocument();
    expect(screen.getByText(/\(555\) 123-4567/i)).toBeInTheDocument();
    expect(screen.getByText(/johndoe.com/i)).toBeInTheDocument();
  });

  it("should render email link with mailto", () => {
    render(<Footer {...mockProps} />);

    const emailLink = screen.getByRole("link", { name: /john@example.com/i });
    expect(emailLink).toHaveAttribute("href", "mailto:john@example.com");
  });

  it("should render phone link with tel", () => {
    render(<Footer {...mockProps} />);

    const phoneLink = screen.getByRole("link", { name: /\(555\) 123-4567/i });
    expect(phoneLink).toHaveAttribute("href", "tel:(555) 123-4567");
  });

  it("should render website link", () => {
    render(<Footer {...mockProps} />);

    const websiteLink = screen.getByRole("link", { name: /johndoe.com/i });
    expect(websiteLink).toHaveAttribute("href", "https://johndoe.com");
  });

  it("should render resume link", () => {
    render(<Footer {...mockProps} />);

    const resumeLink = screen.getByRole("link", { name: /download resume/i });
    expect(resumeLink).toBeInTheDocument();
    expect(resumeLink).toHaveAttribute("href", "/resume.pdf");
  });

  it("should render social icons", () => {
    const { container } = render(<Footer {...mockProps} />);

    const socialIcons = container.querySelectorAll(".footer__social-icon");
    expect(socialIcons).toHaveLength(3);
  });

  it("should use footer element for semantic HTML", () => {
    const { container } = render(<Footer {...mockProps} />);

    const footerElement = container.querySelector("footer.footer");
    expect(footerElement).toBeInTheDocument();
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(<Footer {...mockProps} />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should apply correct CSS classes", () => {
    const { container } = render(<Footer {...mockProps} />);

    expect(container.querySelector(".footer")).toBeInTheDocument();
    expect(container.querySelector(".footer__content")).toBeInTheDocument();
    expect(container.querySelector(".footer__connect")).toBeInTheDocument();
    expect(container.querySelector(".footer__link")).toBeInTheDocument();
    expect(container.querySelector(".footer__socials")).toBeInTheDocument();
  });

  it("should render with minimal social links", () => {
    const propsWithOneSocial = {
      ...mockProps,
      links: {
        ...mockProps.links,
        socials: ["https://github.com/johndoe"],
      },
    };

    const { container } = render(<Footer {...propsWithOneSocial} />);

    const socialIcons = container.querySelectorAll(".footer__social-icon");
    expect(socialIcons).toHaveLength(1);
  });

  it("should render with no social links", () => {
    const propsWithNoSocials = {
      ...mockProps,
      links: {
        ...mockProps.links,
        socials: [],
      },
    };

    const { container } = render(<Footer {...propsWithNoSocials} />);

    const socialIcons = container.querySelectorAll(".footer__social-icon");
    expect(socialIcons).toHaveLength(0);
  });
});
