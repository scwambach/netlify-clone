export interface LinkProps {
  href: string;
  className?: string;
  text: string;
}

export interface HeadingProps {
  eyebrow?: string;
  title: string;
  message?: string;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}
