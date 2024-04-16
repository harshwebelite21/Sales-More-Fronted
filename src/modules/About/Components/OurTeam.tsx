import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";

// Define social media platforms along with their icons
const socialMediaPlatforms = [
  { name: "Facebook", icon: <FacebookIcon /> },
  { name: "WhatsApp", icon: <WhatsAppIcon /> },
  { name: "Twitter", icon: <TwitterIcon /> },
];

type SocialMediaLinks = {
  Facebook: string;
  WhatsApp: string;
  Twitter: string;
};

const teamMembers = [
  {
    name: "Mountain Sunset",
    role: "Back-end Expert",
    image:
      "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yX3Bob3RvX29mX2FfYmxhY2tfYnVzaW5lc3NtYW5faXNvbGF0ZWRfb25fb2ZmX19lZmMxZDllNC1iNzQ5LTQ2NzMtYjRmMS1lYjI0NTBiYzNiOGRfMS5qcGc.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    socialMediaLinks: {
      Facebook: "https://facebook.com/mountainsunset",
      WhatsApp: "https://wa.me/1234567890",
      Twitter: "https://twitter.com/mountainsunset",
    },
  },
  {
    name: "Mountain Sunset",
    role: "Back-end Expert",
    image:
      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    socialMediaLinks: {
      Facebook: "https://facebook.com/mountainsunset",
      WhatsApp: "https://wa.me/1234567890",
      Twitter: "https://twitter.com/mountainsunset",
    },
  },
  {
    name: "Ocean Breeze",
    role: "Front-end Developer",
    image:
      "https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    socialMediaLinks: {
      Facebook: "https://facebook.com/oceanbreeze",
      WhatsApp: "https://wa.me/1234567891",
      Twitter: "https://twitter.com/oceanbreeze",
    },
  },
  // Add more team members with unique details here
];

const OurTeam = () => {
  return (
    <div className="flex flex-col flex-center text-[#333] gap-5 bg-gray-50 py-11">
      <div className="font-libre text-3xl">Our Team</div>
      <div className="text-center">
        Far far away, behind the word mountains, far from the countries Vokalia
        and
        <br /> Consonant, there live the blind texts.
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="max-w-sm flex flex-col flex-center gap-3 p-5"
          >
            <img
              className="flex flex-center rounded-full h-[200px] w-[200px] object-cover "
              src={member.image}
              alt={member.name}
            />
            <div className="px-6 py-4 text-center">
              <div className="font-libre text-xl mb-2 ">{member.name}</div>
              <div className="font-muli text-base mb-2">{member.role}</div>
              <p className="text-gray-700 text-base font-muli">
                {member.description}
              </p>
            </div>
            <div className="flex gap-3">
              {socialMediaPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={
                    member.socialMediaLinks[
                      platform.name as keyof SocialMediaLinks
                    ]
                  }
                >
                  {platform.icon}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
