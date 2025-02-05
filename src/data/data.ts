import pic_1 from "./pictures/pic_1.jpg"
import pic_2 from "./pictures/pic_2.jpg"
import pic_3 from "./pictures/pic_3.jpg"
import pic_4 from "./pictures/pic_4.jpg"
import pic_5 from "./pictures/pic_5.jpg"
import pic_6 from "./pictures/pic_6.jpg"
import pic_7 from "./pictures/pic_7.jpg"
import pic_8 from "./pictures/pic_8.png"
import { queryToken } from "../Startpage/Searchbar/Searchbar"

export interface dataElem {
  label: string
  value: string
}

export interface linkGroup {
  title: string
  links: dataElem[]
}

/* eslint-disable */


export const links: linkGroup[] = [
  {
    title: "DND",
    links: [
      {
        label: "Inkarnate",
        value: "https://inkarnate.com/maps",
      },
      {
        label: "Dungeon Master's Guide",
        value: "https://anyflip.com/tqblu/sfae",
      },
      {
        label: "Xanthar's Guide to Everything",
        value: "https://online.anyflip.com/rmzy/oapq/mobile/index.html#p=1",
      },
      {
        label: "Player's Handbook",
        value: "https://online.anyflip.com/afgs/xkls/mobile/index.html#p=1",
      },
      {
        label: "Character Sheet",
        value:
          "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*wGS3YzhTpHWVY7ohjq1DkQ.png",
      },
    ],
  },
  {
    title: "Coding",
    links: [
      {
        label: "Vim's Lair",
        value: "https://vimm.net/?p=vault",
      },
      {
        label: "FitGirl Repacks",
        value: "https://fitgirl-repacks.site/all-my-repacks-a-z/",
      },
      {
        label: "DnD Buddy Palette",
        value: "https://coolors.co/palette/0d1b2a-1b263b-415a77-778da9-e0e1dd",
      },
      {
        label: "React Bootstrap",
        value: "https://react-bootstrap.netlify.app/",
      },
      {
        label: "Motion",
        value: "https://motion.dev/",
      },
    ],
  },
  {
    title: "Server",
    links: [
      {
        label: "SABnzbd",
        value: "http://10.0.0.174:8088/sabnzbd/",
      },
      {
        label: "ASUSTOR",
        value: "https://10.0.0.174:8079/portal/",
      },
      {
        label: "NZB Geek",
        value: "https://nzbgeek.info/dashboard.php?myaccount",
      },
      {
        label: "Plex",
        value: "https://app.plex.tv/desktop/#!/",
      },
    ],
  },
  {
    title: "Coding Practice",
    links: [
      {
        label: "My Leetcode",
        value: "https://leetcode.com/u/retrope13/",
      },
      {
        label: "CodeKata",
        value: "http://codekata.com/",
      },
      {
        label: "Interview Questions Google",
        value:
          "https://leetcode.com/discuss/interview-question/352460/Google-Online-Assessment-Questions",
      },
      {
        label: "Sithis Profile",
        value: "https://leetcode.com/u/Sithis/",
      },
      {
        label: "Clean Code",
        value: "https://refactoring.guru/refactoring/what-is-refactoring",
      },
      {
        label: "Neetcode",
        value: "https://neetcode.io/roadmap",
      },
    ],
  },
  {
    title: "Job Apps",
    links: [
      {
        label: "LinkedIn",
        value: "https://www.linkedin.com/in/sam-mckay13/",
      },
      {
        label: "GitHub",
        value: "https://github.com/Retrope13",
      },
    ],
  },
];

export const images: dataElem[] = [
  { label: "pic_1", value: pic_1 },
  { label: "pic_2", value: pic_2 },
  { label: "pic_3", value: pic_3 },
  { label: "pic_4", value: pic_4 },
  { label: "pic_5", value: pic_5 },
  { label: "pic_6", value: pic_6 },
  { label: "pic_7", value: pic_7 },
  { label: "pic_8", value: pic_8 },
];

export const searchEngines: dataElem[] = [
  {
    label: "DuckDuckGo",
    value: `https://duckduckgo.com/?q=${queryToken}`,
  },
  {
    label: "Google",
    value: `https://www.google.com/search?q=${queryToken}`,
  },
  {
    label: "Qwant",
    value: `https://qwant.com/?q=${queryToken}`,
  },
  {
    label: "Ecosia",
    value: `https://ecosia.org/search/?q=${queryToken}`,
  },
];

export type FastForwards = Record<string, string>;

export interface Search {
  engine: string;
  fastForward: FastForwards;
}

export const searchSettings: Search = {
  engine: searchEngines[0].value,
  fastForward: {
    deepl: "https://deepl.com/",
    maps: "https://google.de/maps/",
    reddit: "https://reddit.com/",
    github: "https://github.com/",
    gitlab: "https://gitlab.com/",
    youtube: "https://youtube.com/",
  },
};

export interface colorsType {
  [key: string]: string;
  "--bg-color": string;
  "--default-color": string;
  "--accent-color": string;
  "--accent-color2": string;
}

export interface Theme {
  name: string;
  colors: colorsType;
  image: string;
}

export const themes: Theme[] = [
  {
    name: "Catppuccin",
    image:
      "https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png",
    colors: {
      "--bg-color": "#24273A",
      "--default-color": "#CAD3F5",
      "--accent-color": "#C6A0F6",
      "--accent-color2": "#8AADF4",
    },
  },
  {
    name: "DeathAndMilk",
    image: pic_1,
    colors: {
      "--bg-color": "#2E2E2E",
      "--default-color": "#E6E6E6",
      "--accent-color": "#FFB4E6",
      "--accent-color2": "#B4FFE6",
    },
  },
  {
    name: "Pop!OS",
    image:
      "https://oswallpapers.com/wp-content/uploads/2019/04/kate-hazen-unleash-your-robot.jpg",
    colors: {
      "--bg-color": "#333136",
      "--default-color": "#2BC5EB",
      "--accent-color": "#FCD307",
      "--accent-color2": "#2BC5EB",
    },
  },
  {
    name: "Dark Souls",
    image:
      "https://i.pinimg.com/originals/16/74/db/1674dbae45cd38f3d3b4c00dc8616bd7.gif",
    colors: {
      "--bg-color": "#32323C",
      "--default-color": "#A0A08C",
      "--accent-color": "#9A6650",
      "--accent-color2": "#461E28",
    },
  },
  {
    name: "S.E.Lain",
    image:
      "https://64.media.tumblr.com/54a945edd2641e20859d6f6537cd7423/tumblr_pwa4bogz4N1qze3hdo2_r1_500.gifv",
    colors: {
      "--bg-color": "#0a1a25",
      "--default-color": "#a6b7ab",
      "--accent-color": "#94656b",
      "--accent-color2": "#57182e",
    },
  },
  {
    name: "Kitties",
    image:
      "https://64.media.tumblr.com/5a232d5c0999d02388d78e5c1025f94f/0572516693bf4014-3d/s500x750/0306dc89b657093529aa3ce96e64b9c43572e901.gifv",
    colors: {
      "--bg-color": "#495662",
      "--default-color": "#d1f1fa",
      "--accent-color": "#80aad4",
      "--accent-color2": "#e8a9b7",
    },
  },
  {
    name: "pretty chill",
    image:
      "https://e4p7c9i3.stackpathcdn.com/wp-content/uploads/2019/05/tumblr_oymsnbT0111vjxiz1o1_1280.gif?iv=165",
    colors: {
      "--bg-color": "#397d76",
      "--default-color": "#f1daba",
      "--accent-color": "#c5bdb5",
      "--accent-color2": "#93a662",
    },
  },
  {
    name: "Tartarus",
    image:
      "https://64.media.tumblr.com/8de9e4d31a132f7617ecc05e6a0f8807/tumblr_nd048m6QFH1tqptlzo1_500.gifv",
    colors: {
      "--bg-color": "#282828",
      "--default-color": "#D4BE98",
      "--accent-color": "#7DAEA3",
      "--accent-color2": "#A9B665",
    },
  },
  {
    name: "Pastel Aesthetic",
    image: "https://i.imgur.com/bZHurZn.jpeg",
    colors: {
      "--bg-color": "#2E2E2E",
      "--default-color": "#F3C9CB",
      "--accent-color": "#6D79BF",
      "--accent-color2": "#FBECEF",
    },
  },
  {
    name: "Bohemian",
    image: "https://i.imgur.com/gcZ6fmk.jpeg",
    colors: {
      "--bg-color": "#2E2E2E",
      "--default-color": "#D6B29A",
      "--accent-color": "#B35000",
      "--accent-color2": "#FBECEF",
    },
  },
  {
    name: "Modern Boho",
    image: "https://i.imgur.com/HkEcwGl.jpeg",
    colors: {
      "--bg-color": "#2E2E2E",
      "--default-color": "#C66B3C",
      "--accent-color": "#F6BC7C",
      "--accent-color2": "#54573C",
    },
  },
  {
    name: "Gruvbox Inspired Green",
    image: "https://i.imgur.com/ISjs7cg.jpeg",
    colors: {
      "--bg-color": "#2E2E2E",
      "--default-color": "#CC9A52",
      "--accent-color": "#647D44",
      "--accent-color2": "#FCE4B4",
    },
  },
  {
    name: "Beach",
    image: "https://i.imgur.com/gcW1jul.jpeg",
    colors: {
      "--bg-color": "#2E2E2E",
      "--default-color": "#E3C9BC",
      "--accent-color": "#91C6CC",
      "--accent-color2": "#F0F8FA",
    },
  },
];
