******* Gitro NPM package *******

    Version 1.3.0

Gitro allows you to run the multiple Git commands and TailwindCSS compilation with one command. Gitro is TOTALLY free, open-source, easy to edit & install.

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


******* COMMAND SHEET *******

–> For TailwindCSS compilation ONLY 

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

This is the only the first version which I use personally too, you can edit these scripts yourself if you can. For any help, reach me @techacumenyt on Twitter. And I'll keep updating this package too. Happy coding!

CHANGELOG 

    1.3.0 - Changed "push" command to include upstream