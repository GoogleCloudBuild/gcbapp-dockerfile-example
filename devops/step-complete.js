const github = require('./github');

(async () => {
  const sha = process.argv[2];
  const step = process.argv[3];

  await github.stepComplete(sha, step);
  console.log(`Step ${step} completed for ${sha}.`);
})();
