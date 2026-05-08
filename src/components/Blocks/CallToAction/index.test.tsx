import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { CallToAction } from "./index";

expect.extend(toHaveNoViolations);

const mockProps = {
  title: "Test Call to Action Title",
  message: "This is a test message for the call to action",
  eyebrow: "Get Started",
};

describe("CallToAction", () => {
  it("should render with required props", () => {
    render(<CallToAction {...mockProps} />);

    expect(screen.getByText(/test call to action title/i)).toBeInTheDocument();
    expect(screen.getByText(/this is a test message/i)).toBeInTheDocument();
  });

  it("should render eyebrow when provided", () => {
    render(<CallToAction {...mockProps} />);

    expect(screen.getByText(/get started/i)).toBeInTheDocument();
  });

  it("should use section element for semantic HTML", () => {
    const { container } = render(<CallToAction {...mockProps} />);

    const section = container.querySelector("section.call-to-action");
    expect(section).toBeInTheDocument();
  });

  it("should apply page-block class", () => {
    const { container } = render(<CallToAction {...mockProps} />);

    const section = container.querySelector("section.page-block");
    expect(section).toBeInTheDocument();
  });

  it("should center the heading", () => {
    const { container } = render(<CallToAction {...mockProps} />);

    const heading = container.querySelector(".heading--centered");
    expect(heading).toBeInTheDocument();
  });

  it("should render buttons when provided", () => {
    const propsWithButtons = {
      ...mockProps,
      buttons: [
        { href: "/learn-more", text: "Learn More", className: "primary" },
        { href: "/contact", text: "Contact Us", className: "secondary" },
      ],
    };

    render(<CallToAction {...propsWithButtons} />);

    expect(
      screen.getByRole("link", { name: /learn more/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /contact us/i }),
    ).toBeInTheDocument();
  });

  it("should render without buttons", () => {
    render(<CallToAction {...mockProps} />);

    const links = screen.queryAllByRole("link");
    expect(links).toHaveLength(0);
  });

  it("should render without eyebrow", () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { eyebrow, ...propsWithoutEyebrow } = mockProps;
    render(<CallToAction {...propsWithoutEyebrow} />);

    expect(screen.queryByText(/get started/i)).not.toBeInTheDocument();
    expect(screen.getByText(/test call to action title/i)).toBeInTheDocument();
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(<CallToAction {...mockProps} />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
