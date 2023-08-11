import { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import About from './about';

import Header from './header';
import Conatct from './conatct';
import Footer from './footer';
import Register from './register';
import Home1 from './Home';
import Home2 from './browesjobs';
import Payments from './payments';
import Jobs from './jobs';
import Loginotp from './loginOTP ';
import Getopt from './getotp';
import Forgot from './forgot password';
import Sub from './submit';
import Profile from './profile/profile';
import Applied from './profile/applied';
import Jobalert from './profile/jobalert';
import CompanyList from './browesjob1';
import Jobcategory from './jobecategory';
import Joblocations from './jobloactions';
import Jobcompany from './jobcompanys';
import Jobdesign1 from './jobs by design';
import Jobskills from './job skills';
function App() {
 
  return (
    <div className="App">
 <Routes>
  <Route path="/" element={<Register/>}/>
  <Route path="/about" element={<About/>} />
  <Route path="/conatct" element={<Conatct/>} />
  <Route path="/header" element={<Header/>} />
  <Route path="/home" element={<Home1/>}/>
  <Route path="/browesjobs" element={<Home2/>}/>
  <Route path="/pay" element={<Payments/>}/>
  <Route path="/jobs" element={<Jobs/>}/>
  <Route path="/loginotp" element={<Loginotp/>}/>
  <Route path="/getopt" element={<Getopt/>}/>
  <Route path="/forgot" element={<Forgot/>}/>
  <Route path="/sub" element={<Sub/>}/>
  <Route path="/profile" element={<Profile/>}/>
  <Route path="/applied" element={<Applied/>}/>
  <Route path="/jobalert" element={<Jobalert/>}/>
  <Route path="/ContentFilter" element={<CompanyList/>}/>
  <Route path="/jobcategory" element={<Jobcategory/>}/>
  <Route path="/joblocations" element={<Joblocations/>}/>
  <Route path="/joblocompany" element={<Jobcompany/>}/>
  <Route path="/jobdesign" element={<Jobdesign1/>}/>
  <Route path="/jobskills" element={<Jobskills/>}/>
 </Routes>
 <Footer/>
    </div>
  );
}

export default App;
const initialUserDetailsList = [
  {
  _id: "64c8eed12d4ed319fc6a3e81",
  userId: "64c8ee122d4ed319fc6a3e69",
  title: "Software Developer",
  description: "\nAs a Frontend Developer, your primary responsibility is to create and maintain the user-facing aspects of a website or web application. You'll work closely with the design and backend development teams to bring the user interface to life and ensure a seamless user experience. Here's a typical job description for a Frontend Developer:\n\nJob Title: Frontend Developer\n\nJob Summary:\nWe are seeking a skilled Frontend Developer to join our dynamic team. As a Frontend Developer, you will be responsible for translating user interface designs into clean and interactive web pages. Your expertise in HTML, CSS, and JavaScript will be essential in delivering a visually appealing and user-friendly experience for our website or web application users. You should be detail-oriented, self-motivated, and have a passion for staying up-to-date with the latest industry trends and best practices.\n\nResponsibilities:\n\nImplement User Interface (UI) Designs: Transform visual designs and wireframes into well-structured, responsive, and cross-browser compatible web pages.\n\nDevelop Interactive Features: Use JavaScript frameworks and libraries to build interactive elements and dynamic user experiences on the frontend.\n\nOptimize Performance: Ensure that the frontend of the website or application is optimized for speed and performance, minimizing load times and improving overall responsiveness.\n\nEnsure Cross-Browser Compatibility: Test and troubleshoot frontend code across various browsers and devices to ensure consistent behavior and appearance.\n\nCollaborate with Backend Developers: Work closely with backend developers to integrate frontend code with server-side logic and databases.\n\nMaintain Code Quality: Implement best practices and coding standards to produce clean, maintainable, and scalable code.\n\nStay Current with Emerging Technologies: Keep abreast of the latest developments in frontend technologies, frameworks, and libraries, and suggest innovative solutions to improve the user experience.\n\nMobile Responsiveness: Ensure that the website or application is optimized for mobile devices and follows responsive design principles.\n\nCross-Functional Collaboration: Collaborate with designers, UX/UI teams, and other stakeholders to ensure the best possible user experience.\n\nRequirements:\n\nProficient in HTML, CSS, and JavaScript: Strong expertise in building responsive and interactive web pages using HTML5, CSS3, and modern JavaScript libraries and frameworks like React, Angular, or Vue.js.\n\nBrowser Compatibility: Familiarity with cross-browser compatibility issues and ways to work around them.\n\nResponsive Design: Understanding of responsive design principles and the ability to create web pages that work seamlessly across various devices and screen sizes.\n\nVersion Control: Experience with version control systems like Git.\n\nTesting and Debugging: Proficiency in testing and debugging frontend code to identify and resolve issues.\n\nPerformance Optimization: Knowledge of techniques to optimize frontend performance and reduce page load times.\n\nProblem-Solving Skills: Strong problem-solving and analytical skills to troubleshoot and find solutions to complex frontend challenges.\n\nCommunication Skills: Good verbal and written communication skills to collaborate effectively with team members and stakeholders.\n\nEducation and Experience:\n\nBachelor's degree in Computer Science, Web Development, or a related field (or equivalent work experience).\n\nProven experience as a Frontend Developer or similar role, with a portfolio of past projects showcasing your skills.\n\nPreferred (Not Required):\n\nExperience with CSS preprocessors like SASS or LESS.\n\nFamiliarity with frontend build tools like Webpack or Gulp.\n\nKnowledge of UX/UI design principles and ability to work closely with designers.\n\nUnderstanding of backend technologies and RESTful APIs.\n\nExperience with server-side rendering (SSR) and client-side rendering (CSR) approaches.\n\nNote that job descriptions may vary depending on the company and specific projects involved. The above description provides a general outline of the role and its responsibilities.",
  experience: "2-5 years",
  maxPositions: 69,
  activeApplications: 0,
  acceptedCandidates: 0,
  dateOfPosting: "2023-08-01T10:53:32.117Z",
  postedAt: "1690889937560",
  deadline: "2023-08-26T00:00:00.000Z",
  skillsets:["HTML", "CSS", "Bootstrap 4", "JavaScript", "ReactJS"],
  cities:[
  "Hyderabad"
  ],
  jobType: "Full Time",
  country: "India",
  education: "B.Tech",
  salary: "7-10 LPA",
  rating: -1,
  __v: 0,
  recruiter:{_id: "64c8ee122d4ed319fc6a3e6b", userId: "64c8ee122d4ed319fc6a3e69", companyname: "satiety solutions"}
  },
  {
  _id: "64c8efb32d4ed319fc6a3e90",
  userId: "64c8ee122d4ed319fc6a3e69",
  title: "MERN  Developer",
  description: "Job Title: MERN Stack Developer\n\nJob Summary:\nWe are seeking a skilled MERN Stack Developer to join our team and take part in the development of our web applications. As a MERN Stack Developer, you will be responsible for building the entire frontend to backend web application using the MERN stack (MongoDB, Express.js, React, and Node.js). You should have a strong understanding of web application architecture and be proficient in each of the MERN stack technologies. The ideal candidate will be able to work both independently and collaboratively, turning design mockups into fully functional and responsive web applications.\n\nResponsibilities:\n\nFull-Stack Development: Build and maintain the entire web application stack using the MERN stack, including front-end development with React, back-end development with Node.js and Express.js, and database management with MongoDB.\n\nImplement User Interface (UI) Designs: Collaborate with UI/UX designers to implement web designs into functional user interfaces with attention to detail and aesthetics.\n\nAPI Development: Design and develop RESTful APIs to enable seamless communication between the front-end and back-end components of the application.\n\nDatabase Management: Design and manage MongoDB databases, including schema design, querying, and optimization.\n\nState Management: Utilize state management libraries (e.g., Redux) to maintain application state and ensure data consistency across the application.\n\nTesting and Debugging: Write unit tests and perform debugging to ensure the reliability and stability of the application.\n\nCode Reviews: Participate in code reviews to maintain code quality and provide constructive feedback to other developers.\n\nPerformance Optimization: Optimize the application for maximum speed and scalability, ensuring smooth user experiences even with large amounts of data.\n\nSecurity: Implement security best practices to protect the application from common vulnerabilities and threats.\n\nCollaboration: Work closely with other team members, including frontend and backend developers, UI/UX designers, and project managers, to ensure seamless integration of components.\n\nContinuous Learning: Stay up-to-date with the latest industry trends, technologies, and best practices related to the MERN stack and web development.\n\nRequirements:\n\nMERN Stack Expertise: Proficiency in all components of the MERN stack (MongoDB, Express.js, React, and Node.js).\n\nFrontend Development: Strong experience with React.js and modern frontend technologies (HTML5, CSS3, JavaScript, etc.).\n\nBackend Development: Solid understanding of Node.js and Express.js for building scalable and robust server-side applications.\n\nDatabase Management: Familiarity with MongoDB and the ability to design and manage databases effectively.\n\nRESTful APIs: Experience in designing and implementing RESTful APIs for web applications.\n\nVersion Control: Proficient with version control systems like Git.\n\nTesting and Debugging: Ability to write unit tests and debug code effectively.\n\nProblem-Solving Skills: Strong analytical and problem-solving skills to identify and resolve technical challenges.\n\nCommunication Skills: Excellent verbal and written communication skills for effective collaboration within the team.\n\nEducation and Experience:\n\nBachelor's degree in Computer Science, Web Development, or a related field (or equivalent work experience).\n\nProven experience as a MERN Stack Developer or Full-Stack Developer, with a portfolio of past projects showcasing your MERN stack expertise.\n\nPreferred (Not Required):\n\nExperience with server-side rendering (SSR) and client-side rendering (CSR) approaches.\n\nFamiliarity with containerization technologies like Docker.\n\nKnowledge of cloud platforms like AWS or Azure for deploying and hosting applications.\n\nUnderstanding of web application security best practices.\n\nExperience with GraphQL.\n\nNote that job descriptions may vary depending on the company and specific projects involved. The above description provides a general outline of the role and its responsibilities as a MERN Stack Developer.",
  experience: "2-5 years",
  maxPositions: 10,
  activeApplications: 0,
  acceptedCandidates: 0,
  dateOfPosting: "2023-08-01T10:53:32.117Z",
  postedAt: "1690890163721",
  deadline: "2023-08-27T00:00:00.000Z",
  skillsets:["HTML", "CSS", "JavaScript", "ReactJS", "Node JS", "Express.js"],
  cities:[
  "Hyderabad",
  "Bangalore Rural"
  ],
  jobType: "Full Time",
  country: "India",
  education: "B.Tech",
  salary: "7-10 LPA",
  rating: -1,
  __v: 0,
  recruiter:{_id: "64c8ee122d4ed319fc6a3e6b", userId: "64c8ee122d4ed319fc6a3e69", companyname: "satiety solutions"}
  },
  {
  _id: "64c8f0372d4ed319fc6a3e9b",
  userId: "64c8ee122d4ed319fc6a3e69",
  title: "Android Developer",
  description: "Job Title: Android Developer\n\nJob Summary:\nWe are seeking a talented Android Developer to join our mobile development team. As an Android Developer, you will be responsible for designing, developing, and maintaining high-quality Android applications. You should have a passion for mobile technologies and a strong understanding of the Android app development ecosystem. The ideal candidate will be able to collaborate effectively with cross-functional teams to deliver innovative and user-friendly mobile solutions.\n\nResponsibilities:\n\nMobile App Development: Design and build advanced Android applications for various devices, making use of the latest technologies and best practices.\n\nCode Implementation: Translate UI/UX designs and wireframes into clean, efficient, and reusable code.\n\nApplication Architecture: Work with the team to architect and design scalable and maintainable Android applications.\n\nIntegration with Backend Services: Collaborate with backend developers to integrate mobile applications with backend services using APIs.\n\nPerformance Optimization: Optimize the performance of Android applications to ensure smooth user experiences, even on low-end devices.\n\nBug Fixing and Testing: Conduct thorough testing, debugging, and bug fixing to maintain application stability and functionality.\n\nCode Review: Participate in code reviews to maintain code quality and ensure adherence to coding standards.\n\nVersion Control: Use version control systems, such as Git, to manage codebase efficiently.\n\nCross-Platform Compatibility: Ensure Android applications are compatible with different screen sizes, resolutions, and versions of the Android OS.\n\nContinuous Learning: Stay updated with the latest trends and advancements in Android development and mobile technologies.\n\nDocumentation: Create and maintain documentation for the Android applications, including code documentation and user guides.\n\nCollaboration: Work closely with UX/UI designers, product managers, and backend developers to deliver high-quality mobile solutions.\n\nRequirements:\n\nAndroid Development Skills: Proficiency in Android app development using Java or Kotlin. Knowledge of both is a plus.\n\nAndroid Studio: Strong familiarity with Android Studio and Android development tools.\n\nUI/UX Design: Understanding of mobile UI/UX principles and the ability to implement user-friendly interfaces.\n\nMobile App Architecture: Knowledge of Android application architecture patterns, such as MVVM or MVP.\n\nAPI Integration: Experience with RESTful APIs and third-party API integration.\n\nTesting and Debugging: Proficient in writing unit tests and conducting debugging to ensure application reliability.\n\nProblem-Solving Skills: Strong problem-solving and analytical abilities to troubleshoot and resolve technical issues.\n\nCommunication Skills: Excellent communication skills, both verbal and written, to collaborate effectively within a team.\n\nEducation and Experience:\n\nBachelor's degree in Computer Science, Software Engineering, or a related field (or equivalent work experience).\n\nProven experience as an Android Developer, with a portfolio of Android applications showcasing your skills.\n\nPreferred (Not Required):\n\nExperience with cross-platform mobile development frameworks like Flutter or React Native.\n\nFamiliarity with Material Design guidelines.\n\nKnowledge of Android Jetpack components.\n\nUnderstanding of mobile app security best practices.\n\nExperience with Firebase or other cloud-based mobile services.\n\nNote that job descriptions may vary depending on the company and specific projects involved. The above description provides a general outline of the role and its responsibilities as an Android Developer.",
  experience: "0-2 years",
  maxPositions: 5,
  activeApplications: 0,
  acceptedCandidates: 0,
  dateOfPosting: "2023-08-01T10:53:32.117Z",
  postedAt: "1690890295082",
  deadline: "2023-08-27T00:00:00.000Z",
  skillsets:[
  "C"
  ],
  cities:[
  "Hyderabad"
  ],
  jobType: "Full Time",
  country: "India",
  education: "B.Tech",
  salary: "5-7 LPA",
  rating: -1,
  __v: 0,
  recruiter:{_id: "64c8ee122d4ed319fc6a3e6b", userId: "64c8ee122d4ed319fc6a3e69", companyname: "satiety solutions"}
  },
  {
  _id: "64c8f0b12d4ed319fc6a3ea6",
  userId: "64c8ee122d4ed319fc6a3e69",
  title: "Testing",
  description: "\nJob Title: Test Engineer\n\nJob Summary:\nWe are seeking a skilled Test Engineer to join our quality assurance team. As a Test Engineer, you will be responsible for designing, implementing, and executing test strategies to ensure the quality and reliability of our software products. You will work closely with the development team to identify and report defects, as well as collaborate with cross-functional teams to ensure the delivery of high-quality software solutions. The ideal candidate should have a strong understanding of software testing methodologies, excellent problem-solving skills, and a passion for delivering top-notch software products.\n\nResponsibilities:\n\nTest Planning: Collaborate with project stakeholders to create comprehensive test plans, including test cases, test data, and test environments.\n\nTest Execution: Execute manual and automated tests to identify defects and ensure the functionality and quality of software products.\n\nDefect Reporting: Identify, document, and track defects using issue tracking systems, and work with development teams to resolve and verify fixes.\n\nTest Automation: Develop and maintain automated test scripts to increase test coverage and efficiency.\n\nRegression Testing: Conduct regular regression testing to validate software functionality after changes or updates.\n\nPerformance Testing: Design and execute performance tests to assess application responsiveness and scalability.\n\nSecurity Testing: Conduct security testing to identify vulnerabilities and ensure the security of the software.\n\nCompatibility Testing: Verify software compatibility across different browsers, operating systems, and devices.\n\nDocumentation: Create and maintain test documentation, including test plans, test cases, and test reports.\n\nContinuous Improvement: Propose and implement process improvements and best practices to enhance testing efficiency and effectiveness.\n\nCollaboration: Work closely with developers, product managers, and other stakeholders to ensure effective communication and understanding of project requirements.\n\nProduct Validation: Validate new features and enhancements to ensure they meet the specified requirements and user expectations.\n\nRequirements:\n\nTesting Expertise: Strong understanding of software testing methodologies, including manual and automated testing.\n\nTest Automation Skills: Experience with test automation tools and frameworks, such as Selenium, JUnit, TestNG, or similar.\n\nBug Tracking: Familiarity with issue tracking systems like Jira or Bugzilla to report and manage defects.\n\nTest Planning and Execution: Ability to create test plans, design test cases, and execute test scenarios effectively.\n\nProblem-Solving Skills: Excellent problem-solving and analytical abilities to identify and troubleshoot issues.\n\nTechnical Aptitude: Proficiency in programming languages (e.g., Java, Python) is a plus.\n\nCommunication Skills: Strong verbal and written communication skills for effective collaboration and reporting.\n\nEducation and Experience:\n\nBachelor's degree in Computer Science, Software Engineering, or a related field (or equivalent work experience).\n\nProven experience as a Test Engineer, Software Tester, or Quality Assurance Analyst.\n\nPreferred (Not Required):\n\nKnowledge of Agile development methodologies.\n\nExperience with performance testing tools (e.g., JMeter, LoadRunner).\n\nUnderstanding of security testing tools and techniques (e.g., OWASP).\n\nFamiliarity with Continuous Integration/Continuous Deployment (CI/CD) pipelines.\n\nTesting certifications (e.g., ISTQB) would be a plus.\n\nNote that job descriptions may vary depending on the company and specific projects involved. The above description provides a general outline of the role and its responsibilities as a Test Engineer.",
  experience: "0-2 years",
  maxPositions: 3,
  activeApplications: 0,
  acceptedCandidates: 0,
  dateOfPosting: "2023-08-01T10:53:32.117Z",
  postedAt: "1690890417747",
  deadline: "2023-08-27T00:00:00.000Z",
  skillsets:[
  "Manual Testing",
  "Automation Testing"
  ],
  cities:[
  "Hyderabad"
  ],
  jobType: "Full Time",
  country: "India",
  education: "B.Tech",
  salary: "3-5 LPA",
  rating: -1,
  __v: 0,
  recruiter:{_id: "64c8ee122d4ed319fc6a3e6b", userId: "64c8ee122d4ed319fc6a3e69", companyname: "satiety solutions"}
  },
  {
  _id: "64c9fea58faf311b0b3357d3",
  userId: "64c8ee122d4ed319fc6a3e69",
  title: "UI Designer",
  description: "need to be good designer with required skills and responsibilities and many more like this",
  experience: "2-5 years",
  maxPositions: 5,
  activeApplications: 0,
  acceptedCandidates: 0,
  dateOfPosting: "2023-08-02T06:43:00.209Z",
  postedAt: "1690959525739",
  deadline: "2023-09-15T00:00:00.000Z",
  skillsets:[
  "Adobe Photoshop"
  ],
  cities:[
  "Aurangabad"
  ],
  jobType: "Full Time",
  country: "India",
  education: "B.Tech ",
  salary: "5-7 LPA",
  rating: -1,
  __v: 0,
  recruiter:{_id: "64c8ee122d4ed319fc6a3e6b", userId: "64c8ee122d4ed319fc6a3e69", companyname: "satiety solutions"}
  },
  {
  _id: "64ca07648faf311b0b335a0a",
  userId: "64c8ee122d4ed319fc6a3e69",
  title: "Relationship Manager",
  description: "good communication skills in financial field you will get targets for this jobs",
  experience: "2-5 years",
  maxPositions: 3,
  activeApplications: 0,
  acceptedCandidates: 0,
  dateOfPosting: "2023-08-02T06:43:00.209Z",
  postedAt: "1690961764880",
  deadline: "2023-09-18T00:00:00.000Z",
  skillsets:[
  "Communication skill"
  ],
  cities:[
  "Visakhapatnam"
  ],
  jobType: "Full Time",
  country: "India",
  education: "B.Tech",
  salary: "3-5 LPA",
  rating: -1,
  __v: 0,
  recruiter:{_id: "64c8ee122d4ed319fc6a3e6b", userId: "64c8ee122d4ed319fc6a3e69", companyname: "satiety solutions"}
  },
  {
  _id: "64cbac8b6798462f81519eaa",
  userId: "64c9f3a2488eecdb24e9ce85",
  title: "tester",
  description: "strong skills in manual and automation ",
  experience: "0-2 years",
  maxPositions: 10,
  activeApplications: 0,
  acceptedCandidates: 0,
  dateOfPosting: "2023-08-03T12:22:24.969Z",
  postedAt: "1691069579012",
  deadline: "2023-11-18T00:00:00.000Z",
  skillsets:[
  "Software Testing",
  "SAP abap",
  "Call Center"
  ],
  cities:[
  "Visakhapatnam"
  ],
  jobTyp: "Full Time",
  country: "India",
  education: "Degree",
  salary: "0-3 LPA",
  rating: -1,
  __v: 0,
  recruiter:{_id: "64c9f3a3488eecdb24e9ce87", userId: "64c9f3a2488eecdb24e9ce85", companyname: "Reddy Mounika"}
  },
  {
  _id: "64ccbcbbba96d109a1a7667e",
  userId: "64c9f4df488eecdb24e9ce9a",
  title: "jhvb",
  description: "fdx",
  experience: "0-2 years",
  maxPositions: 76,
  activeApplications: 0,
  acceptedCandidates: 0,
  dateOfPosting: "2023-08-04T08:06:37.175Z",
  postedAt: "1691139259431",
  deadline: "2023-09-10T00:00:00.000Z",
  skillsets:[
  "Software Testing"
  ],
  cities:[
  "Ahmednagar"
  ],
  jobType: "Full Time",
  country: "India",
  education: "degree ",
  salary: "3-5 LPA",
  rating: -1,
  __v: 0,
  recruiter:{_id: "64c9f4e0488eecdb24e9ce9c", userId: "64c9f4df488eecdb24e9ce9a", companyname: "ramaraju"}
  },
  {
  _id: "64ccd8c7ba96d109a1a76edc",
  userId: "64ca2f95b004dd97b4b0e26a",
  title: "Manual testing",
  description: "Our Enterprise technology team is developing cutting-edge and innovative solutions to monitor, control and optimize our energy assets. We provide customers with the peace of mind needed to reliably and efficiently improve their operations. Our team builds next-generation, cloud platform solutions to meet the mission-critical requirements of our customers.",
  experience: "2-5 years",
  maxPositions: 5,
  activeApplications: 0,
  acceptedCandidates: 0,
  dateOfPosting: "2023-08-04T08:06:37.175Z",
  postedAt: "1691146439223",
  deadline: "2023-08-11T00:00:00.000Z",
  skillsets:[
  "Manual Testing",
  "Java"
  ],
  cities:[
  "Hyderabad",
  "Bangalore Urban"
  ],
  jobType: "Full Time",
  country: "India",
  education: "B-tech",
  salary: "7-10 LPA",
  rating: -1,
  __v: 0,
  recruiter:{_id: "64ca2f96b004dd97b4b0e26c", userId: "64ca2f95b004dd97b4b0e26a", companyname: "&^&%*&%^&&*^*&"}
  },
  {
  _id: "64ccdd80ba96d109a1a77040",
  userId: "64ccdcf1ba96d109a1a77021",
  title: "manual testing ",
  description: "As a Senior Quality Assurance Engineer you will be responsible for:\n\nProviding expertise in Design, Architecture, Development, Continuous Integration and Delivery to ensure constant innovation. Managing deliverables and mentoring junior team members.\nContributing in driving initiatives such as defining coding standards and processes to ensure quality code is produced. Ensuring continuous business improvement according to benchmarks and standards\nEnsuring customer quality requirement, Feedback of Experience (FOE)/Lessons Learned are taken into account in the tender proposal to avoid deviation and to continually improve execution processes\nAdvising Functional managers or other Functions regarding approaches, processes and procedures in the own field\nHandling communication with colleagues and the business about approach and methods for solving complex problems\nLeading as a project leader of medium sized projects or is a major contributor to bigger projects\n",
  experience: "0-2 years",
  maxPositions: 15,
  activeApplications: 0,
  acceptedCandidates: 0,
  dateOfPosting: "2023-08-04T08:06:37.175Z",
  postedAt: "1691147648364",
  deadline: "2023-08-25T00:00:00.000Z",
  skillsets:["Software Testing", "Manual Testing", "HTML", "Linux"],
  cities:[
  "Ahmedabad"
  ],
  jobType: "Full Time",
  country: "India",
  education: "B-tech",
  salary: "3-5 LPA",
  rating: -1,
  __v: 0,
  recruiter:{_id: "64ccdcf2ba96d109a1a77023", userId: "64ccdcf1ba96d109a1a77021", companyname: "sai latha"}
  },
  {
  _id: "64cd1d827fe82e385802f09c",
  userId: "64cd189a7fe82e385802f090",
  title: "Software Engineer",
  description: "A Software Engineer is an IT professional who designs, develops and maintains computer software at a company. They use their creativity and technical skills and apply the principles of software engineering to help solve new and ongoing problems for an organization",
  experience: "2-5 years",
  maxPositions: 25,
  activeApplications: 0,
  acceptedCandidates: 0,
  dateOfPosting: "2023-08-04T15:14:47.257Z",
  postedAt: "1691164034926",
  deadline: "2023-08-31T00:00:00.000Z",
  skillsets:[
  "Software Testing",
  "Java"
  ],
  cities:[
  "Hyderabad",
  "Bangalore Rural"
  ],
  jobType: "Full Time",
  country: "India",
  education: "B.tech, MBA",
  salary: "5-7 LPA",
  rating: -1,
  __v: 0,
  recruiter:{_id: "64cd189a7fe82e385802f092", userId: "64cd189a7fe82e385802f090", companyname: "@#$#$%%^"}
  },
  {
  _id: "64ce0110554484fd402a2e12",
  userId: "64ca2230b004dd97b4b0de79",
  title: "java  DVP",
  description: "java",
  experience: "0-2 years",
  maxPositions: 1,
  activeApplications: 0,
  acceptedCandidates: 0,
  dateOfPosting: "2023-08-05T05:21:19.989Z",
  postedAt: "1691222288103",
  deadline: "2023-11-11T00:00:00.000Z",
  skillsets:[],
  cities:[],
  jobType: "Full Time",
  country: "India",
  education: "b.tech",
  salar: "10-15 LPA",
  rating: -1,
  __v: 0,
  recruiter:{_id: "64ca2231b004dd97b4b0de7b", userId: "64ca2230b004dd97b4b0de79", companyname: "VENKAT"}
  },
  {
  _id: "64ce923349b974c5714a512f",
  userId: "64ca2f95b004dd97b4b0e26a",
  title: "manual",
  description: "Rentola.com - Rental Housing - #1 Housing Portal\n\nRentola\nhttps://www.rentola.com\nNormal Price: €39/ 28 Days. Right Now: Try 7 Days For Only €1. Save €38. Sign Up Today. Cheap Apartments, Houses, Rooms, Student Housing Etc. We Have Vacant Rentals For...\nRent Out Your Property\nList Your Property Completely Free And Get Contact To Tenants Today.\nAll Houses for Rent\nSearching for a House to rent? See all Vacant Houses here.\nAll Apartments for Rent\nUse the filters to find the perfect Apartment for You - right here.\nSponsored",
  experience: "5-10 years",
  maxPositions: 7,
  activeApplications: 0,
  acceptedCandidates: 0,
  dateOfPosting: "2023-08-05T17:26:39.271Z",
  postedA: "1691259443728",
  deadline: "2023-08-12T00:00:00.000Z",
  skillsets:["Software Testing", "Mainframe", "SAP", "SAP FICO", "Call Center", "SAP abap"],
  cities:[
  "Agra"
  ],
  jobType: "Part Time",
  country: "India",
  education: "B-tech",
  salary: "3-5 LPA",
  rating: -1,
  __v: 0,
  recruiter:{_id: "64ca2f96b004dd97b4b0e26c", userId: "64ca2f95b004dd97b4b0e26a", companyname: "&^&%*&%^&&*^*&"}
  },
  {
  _id: "64ce926749b974c5714a5165",
  userId: "64ca2f95b004dd97b4b0e26a",
  title: "jdsbvj",
  description: "Rentola.com - Rental Housing - #1 Housing Portal\n\nRentola\nhttps://www.rentola.com\nNormal Price: €39/ 28 Days. Right Now: Try 7 Days For Only €1. Save €38. Sign Up Today. Cheap Apartments, Houses, Rooms, Student Housing Etc. We Have Vacant Rentals For...\nRent Out Your Property\nList Your Property Completely Free And Get Contact To Tenants Today.\nAll Houses for Rent\nSearching for a House to rent? See all Vacant Houses here.\nAll Apartments for Rent\nUse the filters to find the perfect Apartment for You - right here.\nSponsored",
  experience: "2-5 years",
  maxPositions: 8,
  activeApplications: 0,
  acceptedCandidates: 0,
  dateOfPosting: "2023-08-05T17:26:39.271Z",
  postedAt: "1691259495147",
  deadline: "2023-08-17T00:00:00.000Z",
  skillsets:[
  "SAP FICO"
  ],
  cities:[
  "Ajitgarh (Mohali)"
  ],
  jobType: "Full Time",
  country: "India",
  education: "B-tech",
  salary: "3-5 LPA",
  rating: -1,
  __v: 0,
  recruiter:{_id: "64ca2f96b004dd97b4b0e26c", userId: "64ca2f95b004dd97b4b0e26a", companyname: "&^&%*&%^&&*^*&"}
  },
  {
  _id: "64d03f9ee17774dc9d89a89d",
  userId: "64cd189a7fe82e385802f090",
  title: "fshfhsjg",
  description: "dsgreyhhjtjutjgsjfjdgfj",
  experience: "0-2 years",
  maxPositions: 2,
  activeApplications: 0,
  acceptedCandidates: 0,
  dateOfPosting: "2023-08-07T00:35:24.061Z",
  postedAt: "1691369374729",
  deadline: "2023-08-31T00:00:00.000Z",
  skillsets:["Networking", "Software Testing", "SAP abap", "Call Center"],
  cities:["Adilabad", "Agra", "Noida", "Ahmednagar"],
  jobType: "Full Time",
  country: "India",
  education: "B.tech, MBA",
  salary: "3-5 LPA",
  rating: -1,
  __v: 0,
  recruiter:{_id: "64cd189a7fe82e385802f092", userId: "64cd189a7fe82e385802f090", companyname: "@#$#$%%^"}
  }
  ]