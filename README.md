******* Gitro NPM package *******

    Version 1.5.1

Gitro allows you to run the multiple Git, Tailwind, and Node/NPM CLI commands with one command. Gitro is TOTALLY free, open-source, easy to edit & install.

******* INSTALLATION *******

Install Gitro with the npm command below:

    > npm i gitro

OR 

    > npm i gitro --save

******* USAGE *******

Run the following command to connect to your remote git repository (if you haven't already):

    > git remote add origin <repo_url>

This repo URL usually looks like "https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git"

NOTE: You might be prompted to enter your Username and your Github token (Normal passwords are not supported anymore by Git). To learn how to generate Github access tokens, go to https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

To use the built-in Tailwindcss compiler command, create a "main.css" file in /src/assets/ directory and ensure you have the CSS you will be compiling from in the /src/ folder.

SUMMARY : Input file: /src/style.css | Output file: /src/assets/main.css
You can change this by editing the gitro-tailwind.js file in the package


******* COMMAND SHEET *******

-> To list all available commands

    > ghelp

-> To install Express, Mongoose, Concurrently, Nodemon & Body-parser

    > gexpress

-> To install ReactJS, ReactDOM and React Router (v5)

    > greact

-> To install MERN stack dependencies (ReactJS, ExpressJS and their dependencies)

    > gmern

-> To install and initialize TailwindCSS

    > gtail

–> For manual TailwindCSS compilation ONLY if you're not using AutoPrefixer/PostCSS

    > gbuild
    > gitro-build

    Either of these will compile your tailwind css into /src/assets/main.css

–> For "git add" and "git commit" commands

    > gcom
    > gitro-commit

    Either of these will stage and commit your files (Custom commit messages are not available yet).

–> For "git push" command

    > gpush
    > gitro-push

    Either of these will push your staged/committed files

–> For "git add", "git commit" and "git push" commands 

    > gcap
    > gitro-commit-push

    Either of these commands will run the git "add", "commit" and "push" commands at once

–> To compile TailwindCSS and upload files to remote repo all at once

    > gitro

This is the only the first version which I use personally too, you can edit these scripts yourself if you can. For any help, reach me @_realao on Twitter. And I'll keep updating this package too. Happy coding! The public repo is at https://github.com/aosasona/gitro

CHANGELOG 

    1.5.1 - Updated Readme.md - I forgot, lmao

    1.5.0 - Added ExpressJS development dependencies installation command, added React itself to the "greact" command in case you don't have React installed already for that project, added a MERN dependencies installation command 

    1.4.1 - Added Tailwindcss install and init commands, added 'git pull' to the 'gpush' command, added a 'ghelp' command to list available commands, added ReactJS one-command dependencies installer (install react-router-dom@5 which uses 'switch' instead of 'routes'), You do not need to run gbuild everytime you use a TailwindCSS class anymore

    1.3.1 - Changed commit message

    1.3.0 - Changed "push" command to include upstream