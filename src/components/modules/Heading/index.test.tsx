import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Heading } from "./index";
import { HeadingProps } from "@/utils/types";

expect.extend(toHaveNoViolations);

const mockProps: HeadingProps = {
  title: "Test Heading Title",
  message: "This is a test message",
  eyebrow: "Test Eyebrow",
};

describe("Heading", () => {
  it("should render with required props", () => {
    render(<Heading title="Test Title" />);

    expect(screen.getByText(/test title/i)).toBeInTheDocument();
  });

  it("should render eyebrow when provided", () => {
    render(<Heading {...mockProps} />);

    expect(screen.getByText(/test eyebrow/i)).toBeInTheDocument();
  });

  it("should render message when provided", () => {
    render(<Heading {...mockProps} />);

    expect(screen.getByText(/this is a test message/i)).toBeInTheDocument();
  });

  it("should render without eyebrow", () => {
    render(<Heading title="Test Title" message="Test message" />);

    expect(screen.queryByText(/test eyebrow/i)).not.toBeInTheDocument();
    expect(screen.getByText(/test title/i)).toBeInTheDocument();
  });

  it("should render without message", () => {
    render(<Heading title="Test Title" eyebrow="Test Eyebrow" />);

    expect(screen.queryByText(/test message/i)).not.toBeInTheDocument();
    expect(screen.getByText(/test title/i)).toBeInTheDocument();
  });

  it("should use h2 by default", () => {
    const { container } = render(<Heading title="Test Title" />);

    const heading = container.querySelector("h2");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Test Title");
  });

  it("should use custom heading level", () => {
    const { container } = render(
      <Heading title="Test Title" headingLevel={3} />,
    );

    const heading = container.querySelector("h3");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Test Title");
  });

  it("should apply centered class when isCentered is true", () => {
    const { container } = render(<Heading title="Test Title" isCentered />);

    const heading = container.querySelector(".heading--centered");
    expect(heading).toBeInTheDocument();
  });

  it("should not apply centered class by default", () => {
    const { container } = render(<Heading title="Test Title" />);

    const heading = container.querySelector(".heading--centered");
    expect(heading).not.toBeInTheDocument();
  });

  it("should apply custom className", () => {
    const { container } = render(
      <Heading title="Test Title" className="custom-class" />,
    );

    const heading = container.querySelector(".heading.custom-class");
    expect(heading).toBeInTheDocument();
  });

  it("should render buttons when provided", () => {
    const propsWithButtons: HeadingProps = {
      title: "Test Title",
      buttons: [
        { href: "/button1", text: "Button 1", className: "primary" },
        { href: "/button2", text: "Button 2", className: "secondary" },
      ],
    };

    render(<Heading {...propsWithButtons} />);

    expect(screen.getByRole("link", { name: /button 1/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /button 2/i })).toBeInTheDocument();
  });

  it("should render without buttons", () => {
    render(<Heading title="Test Title" />);

    const links = screen.queryAllByRole("link");
    expect(links).toHaveLength(0);
  });

  it("should render with single button", () => {
    const propsWithButton: HeadingProps = {
      title: "Test Title",
      buttons: [{ href: "/button", text: "Click Me" }],
    };

    render(<Heading {...propsWithButton} />);

    const button = screen.getByRole("link", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("href", "/button");
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(<Heading {...mockProps} />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should apply correct CSS classes", () => {
    const { container } = render(<Heading {...mockProps} />);

    expect(container.querySelector(".heading")).toBeInTheDocument();
    expect(container.querySelector(".heading__eyebrow")).toBeInTheDocument();
    expect(container.querySelector(".heading__title")).toBeInTheDocument();
    expect(container.querySelector(".heading__message")).toBeInTheDocument();
  });
});
