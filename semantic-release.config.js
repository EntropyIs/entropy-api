module.exports = {
  branches: ["main", { name: "next", prerelease: true }],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/npm",
    ["@semantic-release/git", {
      assets: ["*"],
      // eslint-disable-next-line no-template-curly-in-string
      message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
    }],
    "@semantic-release/github",
  ],
  prepare: [
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/git",
  ],
};
