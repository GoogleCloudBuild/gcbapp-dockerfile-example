const { post } = require('./http');

const gitHubRoot = 'https://api.github.com';

const createStatus = ({
  oauthToken,
  owner,
  repo,
  sha,
  state,
  targetUrl,
  description,
  context,
}) => {
  return post(
    `${gitHubRoot}/repos/${owner}/${repo}/statuses/${sha}`,
    {
      Authorization: `token ${oauthToken}`,
    },
    {
      state,
      target_url: targetUrl,
      description,
      context,
    },
  );
};

const createDeployment = ({ oauthToken, owner, repo, ref, environment }) => {
  return post(
    `${gitHubRoot}/repos/${owner}/${repo}/deployments`,
    {
      Authorization: `token ${oauthToken}`,
    },
    {
      ref,
      environment,
    },
  );
};

const createDeploymentStatus = ({
  oauthToken,
  owner,
  repo,
  deploymentId,
  state,
  description,
  environment,
  environmentUrl,
}) => {
  return post(
    `${gitHubRoot}/repos/${owner}/${repo}/deployments/${deploymentId}/statuses`,
    {
      Authorization: `token ${oauthToken}`,
    },
    {
      state,
      description,
      environment,
      environment_url: environmentUrl,
    },
  );
};

module.exports = {
  createStatus,
  createDeployment,
  createDeploymentStatus,
};
