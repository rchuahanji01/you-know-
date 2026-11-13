/**
 * Centralized Automation Tools Catalog
 * Add or modify tools here; the UI automatically updates tabs, filters, and cards.
 */

export const TOOL_CATEGORIES = [
  'All',
  'Financial Operations',
  'Accounting Automation',
  'Data Processing',
  'Document Automation',
  'Business Workflows',
  'AI Productivity',
];

export const TOOLS_DATA = [
  {
    id: 'tool-reconcile-x',
    name: 'ReconcileX Engine',
    category: 'Financial Operations',
    status: 'In Development',
    statusBadgeColor: 'blue',
    description:
      'Autonomous multi-bank CSV and OFX statement reconciliation utility with fuzzy match logic and automatic discrepancy isolation.',
    capabilities: ['Multi-currency support', 'Fuzzy matching 99.4%', 'OFX/QBO/CSV parser'],
    featured: true,
    version: 'v0.8.2-alpha',
    eta: 'Q2 2026',
  },
  {
    id: 'tool-ledger-sync',
    name: 'LedgerBridge Direct',
    category: 'Accounting Automation',
    status: 'In Development',
    statusBadgeColor: 'blue',
    description:
      'Zero-code webhook-to-journal bridge converting proprietary billing events directly into dual-entry general ledger entries.',
    capabilities: ['GAAP / IFRS compliant', 'Webhook listeners', 'Audit trail hashing'],
    featured: true,
    version: 'v0.7.4-alpha',
    eta: 'Q3 2026',
  },
  {
    id: 'tool-tax-extractor',
    name: 'TaxTrace Intelligent Parser',
    category: 'Document Automation',
    status: 'Coming Soon',
    statusBadgeColor: 'violet',
    description:
      'High-precision OCR and schema extractor for GST, VAT, and W-9 tax certificates with automatic validation against official registries.',
    capabilities: ['PDF / Image ingestion', 'Registry cross-check', 'Structured JSON output'],
    featured: false,
    version: 'v0.4.0-preview',
    eta: 'Q3 2026',
  },
  {
    id: 'tool-cash-telemetry',
    name: 'CashPulse Telemetry',
    category: 'Financial Operations',
    status: 'Coming Soon',
    statusBadgeColor: 'violet',
    description:
      'Automated daily treasury liquidity aggregation across multiple operational accounts, calculating dynamic runway and cash burn velocity.',
    capabilities: ['Real-time runway model', 'Burn velocity alerts', 'Multi-entity rollups'],
    featured: true,
    version: 'v0.6.1-preview',
    eta: 'Q4 2026',
  },
  {
    id: 'tool-data-cleanser',
    name: 'OmniClean Pipeline',
    category: 'Data Processing',
    status: 'In Development',
    statusBadgeColor: 'blue',
    description:
      'Micro-utility for sanitizing, deduplicating, and standardizing messy enterprise transaction spreadsheets before ingestion into ERPs.',
    capabilities: ['Regex pattern rules', 'Deduplication engine', 'Memory-efficient stream'],
    featured: false,
    version: 'v0.9.0-beta',
    eta: 'Q2 2026',
  },
  {
    id: 'tool-contract-analyzer',
    name: 'ClauseGuard AI',
    category: 'Document Automation',
    status: 'Coming Soon',
    statusBadgeColor: 'violet',
    description:
      'Automated commercial contract scanner that extracts payment terms, late penalty clauses, renewal deadlines, and liability caps.',
    capabilities: ['Legal clause indexing', 'Renewal reminders', 'Risk severity scoring'],
    featured: false,
    version: 'v0.3.5-preview',
    eta: 'Q4 2026',
  },
  {
    id: 'tool-approval-flow',
    name: 'FastTrack Dual-Auth',
    category: 'Business Workflows',
    status: 'In Development',
    statusBadgeColor: 'blue',
    description:
      'Lightweight Slack and WhatsApp based payment approval dispatcher with cryptographic token signing and role-based thresholds.',
    capabilities: ['Mobile instant approval', 'Audit signoff logs', 'Escalation timers'],
    featured: false,
    version: 'v0.7.0-alpha',
    eta: 'Q3 2026',
  },
  {
    id: 'tool-prompt-vault',
    name: 'PromptMatrix Workspace',
    category: 'AI Productivity',
    status: 'Coming Soon',
    statusBadgeColor: 'violet',
    description:
      'Collaborative repository for testing, versioning, and deploying custom financial prompts with deterministic regression testing suites.',
    capabilities: ['Version control for prompts', 'Test dataset runners', 'Schema validator'],
    featured: true,
    version: 'v0.5.0-preview',
    eta: 'Q3 2026',
  },
  {
    id: 'tool-invoice-match',
    name: 'SyncInvoice Matcher',
    category: 'Accounting Automation',
    status: 'Coming Soon',
    statusBadgeColor: 'violet',
    description:
      'Three-way matching utility comparing Purchase Orders, Receiving Slips, and Vendor Invoices with automated tolerance threshold handling.',
    capabilities: ['3-way matching logic', 'Tolerance overrides', 'PO discrepancy flags'],
    featured: false,
    version: 'v0.5.2-preview',
    eta: 'Q4 2026',
  },
];
