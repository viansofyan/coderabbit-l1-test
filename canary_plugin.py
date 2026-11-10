# L1 canary — CodeRabbit VDP security research (authorized, own test repo only).
# This Pylint plugin defines a checker that reports a fixed canary message on
# every module. If CodeRabbit runs Pylint with this repo config during review,
# the canary message appears in the review output — proving the plugin code ran.
# It performs NO network access, reads NO environment variables, and
# exfiltrates NOTHING. It only proves whether the plugin was loaded and run.
from pylint.checkers import BaseChecker


class CanaryChecker(BaseChecker):
    name = "canary-l1-pylint"
    msgs = {
        "W9001": (
            "CANARY-L1-PYLINT: repo pylint plugin code executed during CodeRabbit review",
            "canary-l1-pylint",
            "Canary: proves the repo Pylint plugin was loaded and executed.",
        ),
    }

    def visit_module(self, node):
        self.add_message("canary-l1-pylint", node=node)


def register(linter):
    linter.register_checker(CanaryChecker(linter))
