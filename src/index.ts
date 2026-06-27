import express from 'express'
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js'
import { registerTools } from './tools.js'

const app = express()
app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({
    ok: true,
    service: 'citizen-energy-mcp',
    status: 'deprecated',
    migration: 'Use arcadia-mcp for utility data integration.',
  })
})

app.post('/mcp', async (req, res) => {
  const server = new McpServer({ name: 'citizen-energy-mcp', version: '1.0.0' })
  registerTools(server)

  const transport = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined })
  res.on('close', () => { server.close().catch(() => {}) })
  await server.connect(transport)
  await transport.handleRequest(req, res, req.body)
})

const port = parseInt(process.env.PORT ?? '3000', 10)
app.listen(port, () => {
  console.log(`[citizen-energy-mcp] listening on :${port} (DEPRECATED — use arcadia-mcp)`)
})
