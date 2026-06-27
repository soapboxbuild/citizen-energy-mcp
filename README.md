# citizen-energy-mcp

> **⚠️ DEPRECATED** — Citizen Energy does not offer a public API for third-party integrations.
>
> **Migration:** Use [`arcadia-mcp`](https://github.com/soapboxbuild/arcadia-mcp) instead for property utility data, meter readings, energy consumption, and benchmarking.

---

## Why deprecated?

Citizen Energy does not provide a public or partner API for programmatic access to their data. All 5 tools in this plugin require API access that is not available.

**arcadia-mcp** provides equivalent capabilities via the Arcadia Power platform, which has full developer API access.

## Migration

Replace `citizen-energy-mcp` with `arcadia-mcp` in your Claude plugin config:

```json
{
  "mcpServers": {
    "utility-data": {
      "url": "https://arcadia-mcp.soapbox.build/mcp"
    }
  }
}
```

## Tools (all deprecated)

| Tool | Status |
|------|--------|
| `search_properties` | Deprecated → use arcadia-mcp |
| `get_meters` | Deprecated → use arcadia-mcp |
| `get_energy_consumption` | Deprecated → use arcadia-mcp |
| `get_utility_bills` | Deprecated → use arcadia-mcp |
| `get_benchmarking` | Deprecated → use arcadia-mcp |

All tools return a descriptive error with migration instructions rather than silently returning empty data.
