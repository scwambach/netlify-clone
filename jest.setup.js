// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// Mock react-social-icons to avoid ESM import issues
jest.mock("react-social-icons", () => ({
  SocialIcon: (props) => (
    <a href={props.url} data-testid="social-icon" className={props.className}>
      Social Icon
    </a>
  ),
}));

// Suppress Next.js Link intersection observer warnings in tests
// These are internal to Next.js and not actionable in user code
const originalError = console.error;
console.error = (...args) => {
  // Convert all args to string to check the full message
  const fullMessage = args.join(" ");

  if (
    fullMessage.includes("not wrapped in act") &&
    fullMessage.includes("LinkComponent")
  ) {
    return;
  }
  originalError.call(console, ...args);
};
