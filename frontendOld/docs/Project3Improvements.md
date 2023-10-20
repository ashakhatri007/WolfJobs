<h1> ✅ Features </h1>
<h3>💎 Addition of Code Coverage Badge </h3>
We used Codecov for generating code coverage badge. Report for same can be found here: https://app.codecov.io/gh/ashakhatri007/WolfJobs
<br><br>
<h3>💎 Addition of Prettier for code formatting and syntax checker</h3>
We used Prettier an opinionated code formatter to enforce a consistent style by parsing our code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

```
  {
    "trailingComma": "es5",
    "tabWidth": 2,
    "semi": true,
    "singleQuote": false
  }
```
<h3>💎 Implemented Github actions for automated build and test for every push/ PRs to master branch</h3>

There was no way to run automated build and tests on code committed to master branch, this can lead to late discovery of issue. We implemented github actions workflow to detect build failurs and/or regressions by running automated checks on PRs and their incremental pushes.

Below steps are executed:

```
 steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '14'
      - run: rm -rf node_modules
      - run: npm install --force
      - run: npm i enzyme  
      - run: npm i --save-dev enzyme                enzyme-adapter-react-16 
      - run: npm test
```

Worflow runs:
<img width="1200" alt="workflowruns" src="https://github.com/ashakhatri007/WolfJobs/blob/master/images/WorkflowRuns.png">


<br><br>

<h3>💎 Improvements to Edit Profile UI</h3>
The Exit Profile UI was having all input fields as text. Improved few fields to the way it should be.

<b>Available Hours:</b>

<img width="800" alt="AvailableHours" src="https://github.com/ashakhatri007/WolfJobs/blob/master/images/AvailableHours.png">

<b>Date of Birth:</b>

<img width="800" alt="DOB" src="https://github.com/ashakhatri007/WolfJobs/blob/master/images/DOB.png">

<b>Gender:</b>

<img width="800" alt="Gender" src="https://github.com/ashakhatri007/WolfJobs/blob/master/images/Gender.png">
<br><br>
<h1> ✅ Bug fixes </h1>

<h3> 🐞 Bug -  CORS not enabled on server side APIs</h3>
 There was a bug wherein the browser was throwing CORS error. Although it was mentioned in Readme to use allow CORS extension but that wasnt working. This is a hack, the correct way to implement will be to enable server-side APIs CORS. 

 We enabled the server-side CORS by adding below line for all API requests:

```
res.set('Access-Control-Allow-Origin', '*');
```

<h3> 🐞 Bug - Profile details not visible after updating profile and doing page refresh </h3>

There was a problem when you edit profile. The state was updated with edit details but once page refresh is done only minimalistic info sustained from auth was shown. The issue here was getprofile was not implemented at all. We implemented neccessary changes in frontend and backend to support get profile. Now after edit profile and even full page refresh, user will be able to see the latest profile details.

Get Profile Page:
<img width="1200" alt="get profile" src="https://github.com/ashakhatri007/WolfJobs/blob/master/images/GetProfile.png">

<h3> 🐞 Bug: User able to apply for the same job multiple times </h3>

<p>Previously, users were able to apply for the same job multiple times. This was a problem because the manager would see that applicant multiple times. To fix this behavior, a check was implemented in backend to check if user has already applied for the job.</p>

<h3> 🐞 Bug: App breaks on page refresh </h3>

<p> Whenever a user reloads a page, all the state was lost except their name and user id. We implemented a fix for this by creating an API that would fetch the user and calling it in app mount. The state management API then updates the state with the user details.</p>


<h1> ✨ Enhancements  </h1>

<h3>📧 Email verification using OTP</h3>

<p>Previously, user emails were not verified when a user created an account. This was a security issue and particularly pertinent for this application where spam prevention is very important. </p>

We added a feature where users can verify their emails generating an OTP on demand which is sent to their email. This OTP is then used to verify their email. This verification can be performed by the user on the profile page. 

When a user tries to apply to a particular job, their profile is checked for email verification. If the user has not verified their email, they are shown a message asking them to verify their email.

<h3> 📃 Filter jobs based on status </h3>

<p> Previously, when a user navigated to their jobs page, all of the jobs were shown. We added a feature where a user can filter jobs based on status.(<i>in progress</i>, <i>accepted</i>, <i>rejected</i>) </p>

<img width="1200" alt="get profile" src="https://github.com/ashakhatri007/WolfJobs/blob/master/images/JobFilter.png">


<h3> Styling improvements </h3>

<p> Design improvements were made to make the app more user friendly and intuitive. Previously, there were many design inconsistencies like the button shapes, icon colors and fonts did not match everywhere. These were fixed by implementing a few changes in the frontend. All of these changes can be viewed in the feature videos in the main README </p>