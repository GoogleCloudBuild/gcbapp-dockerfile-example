const github = require('./github');

(async () => {
  const sha = process.argv[2];
  await github.startBuild(sha);
  console.log(`Build started for ${sha}`);
})();
