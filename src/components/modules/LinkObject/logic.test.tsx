import { handleAnchorClick } from "./logic";

describe("LinkObject Logic", () => {
  describe("handleAnchorClick", () => {
    beforeEach(() => {
      // Mock scrollIntoView
      Element.prototype.scrollIntoView = jest.fn();

      // Mock window.history.pushState
      window.history.pushState = jest.fn();

      // Clear mocks before each test
      jest.clearAllMocks();
    });

    it("should handle anchor link with hash only", () => {
      const targetElement = document.createElement("div");
      targetElement.id = "target";
      document.body.appendChild(targetElement);

      const mockEvent = {
        preventDefault: jest.fn(),
      } as unknown as React.MouseEvent<HTMLAnchorElement>;

      const handler = handleAnchorClick("#target");
      handler(mockEvent);

      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(targetElement.scrollIntoView).toHaveBeenCalledWith({
        behavior: "smooth",
        block: "start",
      });
      expect(window.history.pushState).toHaveBeenCalledWith(
        null,
        "",
        "#target",
      );

      document.body.removeChild(targetElement);
    });

    it("should handle anchor link with path and hash", () => {
      const targetElement = document.createElement("div");
      targetElement.id = "section";
      document.body.appendChild(targetElement);

      const mockEvent = {
        preventDefault: jest.fn(),
      } as unknown as React.MouseEvent<HTMLAnchorElement>;

      const handler = handleAnchorClick("/page#section");
      handler(mockEvent);

      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(targetElement.scrollIntoView).toHaveBeenCalled();
      expect(window.history.pushState).toHaveBeenCalledWith(
        null,
        "",
        "#section",
      );

      document.body.removeChild(targetElement);
    });

    it("should not prevent default for links without hash", () => {
      const mockEvent = {
        preventDefault: jest.fn(),
      } as unknown as React.MouseEvent<HTMLAnchorElement>;

      const handler = handleAnchorClick("/normal-link");
      handler(mockEvent);

      expect(mockEvent.preventDefault).not.toHaveBeenCalled();
      expect(Element.prototype.scrollIntoView).not.toHaveBeenCalled();
      expect(window.history.pushState).not.toHaveBeenCalled();
    });

    it("should handle hash without target element gracefully", () => {
      const mockEvent = {
        preventDefault: jest.fn(),
      } as unknown as React.MouseEvent<HTMLAnchorElement>;

      const handler = handleAnchorClick("#nonexistent");
      handler(mockEvent);

      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(Element.prototype.scrollIntoView).not.toHaveBeenCalled();
      expect(window.history.pushState).not.toHaveBeenCalled();
    });

    it("should handle empty hash", () => {
      const mockEvent = {
        preventDefault: jest.fn(),
      } as unknown as React.MouseEvent<HTMLAnchorElement>;

      const handler = handleAnchorClick("#");
      handler(mockEvent);

      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(Element.prototype.scrollIntoView).not.toHaveBeenCalled();
      expect(window.history.pushState).not.toHaveBeenCalled();
    });

    it("should extract correct ID from complex paths", () => {
      const targetElement = document.createElement("div");
      targetElement.id = "complex-section";
      document.body.appendChild(targetElement);

      const mockEvent = {
        preventDefault: jest.fn(),
      } as unknown as React.MouseEvent<HTMLAnchorElement>;

      const handler = handleAnchorClick("/path/to/page#complex-section");
      handler(mockEvent);

      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(targetElement.scrollIntoView).toHaveBeenCalled();
      expect(window.history.pushState).toHaveBeenCalledWith(
        null,
        "",
        "#complex-section",
      );

      document.body.removeChild(targetElement);
    });

    it("should not affect external links", () => {
      const mockEvent = {
        preventDefault: jest.fn(),
      } as unknown as React.MouseEvent<HTMLAnchorElement>;

      const handler = handleAnchorClick("https://example.com");
      handler(mockEvent);

      expect(mockEvent.preventDefault).not.toHaveBeenCalled();
    });

    it("should not affect mailto links", () => {
      const mockEvent = {
        preventDefault: jest.fn(),
      } as unknown as React.MouseEvent<HTMLAnchorElement>;

      const handler = handleAnchorClick("mailto:test@example.com");
      handler(mockEvent);

      expect(mockEvent.preventDefault).not.toHaveBeenCalled();
    });

    it("should not affect tel links", () => {
      const mockEvent = {
        preventDefault: jest.fn(),
      } as unknown as React.MouseEvent<HTMLAnchorElement>;

      const handler = handleAnchorClick("tel:5551234567");
      handler(mockEvent);

      expect(mockEvent.preventDefault).not.toHaveBeenCalled();
    });
  });
});
