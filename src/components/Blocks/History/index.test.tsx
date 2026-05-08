import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { History, HistoryProps } from "./index";

expect.extend(toHaveNoViolations);

const mockProps: HistoryProps = {
  heading: {
    title: "Work History",
    message: "My professional experience",
    eyebrow: "Experience",
  },
  cards: [
    {
      company: "Tech Corp",
      title: "Senior Developer",
      date: "2020 - Present",
      description: "Leading development of core products",
    },
    {
      company: "StartupCo",
      title: "Full Stack Developer",
      date: "2018 - 2020",
      description: "Built web applications from scratch",
      button: {
        href: "/project",
        text: "View Project",
      },
    },
  ],
};

describe("History", () => {
  it("should render with required props", () => {
    render(<History {...mockProps} />);

    expect(screen.getByText(/work history/i)).toBeInTheDocument();
    expect(screen.getByText(/my professional experience/i)).toBeInTheDocument();
  });

  it("should render heading eyebrow", () => {
    const { container } = render(<History {...mockProps} />);

    const eyebrow = container.querySelector(".heading__eyebrow");
    expect(eyebrow).toBeInTheDocument();
    expect(eyebrow).toHaveTextContent("Experience");
  });

  it("should render all history cards", () => {
    render(<History {...mockProps} />);

    expect(screen.getByText(/tech corp/i)).toBeInTheDocument();
    expect(screen.getByText(/senior developer/i)).toBeInTheDocument();
    expect(screen.getByText(/startupco/i)).toBeInTheDocument();
    expect(screen.getByText(/full stack developer/i)).toBeInTheDocument();
  });

  it("should render card buttons when provided", () => {
    render(<History {...mockProps} />);

    const viewProjectButton = screen.getByRole("link", {
      name: /view project/i,
    });
    expect(viewProjectButton).toBeInTheDocument();
    expect(viewProjectButton).toHaveAttribute("href", "/project");
  });

  it("should use section element for semantic HTML", () => {
    const { container } = render(<History {...mockProps} />);

    const section = container.querySelector("section.history");
    expect(section).toBeInTheDocument();
  });

  it("should apply page-block class", () => {
    const { container } = render(<History {...mockProps} />);

    const section = container.querySelector("section.page-block");
    expect(section).toBeInTheDocument();
  });

  it("should center the heading", () => {
    const { container } = render(<History {...mockProps} />);

    const heading = container.querySelector(".heading--centered");
    expect(heading).toBeInTheDocument();
  });

  it("should render with single card", () => {
    const singleCardProps = {
      heading: mockProps.heading,
      cards: [mockProps.cards[0]],
    };

    const { container } = render(<History {...singleCardProps} />);

    const cards = container.querySelectorAll(".history-card");
    expect(cards).toHaveLength(1);
  });

  it("should render empty state with no cards", () => {
    const emptyProps = {
      heading: mockProps.heading,
      cards: [],
    };

    const { container } = render(<History {...emptyProps} />);

    const cards = container.querySelectorAll(".history-card");
    expect(cards).toHaveLength(0);
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(<History {...mockProps} />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should apply correct CSS classes", () => {
    const { container } = render(<History {...mockProps} />);

    expect(container.querySelector(".history__heading")).toBeInTheDocument();
    expect(container.querySelector(".history__cards")).toBeInTheDocument();
  });
});
