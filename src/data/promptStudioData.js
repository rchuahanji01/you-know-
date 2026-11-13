export const PROMPT_CATEGORIES = [
  {
    id: 'financial-ops',
    name: 'Financial Operations Prompts',
    badge: 'Finance Logic',
    icon: 'Calculator',
    description: 'Prompts engineered to extract, categorize, reconcile, and audit complex fiscal records without hallucinations.',
    sampleGoal: 'Reconcile 500+ unstructured credit card transactions against ERP purchase orders and flag discrepancies.',
    promptPreview: {
      role: 'SYSTEM / FINANCIAL_AUDITOR',
      instructions: [
        'Enforce strict JSON Schema compliance for every transaction row.',
        'Apply ISO 4217 currency normalization before computing variance.',
        'Flag variances exceeding >0.02% or missing matching tax ID.',
        'Output audit reasoning step-by-step with deterministic confidence score.',
      ],
      outputSchema: `{
  "audit_status": "FLAGGED_DISCREPANCY",
  "discrepancy_amount": 1420.50,
  "confidence_score": 0.998,
  "flag_reason": "PO #8491 tax rate mismatch (18% applied vs 12% statutory)",
  "remediation_action": "ROUTE_TO_CONTROLLER"
}`,
    },
  },
  {
    id: 'ai-agents',
    name: 'AI Agent Instructions',
    badge: 'Autonomous Agents',
    icon: 'Bot',
    description: 'Precise multi-turn behavior instructions, safeguard rails, tool-use definitions, and fail-safe states for enterprise AI agents.',
    sampleGoal: 'Deploy an autonomous Accounts Payable agent that validates invoice legitimacy and prepares draft payment batches.',
    promptPreview: {
      role: 'SYSTEM / AUTONOMOUS_AP_AGENT',
      instructions: [
        'Strictly verify vendor IBAN against approved internal cryptographic ledger.',
        'Never trigger payment execution if invoice hash differs from signed contract.',
        'When approval limit > $25,000, trigger mandatory two-person dual authorization.',
        'Maintain cryptographically timestamped telemetry of all reasoning steps.',
      ],
      outputSchema: `{
  "agent_decision": "APPROVAL_STAGED",
  "vendor_verification": "VERIFIED_HASH_MATCH",
  "dual_auth_required": true,
  "audit_telemetry_id": "AP-LOG-99210-SEC"
}`,
    },
  },
  {
    id: 'coding-dev',
    name: 'Coding & Dev Prompts',
    badge: 'Engineering',
    icon: 'Code2',
    description: 'Custom prompts for developers and tech teams: automated migration scripts, API converters, and type-safe integration code.',
    sampleGoal: 'Generate zero-dependency TypeScript parser for proprietary banking MT940 / CAMT.053 message feeds.',
    promptPreview: {
      role: 'SYSTEM / SENIOR_FINTECH_ENGINEER',
      instructions: [
        'Generate strict type definitions for Swift MT940 statement blocks :61: and :86:.',
        'Handle multi-line unstructured payment narratives without buffer overflows.',
        'Provide full unit test matrix covering edge cases and malformed delimiter inputs.',
      ],
      outputSchema: `export interface SwiftTransaction {
  bookingDate: Date;
  valueDate: Date;
  amount: Decimal;
  currency: 'USD' | 'EUR' | 'GBP';
  reference: string;
  narrativeStructured: Record<string, string>;
}`,
    },
  },
  {
    id: 'business-workflow',
    name: 'Business Workflow Prompts',
    badge: 'Operations',
    icon: 'Workflow',
    description: 'Tailored prompt pipelines that connect CRM, ERP, and customer communications into automated background loops.',
    sampleGoal: 'Synthesize monthly customer account health, contract expiration risk, and automated account manager executive briefs.',
    promptPreview: {
      role: 'SYSTEM / EXECUTIVE_INTELLIGENCE',
      instructions: [
        'Aggregate usage telemetry, payment timeliness, and support ticket sentiment.',
        'Synthesize 3 critical operational action items for the account team.',
        'Highlight churn probability with transparent mathematical weighting.',
      ],
      outputSchema: `{
  "account_id": "ENT-40291",
  "health_score": 88,
  "churn_risk": "LOW",
  "key_driver": "Payment cadence improved 14 days YoY",
  "recommended_action": "Present annual renewal incentive bundle"
}`,
    },
  },
  {
    id: 'doc-analysis',
    name: 'Documentation & Analysis Prompts',
    badge: 'Data Extraction',
    icon: 'FileText',
    description: 'Extract actionable intelligence from dense legal contracts, financial filings, audit reports, and investor decks.',
    sampleGoal: 'Extract material covenants, EBITDA definitions, and carve-outs from 80-page debt financing agreements.',
    promptPreview: {
      role: 'SYSTEM / LEGAL_COVENANT_EXTRACTOR',
      instructions: [
        'Locate and transcribe exact paragraph clauses regarding Debt-to-EBITDA ratios.',
        'Highlight negative covenants and cure period timeframes.',
        'Generate structured table cross-referencing annexes and definitions.',
      ],
      outputSchema: `{
  "covenant_type": "LEVERAGE_RATIO",
  "threshold": "3.50x",
  "cure_period_days": 30,
  "annex_reference": "Schedule 4.1(c)",
  "compliance_status": "MONITORED"
}`,
    },
  },
  {
    id: 'custom-tools',
    name: 'Platform-Specific Prompts',
    badge: 'Tool Integration',
    icon: 'Boxes',
    description: 'Bespoke prompts optimized specifically for your chosen AI engines (Gemini, Claude, GPT), internal spreadsheets, or custom LLM gateways.',
    sampleGoal: 'Tune prompt temperature, schema constraints, and system guardrails for internal enterprise LLM gateway deployment.',
    promptPreview: {
      role: 'SYSTEM / ENTERPRISE_GATEWAY_CONTROLLER',
      instructions: [
        'Format outputs for internal REST gateway consumption.',
        'Enforce token efficiency to reduce inferencing costs by 40%.',
        'Reject prompt injection or out-of-boundary queries gracefully.',
      ],
      outputSchema: `{
  "status": "SANITIZED_DISPATCH",
  "tokens_consumed": 218,
  "policy_compliance": true,
  "execution_latency_ms": 142
}`,
    },
  },
];

export const PROMPT_CAPABILITY_POINTS = [
  'Custom project prompts designed for your specific business requirements',
  'Coding and software development prompt systems',
  'Business workflow and operational orchestration prompts',
  'Financial operations and audit verification prompts',
  'Autonomous AI agent instructions and guardrail architectures',
  'Documentation, contract analysis, and data synthesis prompts',
  'Custom prompts tailored for your existing tools, APIs, and platforms',
];
