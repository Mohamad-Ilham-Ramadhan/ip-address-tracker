import rubik400Eot from "./fonts/rubik-v10-latin-regular.eot";
import rubik400Woff2 from "./fonts/rubik-v10-latin-regular.woff2";
import rubik400Woff from "./fonts/rubik-v10-latin-regular.woff";
import rubik400Ttf from "./fonts/rubik-v10-latin-regular.ttf";
import rubik400Svg from "./fonts/rubik-v10-latin-regular.svg";

import rubik500Eot from "./fonts/rubik-v10-latin-500.eot";
import rubik500Woff2 from "./fonts/rubik-v10-latin-500.woff2";
import rubik500Woff from "./fonts/rubik-v10-latin-500.woff";
import rubik500Ttf from "./fonts/rubik-v10-latin-500.ttf";
import rubik500Svg from "./fonts/rubik-v10-latin-500.svg";

import rubik700Eot from "./fonts/rubik-v10-latin-700.eot";
import rubik700Woff2 from "./fonts/rubik-v10-latin-700.woff2";
import rubik700Woff from "./fonts/rubik-v10-latin-700.woff";
import rubik700Ttf from "./fonts/rubik-v10-latin-700.ttf";
import rubik700Svg from "./fonts/rubik-v10-latin-700.svg";

const rubik400 = {
  fontFamily: "Rubik",
  fontStyle: "normal",
  fontWeight: 400,
  src: `url('${rubik400Eot}'),
        local(''),
        url('${rubik400Eot}?#iefix') format('embedded-opentype'),
        url('${rubik400Woff2}') format('woff2'),
        url('${rubik400Woff}') format('woff'),
        url('${rubik400Ttf}') format('truetype'),
        url('${rubik400Svg}#Rubik') format('svg'); 
  `,
};

const rubik500 = {
  fontFamily: "Rubik",
  fontStyle: "normal",
  fontWeight: 500,
  src: `url('${rubik500Eot}'),
        local(''),
        url('${rubik500Eot}?#iefix') format('embedded-opentype'),
        url('${rubik500Woff2}') format('woff2'),
        url('${rubik500Woff}') format('woff'),
        url('${rubik500Ttf}') format('truetype'),
        url('${rubik500Svg}#Rubik') format('svg'); 
  `,
};

const rubik700 = {
  fontFamily: "Rubik",
  fontStyle: "normal",
  fontWeight: 700,
  src: `url('${rubik700Eot}'),
        local(''),
        url('${rubik700Eot}?#iefix') format('embedded-opentype'),
        url('${rubik700Woff2}') format('woff2'),
        url('${rubik700Woff}') format('woff'),
        url('${rubik700Ttf}') format('truetype'),
        url('${rubik700Svg}#Rubik') format('svg'); 
  `,
};

export { rubik400, rubik500, rubik700 };
