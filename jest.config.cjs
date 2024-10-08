/** @type {import('jest').Config} */
module.exports = {
  extensionsToTreatAsEsm: [".ts", ".tsx", ".mts"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
};
