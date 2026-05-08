import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { MediaCards, MediaCardProps } from "./index";

expect.extend(toHaveNoViolations);

const mockProps: MediaCardProps = {
  heading: {
    title: "Our Services",
    message: "What we offer",
    eyebrow: "Services",
  },
  items: [
    {
      title: "Web Development",
      image: {
        src: "/web.jpg",
        alt: "Web development",
        width: 400,
        height: 300,
        blurDataURL: "data:image/jpeg;base64,test",
      },
      message: "Building modern web applications",
    },
    {
      title: "Mobile Apps",
      image: {
        src: "/mobile.jpg",
        alt: "Mobile apps",
        width: 400,
        height: 300,
        blurDataURL: "data:image/jpeg;base64,test",
      },
      message: "Creating native mobile experiences",
      button: [{ href: "/mobile", text: "Learn More" }],
    },
    {
      title: "Cloud Services",
      image: {
        src: "/cloud.jpg",
        alt: "Cloud services",
        width: 400,
        height: 300,
        blurDataURL: "data:image/jpeg;base64,test",
      },
      message: "Scalable cloud infrastructure",
    },
  ],
};

describe("MediaCards", () => {
  it("should render with required props", () => {
    render(<MediaCards {...mockProps} />);

    expect(screen.getByText(/our services/i)).toBeInTheDocument();
    expect(screen.getByText(/what we offer/i)).toBeInTheDocument();
  });

  it("should render heading eyebrow", () => {
    const { container } = render(<MediaCards {...mockProps} />);

    const eyebrow = container.querySelector(".heading__eyebrow");
    expect(eyebrow).toBeInTheDocument();
    expect(eyebrow).toHaveTextContent("Services");
  });

  it("should render all media cards", () => {
    render(<MediaCards {...mockProps} />);

    expect(screen.getByText(/web development/i)).toBeInTheDocument();
    expect(screen.getByText(/mobile apps/i)).toBeInTheDocument();
    expect(screen.getByText(/cloud services/i)).toBeInTheDocument();
  });

  it("should render card images with alt text", () => {
    render(<MediaCards {...mockProps} />);

    expect(
      screen.getByRole("img", { name: /web development/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /mobile apps/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /cloud services/i }),
    ).toBeInTheDocument();
  });

  it("should render card buttons when provided", () => {
    render(<MediaCards {...mockProps} />);

    const learnMoreButton = screen.getByRole("link", { name: /learn more/i });
    expect(learnMoreButton).toBeInTheDocument();
    expect(learnMoreButton).toHaveAttribute("href", "/mobile");
  });

  it("should use section element for semantic HTML", () => {
    const { container } = render(<MediaCards {...mockProps} />);

    const section = container.querySelector("section.media-cards");
    expect(section).toBeInTheDocument();
  });

  it("should apply page-block class", () => {
    const { container } = render(<MediaCards {...mockProps} />);

    const section = container.querySelector("section.page-block");
    expect(section).toBeInTheDocument();
  });

  it("should render correct number of cards", () => {
    const { container } = render(<MediaCards {...mockProps} />);

    const cards = container.querySelectorAll(".media-card");
    expect(cards).toHaveLength(3);
  });

  it("should render with single card", () => {
    const singleCardProps = {
      heading: mockProps.heading,
      items: [mockProps.items[0]],
    };

    const { container } = render(<MediaCards {...singleCardProps} />);

    const cards = container.querySelectorAll(".media-card");
    expect(cards).toHaveLength(1);
  });

  it("should render empty state with no cards", () => {
    const emptyProps = {
      heading: mockProps.heading,
      items: [],
    };

    const { container } = render(<MediaCards {...emptyProps} />);

    const cards = container.querySelectorAll(".media-card");
    expect(cards).toHaveLength(0);
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(<MediaCards {...mockProps} />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should apply correct CSS classes", () => {
    const { container } = render(<MediaCards {...mockProps} />);

    expect(container.querySelector(".media-cards__cards")).toBeInTheDocument();
  });
});
