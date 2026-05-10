// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Academic CV.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-started-my-ph-d-in-computer-science-at-the-university-of-memphis-advised-by-prof-myounggyu-won",
          title: 'Started my Ph.D. in Computer Science at the University of Memphis, advised by...',
          description: "",
          section: "News",},{id: "news-participated-at-the-imagineu-summer-accelerator-an-interdisciplinary-summer-entrepreneurship-internship-program-at-the-university-of-memphis-crews-center-for-entrepreneurship",
          title: 'Participated at the ImagineU Summer Accelerator — an interdisciplinary summer entrepreneurship internship program...',
          description: "",
          section: "News",},{id: "news-our-paper-on-detecting-stealthy-anomalies-with-autoencoders-was-accepted-at-ieee-milcom-2025",
          title: 'Our paper on detecting stealthy anomalies with autoencoders was accepted at IEEE MILCOM...',
          description: "",
          section: "News",},{id: "news-submitted-bucketkd-a-safety-aware-bucket-based-knowledge-distillation-framework-for-end-to-end-motion-planning-to-iros-2026",
          title: 'Submitted BucketKD: A Safety-Aware Bucket-Based Knowledge Distillation Framework for End-to-End Motion Planning to...',
          description: "",
          section: "News",},{id: "news-completed-my-m-s-thesis-bucketkd-a-safety-aware-bucket-based-knowledge-distillation-framework-for-end-to-end-motion-planning",
          title: 'Completed my M.S. thesis, BucketKD: A Safety-Aware Bucket-Based Knowledge Distillation Framework for End-to-End...',
          description: "",
          section: "News",},{id: "news-submitted-cric-protocol-scoped-counterfactual-risk-certification-for-interactive-driving-to-neurips-2026",
          title: 'Submitted CRiC: Protocol-Scoped Counterfactual Risk Certification for Interactive Driving to NeurIPS 2026.',
          description: "",
          section: "News",},{id: "news-attended-the-fleet-industry-technology-forum-at-dallara-u-s-headquarters-in-speedway-indiana-with-nsf-travel-grant",
          title: 'Attended the FLEET Industry Technology Forum at Dallara U.S. Headquarters in Speedway, Indiana,...',
          description: "",
          section: "News",},{id: "projects-autonomous-r-c-cars-cybersecurity-summer-camp",
          title: 'Autonomous R/C Cars Cybersecurity Summer Camp',
          description: "Hands-on autonomous driving and cybersecurity education using Donkey Car platforms",
          section: "Projects",handler: () => {
              window.location.href = "/projects/autonomous_rc_cars/";
            },},{id: "projects-bangla-asr-engine",
          title: 'Bangla ASR Engine',
          description: "End-to-end Bangla speech recognition and voice command system for low-resource language processing",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bangla_asr_engine/";
            },},{id: "projects-bucketkd",
          title: 'BucketKD',
          description: "Safety-aware knowledge distillation for end-to-end motion planning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bucketkd/";
            },},{id: "projects-cric",
          title: 'CRiC',
          description: "Protocol-scoped counterfactual risk certification for interactive autonomous driving",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cric/";
            },},{id: "projects-data-collection-and-validation-portal",
          title: 'Data Collection and Validation Portal',
          description: "Enterprise web platform for regulatory data ingestion, validation, and reporting",
          section: "Projects",handler: () => {
              window.location.href = "/projects/data_collection_portal/";
            },},{id: "projects-earlier-software-and-machine-learning-projects",
          title: 'Earlier Software and Machine Learning Projects',
          description: "Selected software, data, and machine-learning systems built before my Ph.D.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/earlier_software_ml_projects/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
