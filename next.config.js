const { execSync } = require('child_process');

module.exports = () => {
  const gitBranch = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf-8' }).trim();
  const gitCommitHash = execSync('git rev-parse HEAD', { encoding: 'utf-8' }).trim();
  const gitCommitTag = execSync('git tag --points-at HEAD', { encoding: 'utf-8' }).trim();

  const gitCommitDate = execSync('git show -s --format=%ci HEAD', { encoding: 'utf-8' }).trim();
  const gitCommitDateParsed = parseGitCommitDate(gitCommitDate);
  const gitCommitDateFormatted = formatDate(gitCommitDateParsed);

  const buildDate = formatDate(new Date());

  const env = {
    GIT_BRANCH: (() => {
      return gitBranch;
    })(),
    GIT_COMMIT_HASH: (() => {
      return gitCommitHash.slice(0, 8);
    })(),
    GIT_COMMIT_TAG: (() => {
      return gitCommitTag;
    })(),
    GIT_COMMIT_DATE: (() => {
      return gitCommitDateFormatted;
    })(),
    BUILD_DATE: buildDate,
  };

  return {
    env,
    experimental: {
      outputFileTracingIncludes: {
        '/*': ['./content/**/*'],
      },
    },
  };
};

function parseGitCommitDate(gitCommitDate) {
  return new Date(gitCommitDate);
}

function formatDate(date) {
  return date.toUTCString();
}
