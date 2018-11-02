const fs = require('fs');
const github = require('./github');

(async () => {
  const sha = process.argv[2];

  const deploymentId = fs.readFileSync('./.deployment-id.txt', 'UTF-8');

  await github.deploymentComplete(
    deploymentId,
    'Review App',
    `https://build.crimsoneducation.io/${sha}`
  );
  console.log(`Deployment completed for ${sha}.`);
})();
