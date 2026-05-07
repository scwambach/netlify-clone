import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Header } from "./index";

expect.extend(toHaveNoViolations);

const mockProps = {
  title: "Test Header Title",
  message: "Test header message",
  button: {
    href: "/contact",
    text: "Contact Us",
    className: "primary",
  },
};

describe("Header", () => {
  it("should render with required props", () => {
    render(<Header {...mockProps} />);

    expect(screen.getByText(/test header title/i)).toBeInTheDocument();
    expect(screen.getByText(/test header message/i)).toBeInTheDocument();
  });

  it("should render button with correct attributes", () => {
    render(<Header {...mockProps} />);

    const button = screen.getByRole("link", { name: /contact us/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("href", "/contact");
  });

  it("should apply button className", () => {
    render(<Header {...mockProps} />);

    const button = screen.getByRole("link", { name: /contact us/i });
    expect(button).toHaveClass("primary");
  });

  it("should use header element for semantic HTML", () => {
    const { container } = render(<Header {...mockProps} />);

    const headerElement = container.querySelector("header.header");
    expect(headerElement).toBeInTheDocument();
  });

  it("should render without optional button className", () => {
    const propsWithoutClass = {
      ...mockProps,
      button: {
        href: "/contact",
        text: "Contact Us",
      },
    };

    render(<Header {...propsWithoutClass} />);

    const button = screen.getByRole("link", { name: /contact us/i });
    expect(button).toBeInTheDocument();
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(<Header {...mockProps} />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should apply correct CSS classes", () => {
    const { container } = render(<Header {...mockProps} />);

    expect(container.querySelector(".header")).toBeInTheDocument();
    expect(container.querySelector(".header__title")).toBeInTheDocument();
    expect(container.querySelector(".header__message")).toBeInTheDocument();
    expect(container.querySelector(".header__button")).toBeInTheDocument();
  });

  it("should render title with heading class", () => {
    const { container } = render(<Header {...mockProps} />);

    const title = container.querySelector(".header__title.heading");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Test Header Title");
  });
});
