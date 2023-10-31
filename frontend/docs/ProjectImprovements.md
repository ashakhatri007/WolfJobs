✅ Features
==========

### 💎 Switch from JavaScript to TypeScript

Switching from JavaScript to TypeScript offered several significant improvements in software development. To list a few: It helps prevent many common programming errors, making it easier to maintain and extend our application as a team. It helps to catch type-related errors at compile-time rather than runtime, making the code more robust and reducing the chances of unexpected runtime errors. We have added some types which can be found here: (https://github.com/deepr41/WolfJobs/tree/master/frontend/src/types)  
  

### 💎 Converted to monorepo

Previously the UI and Backend of WolfJobs was in different repos, we combined into one repository. Having everything in one repository helped the team in easier collaboration, as we could work on all parts of the project simultaneously. This simplified the development workflow and reduced the overhead of managing multiple repositories.  
  

### 💎 Migrated from Webpack to Vite

Vite is significantly faster compared to Webpack. It leverages ES modules (native imports) and a highly optimized development server, providing near-instantaneous updates. This means faster feedback during development. It improved the overall pipeline performance including build,deub, and testing time.  
  

### 💎 Significantly improved UI

#### 🤯 Applicant's View
Applicants can now track their applications in a better view. They have different tabs for the jobs they have applied to and different tab for all the jobs that are listed on WolfJobs by different NCSU recruiters.
We also added Application Status for applicant to see if their Application is 'In Review', 'Accepted', 'Rejected' which was missing in the previous project.
We also added the department to which the Job belongs such as NC State Dining, Campus Enterprises, Wolfpack Outfitters which was missing in the previous project.

<img width="1350" alt="image" src="https://github.com/deepr41/WolfJobs/assets/39904345/2e854fbc-3bbf-480d-855d-f7010ad539bc">



#### 🤯 Manager's View
Managers can now track his own job listing under 'My Listings' as well as look at 'All jobs' that have been posted by other managers.
In the previous project there was just Accept/Reject for any application. We added a 4 stage review process for the manager to finalize from a potential applicant. 
The 4 stages are Screening, Grading, Rating, Review.

<img width="1503" alt="image" src="https://github.com/deepr41/WolfJobs/assets/39904345/df469a94-b07b-4fbe-b6fb-101c38095971">




#### 🤯 User friendly Landing Page
Previously the landing page was empty with only login and register button on the top right corner.
We added Images and Text Description to show what the website is used for and have Sign up and Login buttons.

<img width="1347" alt="image" src="https://github.com/deepr41/WolfJobs/assets/39904345/816a2703-8f6c-4e6b-928d-91df7bfb8ba3">

### 🤯 Introduced Multistage Application Flow
#### Applicant's Flow:
The Applicant after applying waits for the screening acceptance from the manager.
After getting screening acceptance, the applicant will have to fill a questionaire.
The questionaire will be graded by the manager.
On the basis of the gradings of all candidate, the applicant gets a final Accept or Reject from the manager.

#### Manager's flow:
For every job posting, the manager can see 4 stages of application process for each applicant.
After the  applicant applies, the manager accepts or rejects at the screening stage.
If accepted, the manager provides a questionaire for the applicant.
The anaswers are then rated and then final review is done by looking at the grades of all applicants.

### State Maintanence across the application
Candidate's applications are maintained and no candidate can apply to an already applied job which was happening the previous project.
Manager's applications listings are maintained for each manager and no manager can't close an already closed job which was happening the previous project.

### Added Department for each Job Posting.
Previously the jobs did not have the department name. We added department for each Job posting as per the Manager's Department.

<img width="1062" alt="image" src="https://github.com/deepr41/WolfJobs/assets/39904345/e3235889-985b-4b31-bf9f-12c6a2afca61">


#### Styling improvements
Design improvements were made to make the app more user friendly and intuitive. Previously, there were many design inconsistencies like no landing page for the website, the button shapes, icon colors and fonts did not match everywhere. These were fixed by implementing a lot of changes in the frontend. All of these changes can be viewed in the feature videos in the main README.









