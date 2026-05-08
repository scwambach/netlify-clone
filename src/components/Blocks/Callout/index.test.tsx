import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Callout, CalloutProps } from "./index";

expect.extend(toHaveNoViolations);

const mockProps: CalloutProps = {
  heading: {
    title: "Test Callout Title",
    message: "This is a test message",
    eyebrow: "Features",
  },
  image: {
    src: "/test-image.jpg",
    alt: "Test image",
    width: 500,
    height: 300,
    blurDataURL: "data:image/jpeg;base64,test",
  },
  items: ["First feature item", "Second feature item", "Third feature item"],
};

describe("Callout", () => {
  it("should render with required props", () => {
    render(<Callout {...mockProps} />);

    expect(screen.getByText(/test callout title/i)).toBeInTheDocument();
    expect(screen.getByText(/this is a test message/i)).toBeInTheDocument();
  });

  it("should render all list items", () => {
    render(<Callout {...mockProps} />);

    expect(screen.getByText(/first feature item/i)).toBeInTheDocument();
    expect(screen.getByText(/second feature item/i)).toBeInTheDocument();
    expect(screen.getByText(/third feature item/i)).toBeInTheDocument();
  });

  it("should render image with correct alt text", () => {
    render(<Callout {...mockProps} />);

    const image = screen.getByRole("img", { name: /test image/i });
    expect(image).toBeInTheDocument();
  });

  it("should render eyebrow", () => {
    render(<Callout {...mockProps} />);

    expect(screen.getByText(/features/i)).toBeInTheDocument();
  });

  it("should use section element for semantic HTML", () => {
    const { container } = render(<Callout {...mockProps} />);

    const section = container.querySelector("section.callout");
    expect(section).toBeInTheDocument();
  });

  it("should apply page-block class", () => {
    const { container } = render(<Callout {...mockProps} />);

    const section = container.querySelector("section.page-block");
    expect(section).toBeInTheDocument();
  });

  it("should render list as unordered list", () => {
    const { container } = render(<Callout {...mockProps} />);

    const list = container.querySelector("ul.callout__list");
    expect(list).toBeInTheDocument();
  });

  it("should render correct number of list items", () => {
    const { container } = render(<Callout {...mockProps} />);

    const listItems = container.querySelectorAll(".callout__list-item");
    expect(listItems).toHaveLength(3);
  });

  it("should render with single item", () => {
    const singleItemProps = {
      ...mockProps,
      items: ["Single item"],
    };

    render(<Callout {...singleItemProps} />);

    expect(screen.getByText(/single item/i)).toBeInTheDocument();
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(<Callout {...mockProps} />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should apply correct CSS classes", () => {
    const { container } = render(<Callout {...mockProps} />);

    expect(container.querySelector(".callout__box")).toBeInTheDocument();
    expect(container.querySelector(".callout__content")).toBeInTheDocument();
    expect(container.querySelector(".callout__image")).toBeInTheDocument();
  });
});
