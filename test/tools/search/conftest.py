from __future__ import annotations

import sys
from pathlib import Path

# Ensure tests import local search package from mcp/server.
SEARCH_ROOT = Path(__file__).resolve().parents[3] / "mcp" / "server"
if str(SEARCH_ROOT) not in sys.path:
    sys.path.insert(0, str(SEARCH_ROOT))
