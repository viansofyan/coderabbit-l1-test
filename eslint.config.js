// L1 canary — CodeRabbit VDP security research (authorized, own test repo only).
// This config defines a custom rule that reports a fixed canary message on every
// JS file. If CodeRabbit's review executes this config, the canary message
// appears in the review output — proving repo config code execution.
// It performs NO network access, reads NO environment variables, and
// exfiltrates NOTHING. It only proves whether the code ran.
const canaryRule = {
  meta: {
    type: "suggestion",
    docs: {
      description:
        "L1 canary: proves repo ESLint config code executes during review",
    },
    schema: [],
  },
  create(context) {
    return {
      Program(node) {
        context.report({
          node,
          message:
            "CANARY-L1-ESLINT: repo eslint config code executed during CodeRabbit review",
        });
      },
    };
  },
};

export default [
  {
    files: ["**/*.js"],
    plugins: { canary: { rules: { "exec-check": canaryRule } } },
    rules: { "canary/exec-check": "error" },
  },
];
