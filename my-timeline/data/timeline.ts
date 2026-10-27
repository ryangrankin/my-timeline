
export type TimelineCategory =
  | "life"
  | "education"
  | "work"
  | "projects"
  | "extracurriculars";

export type TimelineEvent = {
  id: string;
  year: string;
  sortYear: number;
  title: string;
  category: TimelineCategory;
  description: string;
  reflection?: string;
  image?: string;
};

export const timelineEvents: TimelineEvent[] = [
  {
    id: "1",
    year: "2005",
    sortYear: 2005,
    title: "Born in Vermont",
    category: "life",
    description:
      "Born in Burlington, Vermont, and raised in a family with two parents working as computer engineers, as the oldest of 3 children.",
    reflection:
      "Growing up around technology gave me an early appreciation for computers and problem-solving, while my own interests developed across history, culture, and creative pursuits.",
  },
  {
    id: "2",
    year: "Childhood",
    sortYear: 2010,
    title: "Growing Up in the Green Mountains",
    category: "life",
    description:
      "Spent my childhood in a small rural Vermont community surrounded by the Green Mountains.",
    reflection:
      "Growing up in Vermont shaped my appreciation for community, nature, and independence. As I got older, I became increasingly curious about exploring new places, meeting people from different backgrounds, and understanding the world beyond my hometown.",
  },
  {
    id: "3",
    year: "2016",
    sortYear: 2016,
    title: "Moving to Richmond",
    category: "life",
    description:
      "Moved from the Bolton Mountain area to Richmond, Vermont.",
  },
  {
    id: "4",
    year: "2017–2023",
    sortYear: 2017,
    title: "My First Jobs",
    category: "work",
    description:
      "Began babysitting for local families, developing responsibility and independence from a young age.",
  },
  {
    id: "5",
    year: "2018–2023",
    sortYear: 2018,
    title: "Working in My Community",
    category: "work",
    description:
      "Earned money mowing lawns and completing seasonal jobs around my hometown.",
    reflection:
      "Taking on work early helped me develop a strong work ethic, independence, and an appreciation for the effort behind earning and managing money.",
  },
  {
    id: "6",
    year: "2019",
    sortYear: 2019,
    title: "Starting High School",
    category: "education",
    description:
      "Began attending Mount Mansfield Union High School in Vermont.",
    reflection:
      "High school gave me opportunities to explore my interests in history, technology, public speaking, and community involvement.",
  },
  {
    id: "7",
    year: "2020",
    sortYear: 2020,
    title: "Adapting During COVID-19",
    category: "life",
    description:
      "Navigated the challenges of attending high school during the COVID-19 pandemic.",
    reflection:
      "The pandemic changed how I experienced education and social connection, requiring flexibility and independence during an important period of my life.",
  },
  {
    id: "8",
    year: "Summer 2021",
    sortYear: 2021.1,
    title: "A Summer in Florida",
    category: "life",
    description:
      "Spent part of the summer in Florida with extended family, making memories outside my hometown, and adjusting to a post-covid world.",
  },
  {
    id: "9",
    year: "2021",
    sortYear: 2021.2,
    title: "Youth Soccer Coaching",
    category: "extracurriculars",
    description:
      "Volunteered as a youth soccer coach, helping younger players develop skills and confidence.",
    reflection:
      "Coaching introduced me to the importance of encouragement, patience, and adapting my communication to different people.",
  },
  {
    id: "10",
    year: "2021",
    sortYear: 2021.3,
    title: "Entering the Restaurant Industry",
    category: "work",
    description:
      "Worked as a seasonal hostess at Lulu Buffets, beginning my experience in hospitality.",
  },
  {
    id: "11",
    year: "2021–2023",
    sortYear: 2021.4,
    title: "Vermont Tap House",
    category: "work",
    description:
      "Worked as a hostess and later took on supervisory responsibilities in a busy restaurant environment.",
    reflection:
      "Hospitality taught me how to stay organized under pressure, communicate effectively, and work with people from many different backgrounds.",
  },
  {
    id: "12",
    year: "High School",
    sortYear: 2022.1,
    title: "Developing a Curiosity About Culture",
    category: "life",
    description:
      "Became increasingly interested in how race, culture, history, and community shape people's experiences.",
    reflection:
      "Growing up in a relatively small and culturally homogeneous community encouraged me to look beyond my immediate surroundings. Conversations with friends and my interest in history sparked questions about identity, representation, and how different people experience society.",
  },
  {
    id: "13",
    year: "2022",
    sortYear: 2022.2,
    title: "Exploring American History",
    category: "education",
    description:
      "Deepened my interest in American history, politics, and society through high school coursework.",
    reflection:
      "History had long been one of my favorite subjects. I especially enjoyed examining how historical events, social movements, and institutions continue to influence contemporary life.",
  },
  {
    id: "14",
    year: "2022",
    sortYear: 2022.3,
    title: "Joining Mock Trial",
    category: "extracurriculars",
    description:
      "Joined my high school's Mock Trial team, developing skills in research, legal reasoning, and public speaking.",
  },
  {
    id: "15",
    year: "2022–2023",
    sortYear: 2022.4,
    title: "Challenging Expectations",
    category: "education",
    description:
      "Developed my interest in pursuing computer science while navigating a classroom where women were significantly underrepresented.",
    reflection:
      "My early experiences in computer science encouraged me to challenge expectations and pursue opportunities outside my comfort zone. I became determined to develop my technical abilities and demonstrate that I could succeed in a demanding field.",
  },
  {
    id: "16",
    year: "2022",
    sortYear: 2022.5,
    title: "Volunteering Through Dance",
    category: "extracurriculars",
    description:
      "Volunteered with Arabesque Dance Studio as an afterschool caretaker, contributing to activities in my local community.",
  },
  {
    id: "17",
    year: "2022",
    sortYear: 2022.6,
    title: "Glory Burger",
    category: "work",
    description:
      "Worked as a line cook with Glory Burger, gaining experience in food truck operations and event catering.",
  },
  {
    id: "18",
    year: "2022–2023",
    sortYear: 2022.7,
    title: "Panera Bread",
    category: "work",
    description:
      "Worked as a line cook while balancing high school and other responsibilities.",
  },
  {
    id: "19",
    year: "January 2023",
    sortYear: 2023.05,
    title: "Mock Trial State Champions",
    category: "extracurriculars",
    description:
      "Won the Vermont state Mock Trial competition alongside my high school team.",
    reflection:
      "Competing in Mock Trial strengthened my ability to research complex issues, construct arguments, communicate confidently, and collaborate toward a shared goal. Winning the state championship was a memorable achievement for our team.",
  },
  {
    id: "20",
    year: "2023",
    sortYear: 2023.1,
    title: "Building My Programming Foundation",
    category: "education",
    description:
      "Expanded my programming knowledge through AP Computer Science and prepared to study computing at the university level.",
  },
  {
    id: "21",
    year: "2023–2025",
    sortYear: 2023.2,
    title: "McGillicuddy's Irish Ale House",
    category: "work",
    description:
      "Worked as a server, strengthening my communication, multitasking, and customer service skills.",
  },
  {
    id: "22",
    year: "2023",
    sortYear: 2023.3,
    title: "Vermont Fine",
    category: "work",
    description:
      "Worked in fine dining as a hostess and server, gaining experience with special events and high-volume service.",
  },
  {
    id: "23",
    year: "May 2023",
    sortYear: 2023.4,
    title: "Choosing a New Adventure",
    category: "life",
    description:
      "Committed to attending the University of Hawaiʻi at Mānoa, thousands of miles from home.",
    reflection:
      "I wanted to challenge myself by experiencing a different environment and building a life somewhere new. Choosing Hawaiʻi represented a major step toward independence and my desire to learn from people and places beyond what I had always known.",
  },
  {
    id: "24",
    year: "June 2023",
    sortYear: 2023.5,
    title: "Graduating High School",
    category: "education",
    description:
      "Graduated magna cum laude from Mount Mansfield Union High School.",
  },
  {
    id: "25",
    year: "2023–2025",
    sortYear: 2023.6,
    title: "Conant's Farm",
    category: "work",
    description:
      "Worked seasonally in corn harvesting, farm stand operations, and customer service in Vermont.",
    reflection:
      "Working on a local farm gave me an appreciation for agricultural labor, small businesses, and the communities that support them.",
  },
  {
    id: "26",
    year: "August 2023",
    sortYear: 2023.7,
    title: "Moving to Hawaiʻi",
    category: "life",
    description:
      "Moved from Vermont to Honolulu to begin my undergraduate education at UH Mānoa.",
    reflection:
      "Moving across the country at eighteen was one of the most transformative decisions of my life. I embraced the opportunity to become more independent, build new relationships, and experience a community different from the one where I grew up.",
  },
  {
    id: "27",
    year: "August 2023",
    sortYear: 2023.71,
    title: "Finding My Community",
    category: "life",
    description:
      "Met my closest college friends while living in the dorms during Welcome Week freshman yar at UH Manoa.",
    reflection:
      "My new friends came from different cities, states, and backgrounds, introducing me to perspectives I hadn't encountered growing up. I pushed myself to become more outgoing and discovered how much I enjoy meeting people, building friendships, and learning about their experiences. These relationships helped make Hawaiʻi feel like home.",
  },
  {
    id: "28",
    year: "2023–Present",
    sortYear: 2023.72,
    title: "Finding My Place in Technology",
    category: "education",
    description:
      "Adapted to a new academic environment while developing technical skills and seeking opportunities for collaboration.",
    reflection:
      "Studying computer science has taught me the importance of supportive learning environments, diverse perspectives, and strong teamwork. My experiences have encouraged me to participate in interdisciplinary projects and contribute to communities where people with different backgrounds can learn from one another.",
  },
  {
    id: "29",
    year: "2023–Present",
    sortYear: 2023.73,
    title: "Broadening My Worldview",
    category: "life",
    description:
      "Living in Hawaiʻi introduced me to new communities, cultural traditions, and perspectives that expanded my understanding of society.",
    reflection:
      "Growing up in Vermont and attending college in Hawaiʻi have given me different experiences of place, identity, and community. Through friendships, education, and everyday interactions, I've developed a deeper appreciation for how history and culture influence people's lives. These experiences continue to shape my curiosity about the world.",
  },
  {
    id: "30",
    year: "Fall 2023",
    sortYear: 2023.8,
    title: "Dean's List",
    category: "education",
    description:
      "Earned Dean's List recognition during my first semester at UH Mānoa.",
  },
  {
    id: "31",
    year: "2024–Present",
    sortYear: 2024.1,
    title: "Founding Saltwaterkinis",
    category: "projects",
    description:
      "Founded a handmade swimwear business, combining fashion design, sewing, entrepreneurship, and customer service.",
    reflection:
      "Building Saltwaterkinis has allowed me to turn a creative interest into a business. From designing and sewing products to communicating with customers and managing orders, I've gained firsthand experience in entrepreneurship, creative problem-solving, and independent project management.",
  },
  {
    id: "32",
    year: "2025–Present",
    sortYear: 2025.1,
    title: "Bartending in Honolulu",
    category: "work",
    description:
      "Began working as a bartender at Honolulu Burger Company in Kaimukī.",
    reflection:
      "Working in hospitality has strengthened my ability to connect with new people, adapt to different situations, and collaborate in a fast-paced environment. I particularly enjoy the social aspect of the work and the opportunity to interact with people from many backgrounds.",
  },
  {
    id: "33",
    year: "2026",
    sortYear: 2026.1,
    title: "Discovering American Studies",
    category: "education",
    description:
      "Declared American Studies as a second major to pursue my longstanding interests in history, culture, and society alongside computer science.",
    reflection:
      "I've always been drawn to history and understanding how societies develop and change. American Studies allows me to explore relationships between culture, identity, institutions, and historical events. Combined with my technical education, it gives me an interdisciplinary perspective on how technology interacts with the people and communities it serves.",
  },
  {
    id: "34",
    year: "2026",
    sortYear: 2026.2,
    title: "Women in STEM",
    category: "extracurriculars",
    description:
      "Participated in Women in STEM at UH Mānoa, connecting with other students pursuing technical fields.",
    reflection:
      "Being part of a community of women interested in STEM has reinforced the value of mentorship, representation, and encouraging others to pursue their interests.",
  },
  {
    id: "35",
    year: "2026",
    sortYear: 2026.3,
    title: "Exploring Europe",
    category: "life",
    description:
      "Experienced independent travel, new cultural environments, and opportunities to meet people while backpacking through Europe.",
    reflection:
      "Travel continues to strengthen my independence, adaptability, and curiosity about different cultures and communities. I enjoy exploring unfamiliar places and learning from the people I meet along the way.",
  },
  {
    id: "36",
    year: "2026",
    sortYear: 2026.4,
    title: "The Hip-Hop Archive",
    category: "projects",
    description:
      "Built an interactive website exploring hip-hop history, musical influences, artists, and cultural movements.",
    reflection:
      "This project combines my technical skills with my interest in cultural history. By connecting artists, musical traditions, and historical movements, I wanted to create a resource that makes cultural knowledge engaging and accessible.",
  },
  {
    id: "37",
    year: "2026",
    sortYear: 2026.5,
    title: "Spark Studios Pixelboard",
    category: "projects",
    description:
      "Developed an interactive pixel-art application for students for a local VT buisness, including design submissions, an administrative review system, and a public gallery.",
    reflection:
      "Building this application gave me experience translating a client's needs into a functional product, balancing technical requirements with an accessible and engaging user experience.",
  },
  {
    id: "38",
    year: "2026",
    sortYear: 2026.6,
    title: "Korea-Go",
    category: "projects",
    description:
      "Served as lead technical developer for a Korean language-learning application built with an interdisciplinary student team as a class project.",
    reflection:
      "Korea-Go brought together my interests in technology, education, and culture. Working with teammates from different academic backgrounds helped me think about how software can support language learning and cultural engagement, and strengthened my passion for working with people with diverse skill sets .",
  },
  {
    id: "39",
    year: "2026",
    sortYear: 2026.7,
    title: "Vermont Biodiversity",
    category: "projects",
    description:
      "Developed an educational web application featuring biodiversity surveys, personalized recommendations, and wildlife sightings.",
    reflection:
      "This project allowed me to use technology to support environmental education and community participation, connecting my Vermont roots with my interest in building useful digital tools.",
  },
  {
    id: "40",
    year: "2026",
    sortYear: 2026.8,
    title: "PathFinder",
    category: "projects",
    description:
      "Created a C++ pathfinding visualization project using SFML and CMake.",
    reflection:
      "PathFinder gave me an opportunity to strengthen my C++ skills, explore algorithm visualization, and build an interactive project outside my usual web development work. I was inspired to create this to help me with the challenging algorithms and data structures",
  },
  {
    id: "41",
    year: "2026",
    sortYear: 2026.85,
    title: "Researching Algorithmic Bias in Hiring Algorithms",
    category: "education",
    description:
      "Conducted American Studies research examining how automated hiring technologies intersect with historical patterns of inequality.",
    reflection:
      "This research brings together my interests in computer science and American Studies. I'm particularly interested in understanding how the design and implementation of technology can affect access to opportunity, and how historical context can inform more responsible technological development.",
  },
  {
    id: "42",
    year: "October 2026",
    sortYear: 2026.9,
    title: "UX Design Fundamentals",
    category: "education",
    description:
      "Earned IBM SkillsBuild's User Experience Design Fundamentals credential.",
    reflection:
      "Studying UX design reinforced my interest in creating technology that is accessible, intuitive, and informed by the experiences of the people using it.",
  },
  {
    id: "43",
    year: "2026",
    sortYear: 2026.95,
    title: "Creating Campus Connections",
    category: "extracurriculars",
    description:
      "Began organizing a student club focused on building friendships and encouraging connections across academic majors.",
    reflection:
      "The friendships I formed during my first year of college showed me how meaningful community can be. Campus Connections grew from my desire to create welcoming opportunities for students to meet new people, share experiences, and form relationships outside their usual social circles.",
  },
  {
    id: "44",
    year: "Expected 2027",
    sortYear: 2027,
    title: "Two Degrees, One Perspective",
    category: "education",
    description:
      "Working toward a B.S. in Information and Computer Sciences and a B.A. in American Studies at the University of Hawaiʻi at Mānoa.",
    reflection:
      "My education reflects two complementary interests: understanding how technology works and understanding the people and societies it affects. I hope to combine these perspectives in a career focused on thoughtful, human-centered problem-solving, collaboration, and meaningful impact.",
  },


{
  id: "45",
  year: "2023–Present",
  sortYear: 2025.5,
  title: "Learning Computer Science in the Age of AI",
  category: "education",
  description:
    "Studying computer science during the rapid emergence of generative AI and its growing influence on software development, education, and the technology industry.",
  reflection:
    "Throughout my undergraduate education, AI has transformed the way students learn, write code, and approach problem-solving. I've watched tools that were once unfamiliar become increasingly integrated into everyday development workflows, raising questions about which skills will matter most in the future. As both a computer science and American Studies student, I'm interested not only in how AI changes the technical side of programming, but also in its implications for employment, education, creativity, and access to opportunity. Experiencing this transition firsthand has encouraged me to become a more adaptable developer while thinking critically about the broader social impact of emerging technologies.",
},

].sort((a, b) => a.sortYear - b.sortYear);
