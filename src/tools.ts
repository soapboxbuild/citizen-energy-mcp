import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'

const DEPRECATION_MESSAGE = `\
This tool is no longer available. Citizen Energy does not offer a public API \
for third-party integrations.

For utility data, meter readings, energy consumption, and benchmarking, \
use arcadia-mcp instead — it provides the same capabilities via the \
Arcadia Power platform, which has full API access.

Migration: replace citizen-energy-mcp with arcadia-mcp in your Claude plugin config.`

function deprecated(toolName: string) {
  return {
    content: [
      {
        type: 'text' as const,
        text: `[${toolName}] ${DEPRECATION_MESSAGE}`,
      },
    ],
    isError: true,
  }
}

export function registerTools(server: McpServer) {
  server.tool(
    'search_properties',
    '(DEPRECATED) Search properties via Citizen Energy API. Use arcadia-mcp instead.',
    {
      query: z.string().describe('Property search query'),
      filters: z.record(z.string()).optional().describe('Optional search filters'),
    },
    async () => deprecated('search_properties')
  )

  server.tool(
    'get_meters',
    '(DEPRECATED) Get meters for a property. Use arcadia-mcp instead.',
    {
      property_id: z.string().describe('Property ID'),
    },
    async () => deprecated('get_meters')
  )

  server.tool(
    'get_energy_consumption',
    '(DEPRECATED) Get energy consumption data. Use arcadia-mcp instead.',
    {
      meter_id: z.string().describe('Meter ID'),
      start_date: z.string().describe('Start date (ISO 8601)'),
      end_date: z.string().describe('End date (ISO 8601)'),
    },
    async () => deprecated('get_energy_consumption')
  )

  server.tool(
    'get_utility_bills',
    '(DEPRECATED) Get utility bills for a property. Use arcadia-mcp instead.',
    {
      property_id: z.string().describe('Property ID'),
      year: z.number().optional().describe('Filter by year'),
    },
    async () => deprecated('get_utility_bills')
  )

  server.tool(
    'get_benchmarking',
    '(DEPRECATED) Get ENERGY STAR / benchmarking data. Use arcadia-mcp instead.',
    {
      property_id: z.string().describe('Property ID'),
    },
    async () => deprecated('get_benchmarking')
  )
}
