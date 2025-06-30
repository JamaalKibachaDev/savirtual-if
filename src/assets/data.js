//data imports

//carousel images
//import img1 from "./saav-carousel-1.jpg";
import img1_1 from "./crj-700.jpg";
import img1_2 from "./saav-q400-tail.jpg";

//staff pfp
import img2 from "./josiah-dennis-pfp.jpeg";
import img3 from "./lufthansa1-pfp.jpeg";
import img21 from "./dimitrios__pfp.jpeg";
import img22 from "./rile__pfp.png";
import img23 from "./synxchazz__pfp.jpeg";
import img24 from "./jurassicworld4eva__pfp.png";
import img25 from "./cappy__pfp.jpeg";
import img26 from "./kofi__pfp.jpeg";
import img27 from "./aviator1__pfp.jpeg";
import img28 from "./sqdwg8vczr__pfp.png";
import img29 from "./garyevans__pfp.jpeg";
import img30 from "./actionjack__pfp.jpeg";
import img31 from "./mousemd__pfp.jpeg";
import img32 from "./educatelearn2__pfp.png";
import img33 from "./start__pfp.jpeg";

//fleet
import img4 from "./a330-fleet.jpg";
import img5 from "./saav-a350.jpeg";
import img6 from "./saav-a346.jpg";
import img7 from "./saav-a320.jpeg";
import img8 from "./saav-a319.jpeg";
import img9 from "./saav-b742.jpg";
import img10 from "./saav-b738.jpeg";
import img11 from "./saav-dash8.jpg";
import img12 from "./saav-crj700.jpg";
import img13 from "./saav-crj-200.jpg";
import img20 from "./f18-fleet.jpg";

//ranks
import img14 from "./trainee_rk.jpeg";
import img15 from "./fofficer_rk.jpeg";
import img16 from "./snr_pilot_rk.jpeg";
import img17 from "./captain_rk.jpeg";

//hubs
import img18 from "./faor__airport.jpeg";
import img19 from "./fact__airport.jpeg";

export const homeHeader = [
  {
    id: "1",
    title: "Welcome to South African Virtual",
    description:
      "Welcome to South African Virtual, we make sure to take care of our pilots at all times. Our VA is highly realistic with a fleet ranging from the Q400 to the B742, with our large fleet we are able to reach many parts of the world including Perth Australia to Atlanta Georgia.We always enjoy seeing new pilots!"
  }
];

export const homeCarousel = [
  //carouselhome
  {
    id: "2",
    image: img4,
    category: "carousel",
    alt: "carouselImage",
  },

  {
    id: "3",
    image: img1_1,
    category: "carousel",
    alt: "carouselImage",
  },

  {
    id: "4",
    image: img1_2,
    category: "carousel",
    alt: "carouselImage",
  },
];

export const homeCards = [
  //homeCards
  {
    id: "5",
    title: "Route Database 🧑‍💻",
    description:
      "Our Route Database is specially built to achieve maximum user friendliness and ensure easier navigation during flight briefings.",
  },

  {
    id: "6",
    title: "SAAV Staff 🧑‍✈️",
    description:
      "Our staff are highly trained & experienced in their fields of work and are always ready to help. Feel free to communicate with us at any time through our socials or via IFC.",
  },

  {
    id: "7",
    title: "Ranking System 🌟",
    description:
      "Pilots advance through ranks starting from Trainee all the way upto Senior Pilot by logging flight hours.This encourages progression and realism. Higher ranks will be granted access to more aircraft and events.",
  },
];

export const homeAccordion = [
  {
    id: "8",
    title: "Why Join Us?",
    description:
      "We offer a vast array of destinations & a large fleet of aircraft ranging from the Q-400 to the B747 giving you a wide range of options to choose from.",
    collapseId: "1",
  },

  {
    id: "9",
    title: "Crew Operations🧑‍✈️",
    description:
      "At SA Virtual, our crew operations mirror real-world airline procedures — from flight planning and dispatch to scheduled routes and active ATC participation — offering our pilots an immersive, structured, and rewarding flying experience.",
    collapseId: "2",
  },

  {
    id: "10",
    title: "Application Process📃",
    description:
      "Our application process is seamless & user-friendly to allow for smooth and easy registrations.",
    collapseId: "3",
  },
];

export const applyHeader = [
  {
    id: "11",
    title: "VA Application",
    description:
      "We appreciate your kind interest in applying to join our VA. Please check out the requirements before sending out your applications. If you meet them, feel free to send a PM to our CEO or COO on the Infinite Flight Community server or send us an email in order to be scheduled for a pilot test🧑‍✈️",
  },
];

export const applyRequirements = [
  //applyNow

  {
    id: "12",
    value: "You must be 13 years old or above",
  },

  {
    id: "13",
    value: "You must be at least Grade 2",
  },

  {
    id: "14",
    value: "Valid Infinite Flight Pro Subscription",
  },

  {
    id: "15",
    value: "Active IFC account (Must be in good standing)",
  },
];

export const staffHeader = [
  {
    id: "16",
    title: "About the team",
  },
];

export const staffPage = [
  //staffPage

  {
    id: "1",
    image: img2,
    description:
      "Welcome New Pilots!👋 I am Josiah Dennis, a 14 year old aviator who has been flying in the virual skies for over 3 years. Thank you for having a look at our website and we hope to see you soon.",
    username: "Josiah Dennis",
    role: "- SAAV CEO",
    alt: "staff-pfp",
  },

  {
    id: "18",
    image: img3,
    description:
      "On Behalf of the Crew, Welcome to South African Virtual, pilots! Here you can fly a large variety of routes and aircrafts together with other SAAV pilots. Have fun!🛫",
    username: "Lufthansa1",
    role: "- SAAV COO",
    alt: "staff-pfp",
  },
];

export const SAAVFleet = [
  {
    id: "19",
    aircraft: "Airbus A330-300",
    image: img4,
    range: "13,450",
    crzSpeed: "0.82",
    maxAlt: "410",
    capacity: "287",
    alt: "a330img",
  },

  {
    id: "20",
    aircraft: "Airbus A350-900",
    image: img5,
    range: "15,000",
    crzSpeed: "0.85",
    maxAlt: "430",
    capacity: "440",
    alt: "a350img",
  },

  {
    id: "21",
    aircraft: "Airbus A340-600",
    image: img6,
    range: "14,450",
    crzSpeed: "0.82",
    maxAlt: "410",
    capacity: "370",
    alt: "a340img",
  },

  {
    id: "22",
    aircraft: "Airbus A320",
    image: img7,
    range: "6,100",
    crzSpeed: "0.78",
    maxAlt: "390",
    capacity: "175",
    alt: "a320img",
  },

  {
    id: "23",
    aircraft: "Airbus A319",
    image: img8,
    range: "6,900",
    crzSpeed: "0.78",
    maxAlt: "400",
    capacity: "136",
    alt: "a319img",
  },

  {
    id: "24",
    aircraft: "Boeing 747-200",
    image: img9,
    range: "12,150",
    crzSpeed: "0.84",
    maxAlt: "450",
    capacity: "405",
    alt: "747img",
  },

  {
    id: "25",
    aircraft: "Boeing 737-800",
    image: img10,
    range: "5,400",
    crzSpeed: "0.78",
    maxAlt: "410",
    capacity: "189",
    alt: "737img",
  },

  {
    id: "26",
    aircraft: "Dash 8 Q-400",
    image: img11,
    range: "2,000",
    crzSpeed: "0.52",
    maxAlt: "250",
    capacity: "89",
    alt: "q400img",
  },

  {
    id: "27",
    aircraft: "CRJ-700",
    image: img12,
    range: "2,550",
    crzSpeed: "0.78",
    maxAlt: "410",
    capacity: "67",
    alt: "crj7img",
  },

  {
    id: "28",
    aircraft: "CRJ-200",
    image: img13,
    range: "3,150",
    crzSpeed: "0.74",
    maxAlt: "410",
    capacity: "51",
    alt: "crj2img",
  },

  {
    id: "29",
    aircraft: "F/A-18E Super Hornet",
    image: img20,
    range: "2,300",
    crzSpeed: "0.89",
    maxAlt: "500",
    capacity: "--",
    alt: "crj2img",
  },
];

export const routeHeader = [
  {
    id: "",
    description:
      "We serve many passengers with many different backgrounds out of our two major hubs: O.R. Tambo International Airport & Cape Town International Airport. Our joy is flying, yours is sitting back and relaxing as we bring the comfort to the Virtual world. You can reserve a gate on our discord server without any issues.",
  },
];

export const Ranks = [
  { id: "30", image: "/", alt: "/", title: "/", description: "/" },
  { id: "31", image: "/", alt: "/", title: "/", description: "/" },
  { id: "32", image: "/", alt: "/", title: "/", description: "/" },
  { id: "33", image: "/", alt: "/", title: "/", description: "/" },
  { id: "34", image: "/", alt: "/", title: "/", description: "/" },
];

export const StaffCrewHeader = [
  {
    id: "35",
    title: "Our Staff: ",
    description:
      "We truly appreciate the work and effort put in by our staff in the VA Operations. Feel free to reach out to them via IFC in case of any inquiries:",
  },
];

export const StaffCrew = [
  {
    id: "36",
    name: "Dimitrios_TA",
    Rank: "Contracting Officer Rep",
    link: new URL(
      "https://community.infiniteflight.com/u/dimitrios_ta/summary"
    ),
    image: img21,
  },

  {
    id: "37",
    name: "Rile",
    Rank: "Chief Financial Officer",
    link: new URL("https://community.infiniteflight.com/u/rile/summary"),
    image: img22,
  },

  {
    id: "38",
    name: "SynxChazz",
    Rank: "Chief Marketing Officer",
    link: new URL("https://community.infiniteflight.com/u/SynxChazz/summary"),
    image: img23,
  },

  {
    id: "39",
    name: "JurassicWorld4Ever",
    Rank: "Event Manager",
    link: new URL(
      "https://community.infiniteflight.com/u/JurassicWorld4Ever/summary"
    ),
    image: img24,
  },
  {
    id: "40",
    name: "Cappy",
    Rank: "Human Resource",
    link: new URL("https://community.infiniteflight.com/u/cappy/summary"),
    image: img25,
  },
  {
    id: "41",
    name: "Uncle_Kofi",
    Rank: "HR Assistant",
    link: new URL("https://community.infiniteflight.com/u/Uncle_Kofi/summary"),
    image: img26,
  },
  {
    id: "42",
    name: "Aviator1",
    Rank: "Social Media Marketing",
    link: new URL("https://community.infiniteflight.com/u/Avaitor1/summary"),
    image: img27,
  },

  {
    id: "",
    name: "sqdwg8vczr",
    Rank: "SMM Assistant",
    link: new URL("https://community.infiniteflight.com/u/sqdwg8vczr/summary"),
    image: img28,
  },
  {
    id: "43",
    name: "Gary_Evans",
    Rank: "Route Manager",
    link: new URL("https://community.infiniteflight.com/u/Gary_Evans/summary"),
    image: img29,
  },

  {
    id: "",
    name: "Action_Jackson",
    Rank: "Flight Supervisor",
    link: new URL(
      "https://community.infiniteflight.com/u/Action_jackson/summary"
    ),
    image: img30,
  },

  {
    id: "",
    name: "Mouse_MD",
    Rank: "Data Analysis Officer",
    link: new URL("https://community.infiniteflight.com/u/Mouse_MD/summary"),
    image: img31,
  },

  {
    id: "44",
    name: "Educate_Learn2",
    Rank: "CEO Aids",
    link: new URL(
      "https://community.infiniteflight.com/u/Educate_Learn2/summary"
    ),
    image: img32,
  },
  {
    id: "45",
    name: "ST-ART",
    Rank: "CEO Aids",
    link: new URL("https://community.infiniteflight.com/u/ST-ART/summary"),
    image: img33,
  },
];

export const ranksData = [
  {
    id: "46",
    image: img14,
    description: "Trainee Rank",
  },

  {
    id: "47",
    image: img15,
    description: "First Officer",
  },

  {
    id: "48",
    image: img17,
    description: "Captain",
  },

  {
    id: "49",
    image: img16,
    description: "Senior Pilot",
  },
];

export const RanksHeader = [
  {
    id: "50",
    title: "SAAV Pilot Ranks",
  },
];

export const HubAiport1 = [
  {
    id: "51",
    image: img18,
    name: "FAOR(O.R Tambo) Intl Airport",
    opened: "1952",
    elevation: "5,558 ft / 1,694 m",
    rwy1: "03L/21R - 14,500 ft",
    rwy2: "03R/21L - 11,155 ft",
    alt: "faor__airport",
  },
];

export const HubAiport2 = [
  {
    id: "52",
    image: img19,
    name: "Cape Town Intl Airport",
    opened: "1954",
    elevation: "151 ft / 46 m",
    rwy1: "01/19 - 10,500 ft",
    rwy2: "16/34 - 5,581 ft",
    alt: "fact__airport",
  },
];

export const PilotTestimonies1 = [
  {
    id: "",
    testimonial:
      "The supportive community and detailed training have helped me gain valuable experience, boosting my skills and confidence in the virtual skies. Highly recommend joining!👌",
    rank: "SAAV Senior Pilot",
  },
];

export const PilotTestimonies2 = [
  {
    id: "",
    testimonial:
      "I had a smooth application process and an overall great experience with the team during the training sessions. Glad to be a part of the VA! Cheers🥂 ",
    rank: "SAAV Trainee",
  },
];
