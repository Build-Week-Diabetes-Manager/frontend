DESCRIPTION FROM AIRTABLE CARD
Pitch:
Develop a predictive model to help manage user's blood sugar level

Technologies: Our application incorporates some great technologies such as the following listed below 🔥:


Javascript:

[x] React 
[x] Context API 
[x] useEffect

libraries:

[x] redux 
[x] axios 
[x] react-bootstrap 
[x] chart.js 
[x] yup 
[x] sass 
[x] semantic-ui-react



MVP:
1. Mobile friendly dashboard showing blood sugar levels
2. A model predicting blood sugar levels over the next 24 hours

Stretch:
1.New user questionnaire that would generate a new predictive profile based on existing profile data.
2. Web App should be touch screen friendly
3. Data import from monitoring hardware (batch and streaming)

DESIGN LINKS / DATASETS
http://archive.ics.uci.edu/ml/datasets/diabetes https://github.com/LoopKit/Loop - currently functioning open source app that T1D users can use today https://tidepool.org/ - non-profit trying to get FDA approval for the DIY Loop app above https://www.jdrf.org/impact/research/artificial-pancreas/

Proposal

- What problem does your app solve?
A: Predicts blood sugar levels over the next 24 hours.

- Be as specific as possible; how does your app solve the problem?
A: Using a data science model to predict when a patient’s blood sugar levels are abnormal.

- What is the mission statement?
A: Help diabetic patients monitor and predict healthy blood sugar levels.

Features

- What features are required for your minimum viable product?
Mobile friendly dashboard showing blood sugar levels
Model predicting blood sugar levels over the next 24 hours

- What features may you wish to put in a future release?
1. Track medication, food and other levels.
2. Generate CSV, PDF, and Excel reports for healthcare providers

- What do the top 3 similar apps do for their users?
mySugr -- (https://mysugr.com/en/diabetes-app) - A) Create entries for important therapy data like meals, meds, blood sugars, and more. B) 3-month overview to see all your data from the last 7, 30, and 90 days, at a glance on the main screen. C) Estimated HbA1c. D) Generates CSV (Basic), PDF & Excel Reports for healthcare providers.
Glucose Buddy -- (https://www.glucosebuddy.com/) - tracking tools that make it easy to manage your diabetes in one place. A) Track blood sugar, insulin, medication, food, and more. B) Get a summary for each day as well as your long term trends. C) Access your data from your desktop, mobile app, or tablet.
BG Monitor -- (https://www.bg-monitor.com/) - calculates insulin and carbohydrates for you and generates statistics that help you keep track of how you’re doing.
Frameworks - Libraries

- What 3rd party frameworks/libraries are you considering using?
	A: react, yup, formik, axios, and others we will find. 
	B: Some kind of react data visualization library (to be decided)
	C: Styling library (to be decided)

Potential Diabetes related API’s
https://www.programmableweb.com/api/managebgl-diabetes
https://developer.dexcom.com/
https://predictbgl.com/api/
- Do APIs require you to contact its maintainer to gain access?
	A: With our current data no. 
- Are you required to pay to use the API?
	A: Not that we know of at this time. 

- Have you considered using Apple Frameworks? (MapKit, Healthkit, ARKit?)
	A: We have not at this time. 

For Data Scientists


- Describe the Established data source with at least rough data able to be provided on day 1. 

0
04-21-1991\t9:09\t33\t009
1
04-21-1991\t9:09\t34\t013
2
04-21-1991\t17:08\t62\t119
3
04-21-1991\t17:08\t33\t007
4
04-21-1991\t22:51\t48\t123

- You can gather information about the data set you’ll be working with from the project description. Be sure to collaborate with your PM, and your Backend Architect to chat about the resources you have.
- Write a description for what the DS problem is (what uncertainty/prediction are we trying to do here? Regression analysis. Making model predictions based on the provided dataset, which will predict a patient’s potential blood sugar levels for the  next 24 hours 
Sentiment analysis? Why is this a useful solution to a problem?)
- A target (e.g. JSON format or such) for output that DS students can deliver to web/other students for them to ingest and use in the app

Project Ambition

Some ambitions for this project were to create an application that allows people to check their glucose levels. Diabetes Manager was built by Junior Developers implementing technology's that they've learned.


Target Audience

- Who is your target audience? Be specific.
People with diabetes who are looking for a web application to help track and predict their blood sugar levels.
- What feedback have you gotten from potential users?
“carb and insulin tracker would be great to have”
- Have you validated the problem and your solution with your target audience? How?
A: We are currently working on this so we will have an app ready to chow come Thursday. 

Research

- Research thoroughly before writing a single line of code. Solidify the features of your app conceptually before implementation. Spend the weekend researching so you can hit the ground running on Monday.

Prototype Key Feature(s)

- This is the “bread and butter” of the app, this is what makes your app yours. Calculate how long it takes to implement these features and triple the time estimated. That way you’ll have plenty of time to finish. It is preferred to drop features and spend more time working on your MVP features if needed.

Dashboard showing current user stats
Dashboard showing predicted stats
Input for user information
Suggestions based on predicted stats
Team
Michael McGuiness - UI Developer - https://github.com/michaelmcguiness
Landry Irakoze - Front End Architect - https://github.com/LandryIrakoze
George Hou - Data Engineer - https://github.com/gyhou
Dylan Mestyanek - UI Developer - https://github.com/dylanmestyanek
Alexis J Carr - Project Lead - https://github.com/alexisjcarr
Vanna Sok - UI developer - https://github.com/vannasok
Sesinos Tesfamariam - Backend Developer - https://github.com/sesinos1
Richard Tregaro - Data Scientist - https://github.com/Rtrey29
Andrew Garcia - UI Dev https://github.com/aaamg
 Zach Young - Front End Architect - https://github.com/zachtyoung
Derek Etman - Front End Developer  -https://github.com/derekEtman
