export const siteConfig = {
  name: "David Pall",
  title: "Senior iOS Developer",
  slogan: "Building seamless iOS experiences with Swift",
  description: "Portfolio website of David Pall",
  accentColor: "#078c74",
  social: {
    email: "davidpallatx@gmail.com",
    linkedin: "https://www.linkedin.com/in/david-pall",
    github: "https://github.com/DavidPall",
  },
  aboutMe:
    "I am a passionate iOS developer who enjoys turning ideas into polished, user-centric mobile experiences. I thrive in collaborative environments but am equally comfortable taking ownership and delivering features independently. Strong communication and teamwork are among my key strengths — I naturally connect with teammates, often building great working relationships from day one. I’m deeply curious about new technologies in the Apple ecosystem and continuously eager to learn, refine my craft, and stay up to date with what excites me in iOS development.",
  skills: ["Bocsánat", "Hívj fel!", "Köszi ha elolvasod", "Ha tudod sem árthat", "Family power", "Látogassatok meg"],
  projects: [
    {
      name: "Ismeretlen feladó szolgáltató mögött",
      description:
        "Az e‑mail egy futárszolgálatra hivatkozik, de a feladó címe egy általános e‑mail szolgáltatót használ (pl. Proton Mail), nem a cég hivatalos domainjét. A valódi futárcégek szinte mindig saját domainről küldenek levelet.",
      link: "",
      skills: ["@proton.me", "Feladó", "Domain", "Email"],
    },
    {
      name: "Nem hivatalos weboldalra mutató link",
      description:
        "A link nem egy ismert futárszolgálat hivatalos weboldalára vezet, hanem egy általános vagy ismeretlen domainre (pl. GitHub Pages). Ez erős figyelmeztető jel, még akkor is, ha az oldal „jól néz ki”.",
      link: "",
      skills: [".github.io", "Link", "Weboldal", "Ellenőrzés"],
//        https://delivery-status-dpd-systemparcelshipmmt.github.io/
    },
    {
      name: "Olyan csomagról szól, amire nem emlékszel",
      description:
        "Az üzenet egy csomagról beszél, de a címzett nem biztos benne, hogy rendelt bármit. A phishing gyakran erre épít: „hátha volt valami”.",
      link: "",
      skills: ["Emlékezet", "Feladó", "Gyanú", "Kontextus"],
    },
    {
      name: "Kattintás az egyetlen megoldás",
      description:
        "Az e‑mail nem ad alternatívát (telefon, ügyfélszolgálat, hivatalos oldal), csak egyetlen linket kínál. A valódi szolgáltatók több lehetőséget is biztosítanak.",
      link: "",
      skills: ["Kattintás", "Kapcsolat", "Ügyfélszolgálat"],
    },
    {
      name: "Sürgető hangnem",
      description:
        "Az üzenet azt sugallja, hogy ha nem történik gyors cselekvés, negatív következmény lesz (visszaküldés, elveszett csomag). A sürgetés célja a gondolkodás megkerülése.",
      link: "",
      skills: ["Sürgetés", "Időnyomás", "Félelem", "Döntés"],
    },
    {
      name: "Túl kevés személyes adat",
      description:
        "Az e‑mail nem tartalmaz konkrét, ellenőrizhető adatokat (pl. pontos rendelési szám, webshop neve), csak általános információkat.",
      link: "",
      skills: ["Általános", "Hiány"],
    },
    {
      name: "Nem megszokott kommunikációs csatorna",
      description:
        "A futárszolgálatok gyakran SMS‑t, alkalmazást vagy ismert e‑mail címet használnak. Ha az értesítés teljesen új csatornán érkezik, érdemes gyanakodni.",
      link: "",
      skills: ["Csatorna", "Szokás", "Kommunikáció", "Eltérés"],
    },
  ],
  experience: [
      {
        company: "Általános",
        title: "Gyanús feladó vagy e‑mail cím",
        dateRange: "Könnyű felismerni",
        link: "",
        bullets: [
          "Az e‑mail címe nem egyezik a megszokott hivatalos címmel, vagy furcsa, hosszú, idegen domainről jön.",
          "Mindig nézd meg a teljes feladó címet, ne csak a megjelenített nevet.",
          "Példa: delivery.notice@random-mail123.com"
        ],
      },
      {
          company: "Általános",
          title: "Sürgető, nyomást gyakorló szöveg",
          dateRange: "Könnyű felismerni",
          link: "",
          bullets: [
              "A levél azonnali cselekvésre próbál kényszeríteni (pl. „24 órán belül”, „utolsó figyelmeztetés”).",
              "A csalók gyakran félelmet vagy kapkodást akarnak kiváltani.",
              "Példa: „Ha nem kattintasz azonnal, a csomagot visszaküldjük.”"
          ],
      },
      {
          company: "Általános",
          title: "Hosszú vagy furcsa link",
          dateRange: "Közepes felismerni",
          link: "",
          bullets: [
              "A link nagyon hosszú, sok számot vagy értelmetlen karaktert tartalmaz.",
              "Mindig a link elejét (a domain nevét) érdemes ellenőrizni.",
              "Példa: https://status-check.delivery-system.example/verify/239847?ref=mail"
          ],
      },
      {
          company: "Általános",
          title: "Általános megszólítás",
          dateRange: "Könnyű felismerni",
          link: "",
          bullets: [
              "Az e-mail nem név szerint szólít meg, hanem általánosan.",
              "A valódi szolgáltatók gyakran tudják a nevedet.",
              "Példa: „Tisztelt Ügyfél!” vagy „Kedves Felhasználó!”"
          ],
      },
      {
          company: "Általános",
          title: "Olyan üzenet, amire nem számítottál",
          dateRange: "Közepes felismerni",
          link: "",
          bullets: [
              "Csomagról, számláról vagy problémáról szól, amiről nem tudsz.",
              "Ha nem várt üzenetet kapsz, mindig legyél gyanakvó.",
              "Példa: csomagértesítő akkor, amikor nem rendeltél semmit."
          ],
      },
      {
          company: "Általános",
          title: "Csak kattintásra ad lehetőséget",
          dateRange: "Közepes felismerni",
          link: "",
          bullets: [
              "Csak egy link vagy gomb van, nincs telefonszám vagy ügyfélszolgálat.",
              "A valódi cégek többféle kapcsolatfelvételi lehetőséget adnak.",
              "Példa: csak egy „Kattints ide” gomb szerepel az e-mailben."
          ],
      },
  ],
  education: [
    {
      school: "Sapientia Hungarian University of Transylvania",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2017 - 2020",
      achievements: [
        "Top ranking in multiple university-level algorithmic challenges",
        "Member of Student Council",
      ],
    },
    {
      school: "James Bowie High School, Austin, Texas",
      degree: "Student Exchange program - 11th grade",
      dateRange: "2015-2016",
      achievements: [
        "Completed a full academic year in the U.S",
        "Achieved strong academic performance",
        "Built communication and cross-cultural skills",
        "Actively participated in school extracurricular activities",
      ],
    },
  ],
};
