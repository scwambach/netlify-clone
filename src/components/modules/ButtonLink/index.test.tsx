import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { ButtonLink } from "./index";

expect.extend(toHaveNoViolations);

describe("ButtonLink", () => {
  it("should render with required props", () => {
    render(<ButtonLink href="/test">Click me</ButtonLink>);

    const link = screen.getByRole("link", { name: /click me/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/test");
  });

  it("should apply base button-link class", () => {
    render(<ButtonLink href="/test">Click me</ButtonLink>);

    const link = screen.getByRole("link", { name: /click me/i });
    expect(link).toHaveClass("button-link");
  });

  it("should apply additional className", () => {
    render(
      <ButtonLink href="/test" className="primary">
        Click me
      </ButtonLink>,
    );

    const link = screen.getByRole("link", { name: /click me/i });
    expect(link).toHaveClass("button-link");
    expect(link).toHaveClass("primary");
  });

  it("should render children with heading class", () => {
    const { container } = render(
      <ButtonLink href="/test">Click me</ButtonLink>,
    );

    const heading = container.querySelector(".heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Click me");
  });

  it("should render complex children", () => {
    render(
      <ButtonLink href="/test">
        <span>Click</span> <strong>me</strong>
      </ButtonLink>,
    );

    const link = screen.getByRole("link");
    expect(link).toHaveTextContent("Click me");
  });

  it("should handle internal links", () => {
    render(<ButtonLink href="/internal">Internal Link</ButtonLink>);

    const link = screen.getByRole("link", { name: /internal link/i });
    expect(link).toHaveAttribute("href", "/internal");
  });

  it("should handle external links", () => {
    render(<ButtonLink href="https://example.com">External Link</ButtonLink>);

    const link = screen.getByRole("link", { name: /external link/i });
    expect(link).toHaveAttribute("href", "https://example.com");
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(
      <ButtonLink href="/test">Accessible Link</ButtonLink>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should be keyboard navigable", async () => {
    render(<ButtonLink href="/test">Keyboard Test</ButtonLink>);

    const link = screen.getByRole("link", { name: /keyboard test/i });
    link.focus();

    expect(link).toHaveFocus();
  });

  it("should support multiple classNames", () => {
    render(
      <ButtonLink href="/test" className="primary large">
        Click me
      </ButtonLink>,
    );

    const link = screen.getByRole("link", { name: /click me/i });
    expect(link).toHaveClass("button-link");
    expect(link).toHaveClass("primary");
    expect(link).toHaveClass("large");
  });

  it("should render without additional className", () => {
    render(<ButtonLink href="/test">Click me</ButtonLink>);

    const link = screen.getByRole("link", { name: /click me/i });
    expect(link).toHaveClass("button-link");
    expect(link).toHaveClass("link-object");
  });
});
