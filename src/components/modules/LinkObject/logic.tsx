export const handleAnchorClick =
  (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if href contains # for anchor link
    if (href.includes("#")) {
      e.preventDefault();

      // Extract the ID from the href (handle both "#id" and "/path#id" formats)
      const hashIndex = href.indexOf("#");
      const targetId = href.substring(hashIndex + 1);

      if (targetId) {
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          // Update URL hash without triggering page jump
          window.history.pushState(null, "", `#${targetId}`);
        }
      }
    }
  };
