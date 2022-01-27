const generateMarkdown = data => {
  return `# ${data.title}

  ## Description    
  ${data.description}

  ## Table of Contents

  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributors](#Contributors)
  - [Deployed](#Deployed)
  - [Languages](#Languages)
  - [License](#License)


  ## Installation 
  ${data.install}


  ## Usage 
  ${data.usage}


  ## Contributors
  ${data.contributors} 

  ## Deployed 

  https://${data.username}.github.io/${data.repository}

  ## Languages

  ${data.languages.map(languages => languages).join(', ')}

  ## License 

  ![License](https://img.shields.io/badge/license-${data.license}-blue.svg)
`;
}

module.exports = generateMarkdown;
