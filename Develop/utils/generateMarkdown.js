// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

const installationDisplay = (installation) => {
if (installation) {return `
## Installation instructions 
${installation}`
  } else {return''}
}

const usageDisplay = (usage) => { usage 
  if (usage) {return `
  ## Usage instructions 
  ${usage}`
    } else {return''}
  }

const creditsDisplay = (credits) => {
  if (credits) {return `
  ## Additional Contributors
  ${credits}`
    } else {return''}
  }

  const licenseBadge = (license) => {
    if (license !== 'None') {
    let badge = ''
    switch (license) {
      case 'MIT' : badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      break;
      case 'GNU GPLv3' : badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      break;
      case 'Mozilla Public 2.0' : badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
      break;
      case 'The Unlicense' : badge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
      break;
      case 'Apache 2.0' : badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      break;
      default : badge = ''
    }
    return badge
      } else {
        return ''
      }
    }

const licenseText= (license) => {
  if (license !== 'None') {
    return `## License
    Licensed under the ${license} license.`
    } else {
      return ''
    }
}

// generate markdown for README. Only the required fields are pre-populated.
function generateMarkdown(data) {
  const { title, description, installation, usage, credits, license} = data
  
return `
${licenseBadge(license)}
# ${title}

## Description
${description}
${installationDisplay(installation)}
${usageDisplay(usage)}
${creditsDisplay(credits)}
${licenseText(license)}

`
;
}

module.exports = generateMarkdown;
