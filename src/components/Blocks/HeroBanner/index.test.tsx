import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { HeroBanner, HeroBannerProps } from "./index";

expect.extend(toHaveNoViolations);

const mockProps: HeroBannerProps = {
  title: "Test Hero Banner",
  message: "This is a test message for the hero banner",
  image: {
    src: "/test-image.jpg",
    width: 800,
    height: 600,
    blurDataURL: "data:image/jpeg;base64,test",
    alt: "",
  },
  buttons: [
    {
      href: "/get-started",
      text: "Get Started",
      className: "primary",
    },
    {
      href: "/learn-more",
      text: "Learn More",
      className: "secondary",
    },
  ],
};

describe("HeroBanner", () => {
  it("should render with required props", () => {
    render(<HeroBanner {...mockProps} />);

    expect(
      screen.getByRole("heading", { name: /test hero banner/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/this is a test message/i)).toBeInTheDocument();
  });

  it("should render all buttons", () => {
    render(<HeroBanner {...mockProps} />);

    const getStartedButton = screen.getByRole("link", { name: /get started/i });
    const learnMoreButton = screen.getByRole("link", { name: /learn more/i });

    expect(getStartedButton).toBeInTheDocument();
    expect(getStartedButton).toHaveAttribute("href", "/get-started");

    expect(learnMoreButton).toBeInTheDocument();
    expect(learnMoreButton).toHaveAttribute("href", "/learn-more");
  });

  it("should render image with correct attributes", () => {
    render(<HeroBanner {...mockProps} />);

    const image = screen.getByRole("img", { name: /test hero banner/i });
    expect(image).toBeInTheDocument();
  });

  it("should use section element for semantic HTML", () => {
    const { container } = render(<HeroBanner {...mockProps} />);

    const section = container.querySelector("section.hero-banner");
    expect(section).toBeInTheDocument();
  });

  it("should use h1 for main title", () => {
    render(<HeroBanner {...mockProps} />);

    const heading = screen.getByRole("heading", {
      level: 1,
      name: /test hero banner/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("should render without buttons", () => {
    const propsWithoutButtons = { ...mockProps, buttons: [] };
    render(<HeroBanner {...propsWithoutButtons} />);

    expect(
      screen.getByRole("heading", { name: /test hero banner/i }),
    ).toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(<HeroBanner {...mockProps} />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should apply correct CSS classes", () => {
    const { container } = render(<HeroBanner {...mockProps} />);

    expect(container.querySelector(".hero-banner")).toBeInTheDocument();
    expect(container.querySelector(".hero-banner__inner")).toBeInTheDocument();
    expect(
      container.querySelector(".hero-banner__content"),
    ).toBeInTheDocument();
    expect(container.querySelector(".hero-banner__image")).toBeInTheDocument();
    expect(
      container.querySelector(".hero-banner__buttons"),
    ).toBeInTheDocument();
  });
});
