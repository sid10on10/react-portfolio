
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Siddhant Singh",
  title: "Hi, I'm Siddhant",
  subTitle: emoji("A passionate Full-Stack Developer 🚀 having an experience of building Web applications with Python / JavaScript / Reactjs / Nodejs / Django /Express."),
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/sid10on10",
  linkedin: "https://www.linkedin.com/in/sid10on10/",
  gmail: "siddhantk.singh.phe14@iitbhu.ac.in",
  facebook: "https://www.facebook.com/sid10on10"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "Technology I use",
  subTitle: "FULL STACK DEVELOPER ON THESE TECH STACKS",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web applications."),
    emoji("⚡ Backend on Django or express and database Mongo DB atlas clusters"),
    emoji("⚡ Integration of third party services such as Heroku / AWS / Digital Ocean / Netlify ")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Indian Institute of Technology(Banaras Hindu University)",
      logo: require("./assets/images/iitbhu.jpeg"),
      subHeader: "B.Tech & M.Tech(IDD) in Pharmaceutical Engineering & Technology",
      duration: "July 2014 - June 2019",
      desc: "I have done Integrated dual degree from IIT BHU with M.tech Thesis on Cancer.",
      descBullets: [
        "Active Member of Institute Web Committee, developed Placement Portal",
        "Built more than 10 websites during college life.",
        "Training & Placement representative",
        "Organiser SPIRIT IIT BHU",
        "IIT JEE AIR-7367"
      ]
    },
    {
      schoolName: "Central Hindu Boys School",
      logo: require("./assets/images/bhu.png"),
      subHeader: "Senior Secondary & High School",
      duration: "July 2008 - April 2014",
      desc: "Ranked 130/16000 in 6th Class Entrance Exam.",
      descBullets: [
        "10 CGPA in 10th Standard",
        "Qualified IIT JEE in 2014 and 86.04% in 12th Standard"
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "85%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "75%"
    },
    {
      Stack: "Python",
      progressPercentage: "85%"
    },
    {
      Stack: "JavaScript",
      progressPercentage: "90%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Codementor",
      companylogo: require("./assets/images/codementor.jpg"),
      date: "June 2016 – Present",
      desc: "I am a mentor at Codementor. Where I have worked with clients across the globe on various Python & JavaScript projects. I have mentored more than 50 clients all across the globe on various projects.",
      descBullets: [
        "5-Star Mentor",
        "50+ Projects with client reviews"
      ]
    },
    {
      role: "Backend Engineer",
      company: "Tessact",
      companylogo: require("./assets/images/tessact.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "I have worked as a back-end engineer at Tessact . Where I worked on the trigger application which was built with the Django Rest Framework.   https://www.tessact.com/"
    },
    {
      role: "Junior Developer",
      company: "Notatee(Kuwait)",
      companylogo: require("./assets/images/notatee.jpeg"),
      date: "April 2019 – June 2019",
      desc: "I have worked as a junior developer at Notatee(Kuwait). I have done backend development in Django for Notatee(Kuwait).   https://www.notatee.com/"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "sid10on10", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/tessact.png"),
      link: "https://www.tessact.com/"
    },
    {
      image: require("./assets/images/notatee.jpeg"),
      link: "https://www.notatee.com/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Full-Stack Python and Django",
      subtitle: "I have completed Python and Django full stack development bootcamp on Udemy.",
      image: require("./assets/images/certificate1.jpg"),
      footerLink: [
        { name: "Certification", url: "https://www.udemy.com/certificate/UC-ec568bc8-0ada-4209-bf8b-6f4871026181/?utm_medium=email&utm_campaign=email&utm_source=sendgrid.com" }
      ]
    },
    {
      title: "Javascript",
      subtitle: "Completed Javascript course at guvi from basics to advance.",
      image: require("./assets/images/certificate2.png"),
      footerLink: [
        { name: "Certification", url: "https://www.guvi.in/verify-certificate?id=4203Pq11CN49v259R3" }
      ]
    },

    {
      title: "Python 10 CGPA",
      subtitle: "Completed Certifcation from internshala for Python training with 95% marks in final exam.",
      image: require("./assets/images/certificate3.jpg"),
      footerLink: [
        { name: "Certification", url: "https://trainings.internshala.com/verify_certificate" }
      ]
    },

    {
      title: "Python Data analysis and Machine learning",
      subtitle: "Completed Certifcation from Udemy for Data analysis and machine learning",
      image: require("./assets/images/certificate4.jpg"),
      footerLink: [
        { name: "Certification", url: "https://trainings.internshala.com/verify_certificate" }
      ]
    },

  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://www.codementor.io/@siddhantsingh/using-python-apscheduler-to-retrieve-data-from-venmo-api-multiple-pages-to-csv-files-periodically-custom-time-eyxpifiz3",
      title: "Using Python to retrieve data from venmo api and saving it in CSV",
      description: "Using Python to retrieve data from venmo api Periodically using apsscheduler and saving it in csv files"
    },

  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or loved my work? Feel free to reach me.",
  number: "+91-9140980763",
  email_address: "siddhantk.singh.phe14@iitbhu.ac.in"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
