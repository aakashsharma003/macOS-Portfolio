import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt: "Hey there! I'm the one who is building his own universe..."
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats.md",
        icon: "i-icon-park-outline:github",
        excerpt: "Here are some status about my github account..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: "i-octicon:browser",
        excerpt: "Something about this personal portfolio site..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "paytm-web",
        title: "PaytmWeb",
        file: "https://raw.githubusercontent.com/aakashsharma003/PaytmWeb/main/README.md",
        icon: "i-heroicons-solid:credit-card",
        excerpt: "A demonstration Project For Paytm transactions...",
        link: "https://github.com/Renovamen/flint"
      },
      {
        id: "portfolio-macos",
        title: "Portfolio macOS",
        file: "https://raw.githubusercontent.com/aakashsharma003/macOS-Portfolio/main/README.md",
        icon: "i-heroicons-outline:device-desktop",
        excerpt: "My portfolio website simulating macOS's GUI...",
        link: "https://github.com/Renovamen/playground-macos"
      },
      {
        id: "medium-2.0",
        title: "Medium 2.0",
        file: "https://raw.githubusercontent.com/aakashsharma003/Medium/main/README.md",
        icon: "i-mdi:web",
        excerpt: "A medium modified version with serverless backend...",
        link: "https://github.com/aakashsharma003/Medium"
      },
      {
        id: "attendance-web",
        title: "Mbm Attendance Web",
        file: "https://raw.githubusercontent.com/aakashsharma003/Mbm-Attendance-Application/main/README.md",
        icon: "i-heroicons-outline:clipboard-check",
        excerpt: "A attendance website for mbm university...",
        link: "https://github.com/aakashsharma003/Mbm-Attendance-Application"
      },
      {
        id: "aero-pay",
        title: "AeroPay",
        file: "https://raw.githubusercontent.com/aakashsharma003/AeroPay/main/README.md",
        icon: "i-heroicons-solid:cash",
        excerpt: "A payment transactions simulator...",
        link: "https://github.com/aakashsharma003/AeroPay"
      },
      {
        id: "rasl",
        title: "rasl",
        file: "https://raw.githubusercontent.com/Open-Source-Collab-Community/rasl/main/README.md",
        icon: "i-tabler:headphones",
        excerpt: "A audio streaming library...",
        link: "https://github.com/Open-Source-Collab-Community/rasl"
      }
    ]
  }
];

export default bear;
