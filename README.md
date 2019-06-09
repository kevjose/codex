# Codex

#### Live at

http://ec2-52-66-200-202.ap-south-1.compute.amazonaws.com:3000

#### The code analysis platform

- This is a simple static code analyser for Javascript using jshint and Python using flake8
- The flow of the application is as under

1. Register to the application with the register button
2. Login with the user that has been created
3. Select the language you want to analyse the code in
4. Paste the code in the Code Editor
5. Press the submit button to see the code analysis result

#### Tech stack used

- Backend

1. Express JS server (node server)

- Database

1. MongoDB (nosql)

- Frontend

1. React and Redux (for state management)

#### Pre-configs for local environment

- make sure you have nodejs(10.16.0), mongoDB(4.0.0) and python 2.7 (and pip as well ) installed
- for static code analyser use jshint (via `npm install -g jshint`) and flake8(via `pip install flake8`)

#### steps to run in local machine

```
git clone https://github.com/kevjose/cast_codex.git
cd cast_codex
npm install
npm install --prefix client
npm run dev
```
