const githubApi = require('./api/github');

const oauthToken = 'f51465a819792027b4f' + '94e32e663e92d64359460';
const owner = 'adrianso';
const repo = 'gcbapp-dockerfile-example';
const steps = [
  '1. Install Dependencies',
  '2. ESLint',
  '3. Setting up Locales',
  '4. Unit Tests',
  '5. Gatsby Build',
];

const createStatus = (sha, context, state, description) => {
  return githubApi.createStatus({
    oauthToken,
    owner,
    repo,
    sha,
    state,
    description,
    context,
  });
};

const startBuild = sha => {
  const promises = steps.map(s =>
    createStatus(sha, s, 'pending', 'Not started')
  );
  return Promise.all(promises);
};

const stepComplete = (sha, step) => {
  return createStatus(sha, steps[step], 'success', 'Complete');
};

const startDeployment = (ref, environment) => {
  return githubApi.createDeployment({
    oauthToken,
    owner,
    repo,
    ref,
    environment,
  });
};

const deploymentComplete = (deploymentId, environment, environmentUrl) => {
  return githubApi.createDeploymentStatus({
    oauthToken,
    owner,
    repo,
    deploymentId,
    state: 'success',
    environment,
    environmentUrl,
  });
};

module.exports = {
  startBuild,
  stepComplete,
  startDeployment,
  deploymentComplete,
};
