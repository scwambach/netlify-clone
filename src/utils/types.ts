export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface LinkProps {
  href: string;
  className?: string;
  text: string;
}

export interface HeadingProps {
  eyebrow?: string;
  title: string;
  message?: string;
  isCentered?: boolean;
  headingLevel?: HeadingLevel;
  className?: string;
}
