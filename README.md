git config --global user.name "WiseM [Navigateur]"
git config --global user.email "samuel.litzler39@gmail.com"

Create a new repository
git clone git@gitlab.com:todoassos/react-cours-project.git
cd react-cours-project
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master

Push an existing folder
cd existing_folder
git init
git remote add origin git@gitlab.com:todoassos/react-cours-project.git
git add .
git commit -m "Initial commit"
git push -u origin master

Push an existing Git repository
cd existing_repo
git remote rename origin old-origin
git remote add origin git@gitlab.com:todoassos/react-cours-project.git
git push -u origin --all
git push -u origin --tags
