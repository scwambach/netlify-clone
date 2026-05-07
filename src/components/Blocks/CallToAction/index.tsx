import "./styles.scss";
import { Heading } from "@/components/modules/Heading";
import { HeadingProps } from "@/utils/types";

export const CallToAction = (props: HeadingProps) => {
  return (
    <section className="page-block call-to-action">
      <div className="container">
        <Heading {...props} isCentered />
      </div>
    </section>
  );
};
