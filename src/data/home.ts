import computer from "@/images/computer.png";
import heroImage from "@/images/hello.png";
import stars from "@/images/stars.png";
import management from "@/images/management.png";
import speed from "@/images/speed.png";
import star from "@/images/experience.png";
import sunglasses from "@/images/workEthic.png";
import balloon from "@/images/noEgo.png";
import guitar from "@/images/guitar.png";
import house from "@/images/house.png";
import cat from "@/images/cat.png";

export const pageData = {
  header: {
    title: "howdy!",
    message: "Welcome to my Netlify tribute site. I'd love to work for you!",
    button: {
      href: "mailto:scott@example.com?subject=Hello&body=I%20would%20love%20to%20work%20with%20you!",
      text: "Let's chat!",
      className: "primary",
    },
  },
  heroBanner: {
    title: "I'm Scott and I love Netlify.",
    message:
      "I'm a software engineer with more than 10 years of experience who exclusively uses Netlify to host my sites.",
    image: {
      src: heroImage.src,
      width: heroImage.width,
      height: heroImage.height,
      alt: "Hero Image",
      blurDataURL: heroImage.blurDataURL,
    },
    buttons: [
      {
        href: "/resume.pdf",
        text: "Download my resume",
        className: "primary",
      },
      {
        href: "https://scottwamba.ch/#work",
        text: "See my work",
        className: "secondary",
      },
    ],
  },
  mediaCards: {
    heading: {
      eyebrow: "Time to gush",
      title: "Why I love Netlify.",
      message:
        "It’s such an easy tool to use. It allows for a seemless transfer with my clients.",
    },
    items: [
      {
        title: "Clean design",
        image: {
          src: stars.src,
          width: stars.width,
          height: stars.height,
          alt: "Stars Image",
          blurDataURL: stars.blurDataURL,
        },
        message:
          "Nunc dictum vehicula turpis sed ornare. Nullam sed commodo libero. Duis suscipit.",
      },
      {
        title: "Project management",
        image: {
          src: management.src,
          width: management.width,
          height: management.height,
          alt: "Management Image",
          blurDataURL: management.blurDataURL,
        },
        message:
          "Nunc dictum vehicula turpis sed ornare. Nullam sed commodo libero. Duis suscipit.",
      },
      {
        title: "Security and speed",
        image: {
          src: speed.src,
          width: speed.width,
          height: speed.height,
          alt: "Speed Image",
          blurDataURL: speed.blurDataURL,
        },
        message:
          "Nunc dictum vehicula turpis sed ornare. Nullam sed commodo libero. Duis suscipit.",
      },
    ],
  },
  callout: {
    heading: {
      eyebrow: "Netlify values",
      title: "Netlify values that resonate with me.",
      message: "I’m a fan of Netlify’s company values",
    },
    items: [
      "Inclusivity and diversity is important",
      "Passionate people who can have fun",
      "Teamwork and collaboration is key",
      "Remote-first and people-focused",
    ],
    image: computer,
  },
  mediaCards2: {
    heading: {
      eyebrow: "What I can do",
      title: "Here's what I can offer.",
      message: "I have experience working",
    },
    items: [
      {
        title: "Experience",
        image: {
          src: star.src,
          width: star.width,
          height: star.height,
          alt: "Star Image",
          blurDataURL: star.blurDataURL,
        },
        message:
          "Nunc dictum vehicula turpis sed ornare. Nullam sed commodo libero. Duis suscipit.",
      },
      {
        title: "Work Ethic",
        image: {
          src: sunglasses.src,
          width: sunglasses.width,
          height: sunglasses.height,
          alt: "Sunglasses Image",
          blurDataURL: sunglasses.blurDataURL,
        },
        message:
          "Nunc dictum vehicula turpis sed ornare. Nullam sed commodo libero. Duis suscipit.",
      },
      {
        title: "Low-Ego Development",
        image: {
          src: balloon.src,
          width: balloon.width,
          height: balloon.height,
          alt: "Balloon Image",
          blurDataURL: balloon.blurDataURL,
        },
        message:
          "Nunc dictum vehicula turpis sed ornare. Nullam sed commodo libero. Duis suscipit.",
      },
    ],
  },
  history: {
    heading: {
      title: "Work experience.",
    },
    cards: [
      {
        company: "Coforma",
        title: "Senior Software Engineer",
        date: "2022 - present",
        description:
          "Collaborate with the product team, government/client stakeholders, and other contractors to build new systems and make improvements to existing systems. Design and spec out major functionality. Participate in planning, including breaking down requirements into tasks. Test software development methodology in an agile environment. Work  alongside other engineers on the team to elevate technology and consistently apply best practices. Have an eye on accessibility, always.",
        button: {
          href: "https://coforma.io",
          text: "Coforma Site",
          className: "primary",
        },
      },
      {
        company: "InVision",
        title: "Front-End Engineer",
        date: "2021 - 2022",
        description:
          "Working within the in-house marketing team of a leading, global visual collaboration platform. Facilitating content migration from WordPress to Sanity.io. Performing maintenance on the InVision site while ensuring brand continuity by working within the established design systems.",
        button: {
          href: "https://www.invisionapp.com/",
          text: "InVision Site (Now Miro)",
          className: "primary",
        },
      },
      {
        company: "Redstitch",
        title: "Senior Front-End Developer",
        date: "2014 - 2020",
        description:
          "Developing web applications, marketing websites, and communications from local clients to Fortune 500 companies. Collaborating with global brands and subcontracting for global agencies. Working closely with development teams with a management role since 2019.",
        button: {
          href: "https://www.redstitchdigital.com/",
          text: "Redstitch Site",
          className: "primary",
        },
      },
      {
        company: "Wambach Web Development",
        title: "Owner & Engineer",
        date: "2012 - present",
        description:
          "Developing custom fullstack websites with Netlify, Next.js, and Sanity.io, while providing ongoing technical support to freelance clients.",
        button: {
          href: "https://scottwamba.ch",
          text: "My Site",
          className: "primary",
        },
      },
    ],
  },
  mediaCards3: {
    heading: {
      title: "In my free time...",
      isCentered: true,
    },
    items: [
      {
        title: "I'm in a band",
        image: {
          src: guitar.src,
          width: guitar.width,
          height: guitar.height,
          alt: "Guitar Image",
          blurDataURL: guitar.blurDataURL,
        },
        message: "I’m the guitarist in a band called The Chugs and I ",
      },
      {
        title: "I work on my old house",
        image: {
          src: house.src,
          width: house.width,
          height: house.height,
          alt: "House Image",
          blurDataURL: house.blurDataURL,
        },
        message:
          "Nunc dictum vehicula turpis sed ornare. Nullam sed commodo libero. Duis suscipit.",
      },
      {
        title: "I take care of my cats",
        image: {
          src: cat.src,
          width: cat.width,
          height: cat.height,
          alt: "Cat Image",
          blurDataURL: cat.blurDataURL,
        },
        message:
          "I have three cats that I love very much. They are named after my favorite video game characters: Link, Zelda, and Ganon.",
      },
    ],
  },
  cta: {
    title: "I would love to join the Netlify team!",
    buttons: [
      {
        href: "mailto:scott@example.com?subject=Hello&body=I%20would%20love%20to%20work%20with%20you!",
        text: "Let's chat!",
        className: "primary",
      },
      {
        href: "https://scottwamba.ch/",
        text: "Check out my site",
        className: "primary",
      },
    ],
  },
  footer: {
    personalInfo: {
      name: "Scott Wambach",
      phone: "812.204.0200",
      email: "scott@scottwamba.ch",
      website: {
        href: "https://scottwamba.ch",
        text: "scottwamba.ch",
      },
    },
    links: {
      resume: {
        href: "/scottwambachResume.pdf",
        text: "Download my resume",
      },
      socials: [
        "https://www.linkedin.com/in/scott-wambach-94b580b7/?skipRedirect=true",
        "https://www.instagram.com/scottcwambach/",
      ],
    },
  },
};
