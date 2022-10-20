<h1 align="cente"r>Kicking Off Hacktoberfest with ACM-VIT!</h1>
<p align="center">
<img src="https://github.com/ACM-VIT/.github/raw/master/profile/Forktober2022.png">
</p>

<h2 align="center"> Boilerplate Generator </h2>

<p align="center"> 
A CLI tool which generates boilerplate code for nodejs server applications taking in various configuration parameters.
</p>

<p align="center">
  <a href="https://acmvit.in/" target="_blank">
    <img alt="made-by-acm" src="https://img.shields.io/badge/MADE%20BY-ACM%20VIT-blue?style=for-the-badge" />
  </a>
    <!-- Uncomment the below line to add the license badge. Make sure the right license badge is reflected. -->
    <!-- <img alt="license" src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" /> -->
    <!-- forks/stars/tech stack in the form of badges from https://shields.io/ -->
</p>

---

## Submitting a Pull Request

- Fork the repository by clicking the fork button on top right corner of the page
- Clone the target repository. To clone, click on the clone button and copy the https address. Then run
<pre><code>git clone [HTTPS-ADDRESS]</code></pre>
- Go to the cloned directory by running
<pre><code>cd [NAME-OF-REPO]</code></pre>
- Create a new branch. Use
<pre><code> git checkout -b [YOUR-BRANCH-NAME]</code></pre>
- Make your changes to the code. Add changes to your branch by using
<pre><code>git add .</code></pre>
- Commit the chanes by executing
<pre><code>git commit -m "your msg"</code></pre>
- Push to remote. To do this, run
<pre><code>git push origin [YOUR-BRANCH-NAME]</code></pre>
- Create a pull request. Go to the target repository and click on the "Compare & pull request" button. **Make sure your PR description mentions which issues you're solving.**

  <img src="https://drive.google.com/u/1/uc?id=1f9JKAR-kRvCRGxIs_SAvegaYDPx53T9G&export=download"></img>
- Wait for your request to be accepted.

---

## Guidelines for Pull Request

<!-- general guidelines here -->

- Avoid pull requests that :
  - are automated or scripted
  - that are plagarized from someone else's branch
- Do not spam
- Project maintainer's decision on validity of PR is final.

For additional guidelines, refer to [participation rules](https://hacktoberfest.digitalocean.com/details#rules) and [CONTRIBUTION.md](https://github.com/ACM-VIT/create-boilerplate-node/blob/master/CONTRIBUTION.md)

---

## Overview

This CLI tool can be used to create boilerplate code for common backend frameworks. Authentication method, Framework of choice, Database of choice, and folder structure architecture can be passed on as arguments. Boilerplate code for Authentication functionality(Login/Register) is created in destination path provided.

---

## Installation

- Clone this repository
<pre><code> git clone https://github.com/ACM-VIT/create-boilerplate-node.git</code></pre>
- Go to cloned repository
<pre><code> cd create-boilerplate-node</code></pre>
- Install dependencies
<pre><code> npm install</code></pre>
- Make the script available system wide
<pre><code> npm link</code></pre>

---

## Usage

- Go to repository directory.
- Windows Powershell
<pre><code> create-boilerplate-node.cmd [Target Directory] [Boilerplate type}</code></pre>

- Linux/MacOs
<pre><code> create-boilerplate-node [Target Directory] [Boilerplate type]</code></pre>

For example if you would want to create boilerplate code at ./test directory with jwt authentication with express mongoose and mvc architecture, you will use:
<pre><code> create-boilerplate-node ./test jwt-mongoose-mvc</code></pre>

---
## Authors
[Kaushal Rathi](https://github.com/kaushalrathi24)

---
## Contributors

<a href="https://github.com/ACM-VIT/create-boilerplate-node/graphs/contributors">
<img src="https://contrib.rocks/image?repo=ACM-VIT/create-boilerplate-node" />
</a>
