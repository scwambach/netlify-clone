import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { HistoryCard, HistoryCardProps } from "./index";

expect.extend(toHaveNoViolations);

const mockProps: HistoryCardProps = {
  company: "Tech Corp",
  title: "Senior Developer",
  date: "2020 - Present",
  description:
    "Leading development of core products and mentoring junior developers",
};

describe("HistoryCard", () => {
  it("should render with required props", () => {
    render(<HistoryCard {...mockProps} />);

    expect(screen.getByText(/tech corp/i)).toBeInTheDocument();
    expect(screen.getByText(/senior developer/i)).toBeInTheDocument();
    expect(screen.getByText(/2020 - present/i)).toBeInTheDocument();
    expect(screen.getByText(/leading development/i)).toBeInTheDocument();
  });

  it("should render company name", () => {
    render(<HistoryCard {...mockProps} />);

    const company = screen.getByText(/tech corp/i);
    expect(company).toHaveClass("history-card__company");
  });

  it("should render title with heading class", () => {
    const { container } = render(<HistoryCard {...mockProps} />);

    const title = container.querySelector(".history-card__title.heading");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Senior Developer");
  });

  it("should render date", () => {
    render(<HistoryCard {...mockProps} />);

    const date = screen.getByText(/2020 - present/i);
    expect(date).toHaveClass("history-card__date");
  });

  it("should render description", () => {
    render(<HistoryCard {...mockProps} />);

    const description = screen.getByText(/leading development/i);
    expect(description).toHaveClass("history-card__description");
  });

  it("should render button when provided", () => {
    const propsWithButton = {
      ...mockProps,
      button: {
        href: "/project",
        text: "View Project",
      },
    };

    render(<HistoryCard {...propsWithButton} />);

    const button = screen.getByRole("link", { name: /view project/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("href", "/project");
  });

  it("should not render button when not provided", () => {
    render(<HistoryCard {...mockProps} />);

    const links = screen.queryAllByRole("link");
    expect(links).toHaveLength(0);
  });

  it("should apply custom className", () => {
    const { container } = render(
      <HistoryCard {...mockProps} className="custom-class" />,
    );

    const card = container.querySelector(".history-card.custom-class");
    expect(card).toBeInTheDocument();
  });

  it("should render without custom className", () => {
    const { container } = render(<HistoryCard {...mockProps} />);

    const card = container.querySelector(".history-card");
    expect(card).toBeInTheDocument();
  });

  it("should apply primary class to button", () => {
    const propsWithButton = {
      ...mockProps,
      button: {
        href: "/project",
        text: "View Project",
      },
    };

    const { container } = render(<HistoryCard {...propsWithButton} />);

    const button = container.querySelector(".history-card__button.primary");
    expect(button).toBeInTheDocument();
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(<HistoryCard {...mockProps} />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should apply correct CSS classes", () => {
    const { container } = render(<HistoryCard {...mockProps} />);

    expect(container.querySelector(".history-card")).toBeInTheDocument();
    expect(
      container.querySelector(".history-card__content"),
    ).toBeInTheDocument();
    expect(container.querySelector(".history-card__info")).toBeInTheDocument();
    expect(
      container.querySelector(".history-card__company"),
    ).toBeInTheDocument();
    expect(container.querySelector(".history-card__title")).toBeInTheDocument();
    expect(container.querySelector(".history-card__date")).toBeInTheDocument();
  });
});
