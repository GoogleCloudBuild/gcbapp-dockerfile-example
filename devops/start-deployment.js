const fs = require('fs');
const github = require('./github');

(async () => {
  const sha = process.argv[2];

  const result = await github.startDeployment(sha, 'Review App');
  const deploymentId = result.id;

  fs.writeFileSync('./.deployment-id.txt', deploymentId, 'UTF-8');

  console.log(`Deployment ${deploymentId} started for ${sha}.`);
})();
