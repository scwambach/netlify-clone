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
import { HeadingLevel } from "@/utils/types";

export const pageData = {
  header: {
    title: "howdy!",
    message: "Welcome to my Netlify tribute site. I’d love to work for you!",
    button: {
      href: "mailto:scott@example.com?subject=Hello&body=I%20would%20love%20to%20work%20with%20you!",
      text: "Let's chat!",
      className: "primary",
    },
  },
  heroBanner: {
    title: "I'm Scott and I love Netlify.",
    headingLevel: 1 as HeadingLevel,
    message:
      "I'm a senior front-end engineer with 13 years of experience who has used Netlify exclusively to host my personal and freelance sites.",
    image: {
      src: heroImage.src,
      width: heroImage.width,
      height: heroImage.height,
      alt: "Hero Image",
      blurDataURL: heroImage.blurDataURL,
    },
    buttons: [
      {
        href: "/ScottWambachResume.pdf",
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
      headingLevel: 2 as HeadingLevel,
      title: "Why I love Netlify.",
      message:
        "It's such an easy tool to use. It allows for a seemless transfer with my clients.",
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
          "From the UI to the deploy pipeline, Netlify's attention to detail is something I genuinely admire as both a developer and a design-minded engineer.",
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
          "Branch deploys, instant rollbacks, and preview URLs. Netlify's project management tooling makes client handoffs and team collaboration painless.",
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
          "I've never had a client ask me why the site is slow. That's Netlify.",
      },
    ],
  },
  callout: {
    heading: {
      eyebrow: "Netlify values",
      headingLevel: 2 as HeadingLevel,
      title: "Netlify values that resonate with me.",
      message:
        "I've been remote since 2021 and thrive in async, distributed teams. Inclusivity, collaboration, and genuine passion for craft are values I bring to work every day.",
    },
    items: [
      "Inclusivity and diversity is important",
      "Passionate people who can have fun",
      "Teamwork and collaboration is key",
      "Remote-first and people-focused",
    ],
    image: {
      src: computer.src,
      width: computer.width,
      height: computer.height,
      alt: "Computer Image",
      blurDataURL: computer.blurDataURL,
    },
  },
  mediaCards2: {
    heading: {
      eyebrow: "What I can do",
      headingLevel: 2 as HeadingLevel,
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
          "13 years of front-end engineering across marketing teams, agencies, SaaS companies, and freelance. From local businesses to Fortune 500 clients.",
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
          "I've worked in-house at InVision's global marketing team, at a digital agency, and now in government tech at Coforma. I show up fully in every context.",
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
          "I'd rather ship something great together than be right alone. I collaborate easily with designers, marketers, and stakeholders. My wife is a graphic designer, so that skill runs deep.",
      },
    ],
  },
  history: {
    heading: {
      title: "Work experience.",
      headingLevel: 2 as HeadingLevel,
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
      headingLevel: 3 as HeadingLevel,
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
        message:
          "I'm the guitarist and producer in The Chugs! We're a Hamm's fueled punk band from Evansville. Our album Eternal Brewtopia hit #1 on Apple Music's punk chart in 2025.",
        buttons: [
          {
            href: "https://thechugsband.com",
            text: "Check out our music",
            className: "primary",
          },
        ],
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
          "I bought an old house and I'm slowly fixing it up with my wife! It's humbling, time-consuming, and I love it!",
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
          "I have three cats. They're named Fiddle, Mandolin, and Poppy. I love them very much and they are very spoiled.",
      },
    ],
  },
  cta: {
    title: "I would love to join the Netlify team!",
    headingLevel: 3 as HeadingLevel,
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
        href: "/ScottWambachResume.pdf",
        text: "Download my resume",
      },
      socials: [
        "https://github.com/scwambach",
        "https://www.linkedin.com/in/scott-wambach-94b580b7/?skipRedirect=true",
        "https://www.instagram.com/scottcwambach/",
      ],
    },
  },
};
