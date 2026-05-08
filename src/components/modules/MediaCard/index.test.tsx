import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { MediaCard } from "./index";
import { MediaCardItem } from "@/components/Blocks/MediaCards";

expect.extend(toHaveNoViolations);

const mockProps: MediaCardItem = {
  title: "Web Development",
  image: {
    src: "/test-image.jpg",
    alt: "Web development illustration",
    width: 400,
    height: 300,
    blurDataURL: "data:image/jpeg;base64,test",
  },
  message: "Building modern web applications with the latest technologies",
};

describe("MediaCard", () => {
  it("should render with required props", () => {
    render(<MediaCard {...mockProps} />);

    expect(screen.getByText(/web development/i)).toBeInTheDocument();
    expect(
      screen.getByText(/building modern web applications/i),
    ).toBeInTheDocument();
  });

  it("should render image with correct alt text", () => {
    render(<MediaCard {...mockProps} />);

    const image = screen.getByRole("img", {
      name: /web development illustration/i,
    });
    expect(image).toBeInTheDocument();
  });

  it("should render title with heading class", () => {
    const { container } = render(<MediaCard {...mockProps} />);

    const title = container.querySelector(".media-card__title.heading");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Web Development");
  });

  it("should render message", () => {
    render(<MediaCard {...mockProps} />);

    const message = screen.getByText(/building modern web applications/i);
    expect(message).toHaveClass("media-card__message");
  });

  it("should render buttons when provided", () => {
    const propsWithButtons = {
      ...mockProps,
      button: [
        { href: "/learn-more", text: "Learn More" },
        { href: "/get-started", text: "Get Started" },
      ],
    };

    render(<MediaCard {...propsWithButtons} />);

    expect(
      screen.getByRole("link", { name: /learn more/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /get started/i }),
    ).toBeInTheDocument();
  });

  it("should not render buttons when not provided", () => {
    render(<MediaCard {...mockProps} />);

    const links = screen.queryAllByRole("link");
    expect(links).toHaveLength(0);
  });

  it("should render single button", () => {
    const propsWithButton = {
      ...mockProps,
      button: [{ href: "/details", text: "View Details" }],
    };

    render(<MediaCard {...propsWithButton} />);

    const button = screen.getByRole("link", { name: /view details/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("href", "/details");
  });

  it("should apply correct button href", () => {
    const propsWithButtons = {
      ...mockProps,
      button: [{ href: "/specific-url", text: "Click Me" }],
    };

    render(<MediaCard {...propsWithButtons} />);

    const button = screen.getByRole("link", { name: /click me/i });
    expect(button).toHaveAttribute("href", "/specific-url");
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(<MediaCard {...mockProps} />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should apply correct CSS classes", () => {
    const { container } = render(<MediaCard {...mockProps} />);

    expect(container.querySelector(".media-card")).toBeInTheDocument();
    expect(container.querySelector(".media-card__image")).toBeInTheDocument();
    expect(container.querySelector(".media-card__content")).toBeInTheDocument();
    expect(container.querySelector(".media-card__title")).toBeInTheDocument();
    expect(container.querySelector(".media-card__message")).toBeInTheDocument();
  });

  it("should render buttons in correct container", () => {
    const propsWithButtons = {
      ...mockProps,
      button: [{ href: "/test", text: "Test Button" }],
    };

    const { container } = render(<MediaCard {...propsWithButtons} />);

    const buttonsContainer = container.querySelector(".media-card__buttons");
    expect(buttonsContainer).toBeInTheDocument();
  });
});
