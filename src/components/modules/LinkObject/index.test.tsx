import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { LinkObject } from "./index";

expect.extend(toHaveNoViolations);

describe("LinkObject", () => {
  beforeEach(() => {
    // Mock scrollIntoView
    Element.prototype.scrollIntoView = jest.fn();

    // Mock window.history.pushState
    window.history.pushState = jest.fn();
  });

  it("should render with required props", () => {
    render(<LinkObject href="/test">Click me</LinkObject>);

    const link = screen.getByRole("link", { name: /click me/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/test");
  });

  it("should apply link-object class", () => {
    render(<LinkObject href="/test">Click me</LinkObject>);

    const link = screen.getByRole("link", { name: /click me/i });
    expect(link).toHaveClass("link-object");
  });

  it("should apply additional className", () => {
    render(
      <LinkObject href="/test" className="custom-class">
        Click me
      </LinkObject>,
    );

    const link = screen.getByRole("link", { name: /click me/i });
    expect(link).toHaveClass("link-object");
    expect(link).toHaveClass("custom-class");
  });

  it("should handle internal links", () => {
    render(<LinkObject href="/internal">Internal Link</LinkObject>);

    const link = screen.getByRole("link", { name: /internal link/i });
    expect(link).toHaveAttribute("href", "/internal");
    expect(link).toHaveAttribute("target", "_self");
    expect(link).not.toHaveAttribute("rel");
  });

  it("should handle external links", () => {
    render(<LinkObject href="https://example.com">External Link</LinkObject>);

    const link = screen.getByRole("link", { name: /external link/i });
    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("should auto-generate aria-label for external links with string children", () => {
    render(<LinkObject href="https://example.com">External</LinkObject>);

    const link = screen.getByRole("link", {
      name: /external \(opens in new tab\)/i,
    });
    expect(link).toBeInTheDocument();
  });

  it("should use provided aria-label", () => {
    render(
      <LinkObject href="https://example.com" aria-label="Custom label">
        External
      </LinkObject>,
    );

    const link = screen.getByRole("link", { name: /custom label/i });
    expect(link).toBeInTheDocument();
  });

  it("should not auto-generate aria-label for non-string children", () => {
    render(
      <LinkObject href="https://example.com">
        <span>External</span>
      </LinkObject>,
    );

    const link = screen.getByRole("link");
    expect(link).not.toHaveAttribute("aria-label");
  });

  it("should handle anchor links", async () => {
    const user = userEvent.setup();

    // Create a target element
    const targetElement = document.createElement("div");
    targetElement.id = "target-section";
    document.body.appendChild(targetElement);

    render(<LinkObject href="#target-section">Jump to section</LinkObject>);

    const link = screen.getByRole("link", { name: /jump to section/i });
    await user.click(link);

    expect(targetElement.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "start",
    });
    expect(window.history.pushState).toHaveBeenCalledWith(
      null,
      "",
      "#target-section",
    );

    // Cleanup
    document.body.removeChild(targetElement);
  });

  it("should handle anchor links with path", async () => {
    const user = userEvent.setup();

    const targetElement = document.createElement("div");
    targetElement.id = "section";
    document.body.appendChild(targetElement);

    render(
      <LinkObject href="/page#section">Jump to section on page</LinkObject>,
    );

    const link = screen.getByRole("link");
    await user.click(link);

    expect(targetElement.scrollIntoView).toHaveBeenCalled();

    document.body.removeChild(targetElement);
  });

  it("should apply custom styles", () => {
    const customStyle = { color: "red", fontSize: "20px" };
    render(
      <LinkObject href="/test" style={customStyle}>
        Styled Link
      </LinkObject>,
    );

    const link = screen.getByRole("link", { name: /styled link/i });
    expect(link).toHaveStyle("color: rgb(255, 0, 0)");
    expect(link).toHaveStyle("font-size: 20px");
  });

  it("should render complex children", () => {
    render(
      <LinkObject href="/test">
        <span>Click</span> <strong>me</strong>
      </LinkObject>,
    );

    const link = screen.getByRole("link");
    expect(link).toHaveTextContent("Click me");
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(
      <LinkObject href="/test">Accessible Link</LinkObject>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should be keyboard navigable", async () => {
    const user = userEvent.setup();
    render(<LinkObject href="/test">Keyboard Test</LinkObject>);

    await user.tab();

    const link = screen.getByRole("link", { name: /keyboard test/i });
    expect(link).toHaveFocus();
  });

  it("should handle mailto links", () => {
    render(<LinkObject href="mailto:test@example.com">Email me</LinkObject>);

    const link = screen.getByRole("link", { name: /email me/i });
    expect(link).toHaveAttribute("href", "mailto:test@example.com");
    expect(link).toHaveAttribute("target", "_self");
  });

  it("should handle tel links", () => {
    render(<LinkObject href="tel:5551234567">Call me</LinkObject>);

    const link = screen.getByRole("link", { name: /call me/i });
    expect(link).toHaveAttribute("href", "tel:5551234567");
    expect(link).toHaveAttribute("target", "_self");
  });

  it("should render without className", () => {
    render(<LinkObject href="/test">No class</LinkObject>);

    const link = screen.getByRole("link", { name: /no class/i });
    expect(link).toHaveClass("link-object");
  });
});
