+++
author = "Austin Gregory"
title = "Host a free blog site on Azure - Guide"
date = "2021-05-15"
description = "Guide "
tags = [
    "Azure","Hugo","GitHub"
]
+++

Easly setup a site using Hugo static site generator. Automatically push changes from GitHub to Azure Static WebApps. Hosting is free while in preveiw.
<!--more-->


## Prerequisites

- Install Git
- Install Hugo (Use Chocolatey for Windows)
- Install Visual Studio Code
- Access to a custom domain name (optional)

### 1. Setup Local Website directory and install theme

1. In Powershell type the following without quotes: Hugo new site "Name of your site" 
2. Find a Hugo theme. I will be using Anatole.
2. Install theme submodule : git submodule for theme. git submodule add https://github.com/lxndrblz/anatole.git themes/anatole
3. Open Visual Studio: Code .
4. Edit config.toml (See Hugo theme documnetion for parameters)
5. Test site locally: Hugo Server
6. Naviagte to 127.0.0.1:1313 in a browser

### 2. Setup Git

1. Login inot or create a GitHub account
2. Create a new repo
3. Copy the commands needed to connect to your repo (Make sure you are in the directory from step 1)
4. Track all local files in the directlry by typing: Git add . 
5. Commit changes and leave a tracking message: Git commit -m “Second Commit”
6. Push changes to Repo: Git push

### 3. Setup Azure Staic WebApp & and GitHub actions workflow

1. Log into portal.azure.com
2. Create Staic WebApp and resource group 
3. Connect your GitHub account and select the main branch of your repo
4. Select Hugo build preset and create. Azure will automatically upload the .yml files
5. Check GitHub site for workflow logs under Actions tab
6. Run Git pull to sync with your local machine
7. Navigate to URL provided by Azure to view your live site
8 . Any changes you push using git will automatcally update on your new site

### 4. Add Custom domain name (Optional)
1. Login to your doimain provider
2. Add a CNAME record for www that points to your Azure URL
3. And the custom domain to Azure and validate 

