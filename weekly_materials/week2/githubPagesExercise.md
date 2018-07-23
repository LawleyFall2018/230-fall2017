# Week 14 GitHub Pages Exercise

As I discussed in Tuesday's lecture, GitHub provides the ability to publish a basic website from a repository. You can create a site for a user or organization by creating a repository in that account with the name *username*.github.io; this will automatically create a website at the same address. 

(You can see an example at https://github.com/mamamusings/mamamusings.github.io and http://mamamusings.github.io .)

You can also create a website for an individual project repository, but that's slightly more complex--this exercise will walk you through that process. 

## Creating a Personal GitHub Site
(If you already have a personal github site, you can skip this.)

In your GitHub account, create a public repository called *username*.github.io, and initialize it with a README file. (Including the README isn't actually necessary, but it makes it easier to immediately add files to the repository using the GitHub web editor.)

Clone the new repository to your computer using VS Code, and create an index.html file with your name and an image. Use CSS to make it look moderately professional. Commit and push your files to GitHub, and use a web browser to go to *username*.github.io--your files should show up there!

## Creating a Project-Based GitHub Site
Create another new repository, and call it week14project. Clone it to your computer, create a simple index.html file, and push that file to GitHub. 

Select "Settings" on your repo page, and scroll down to the GitHub Pages settings. Choose master branch as your source, and save. (Do not try to install a Theme; these do not use standard HTML, but instead use a templating language based on Ruby; if you want to explore using Jekyll for GitHub Pages, you can find documentation here: https://help.github.com/articles/about-jekyll-themes-on-github/) 

Your project website should now be visible at *username*.github.io/week14project

(If you would like to use GitHub Pages to host your project 4 site, you may.)

## Using GitHub Pages With Your Own Domain
On Tuesday, I talked about the difference between a domain name provider and a hosting provider. Once you own a domain name, you can have it point to whatever hosting provider your want--and can even have different subdomains point to different providers. 

In the GitHub Pages settings, there's an option to use a custom domain. Implementing this requires that you have access to the DNS settings for your own domain, which is documented in detail at [Using a custom domain with GitHub Pages](https://help.github.com/articles/using-a-custom-domain-with-github-pages/). 

Because the hosting provider for my lawley.net site provides a DNS Zone editor as part of the CPanel dashboard, I was able to add a CNAME pointing from week14project.lawley.net to mamamusings.github.io. I then used the GitHub Pages settings for the week14project repo to tell GitHub's DNS server that traffic destined for week14project.lawley.net should use the files in that repository. 

The actual repository can be seen at https://github.com/mamamusings/week14project. In addition to  a README.md file and an index.html file, it also has a CNAME file--that was created when I added the custom domain information to the GitHub Pages settings for the repository. 

As a result, if you go to the GitHub Pages URL for the site, http://mamamusings.github.io/week14project, you'll see that the location changes to http://week14project.lawley.net/. 

## Deliverables for Today
Add a link to your main class page for your personal GitHub Pages site, and your week14project site. 

## When You're Done...
I doubt this will take the full class period for you to complete. Use the remaining time to work on either the practice practical, or project 4. 