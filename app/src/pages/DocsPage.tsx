import { useState } from 'react';
import SovereignDataStreams from '../components/SovereignDataStreams';
import { Search, Copy, Check, ChevronRight } from 'lucide-react';

const docSections = [
  {
    id: 'auth',
    title: 'Authentication',
    content: `All API requests require an API key passed in the Authorization header.\n\n## API Key\n\nYour API key can be generated from the Eurostack dashboard. Include it in every request:\n\n    curl https://api.eurostack.ai/v1/models \\
      -H "Authorization: Bearer YOUR_API_KEY"\n\n## Base URL\n\n    https://api.eurostack.ai/v1\n\nAll endpoints are served over HTTPS. Unencrypted HTTP requests are rejected.`,
  },
  {
    id: 'models',
    title: 'List Models',
    endpoint: 'GET /models',
    content: `Retrieve a list of available models for inference.\n\n    curl https://api.eurostack.ai/v1/models \\
      -H "Authorization: Bearer YOUR_API_KEY"\n\n## Response\n\n    {\n      "object": "list",\n      "data": [\n        {\n          "id": "glm-5.2",\n          "object": "model",\n          "created": 1750000000,\n          "owned_by": "z.ai"\n        },\n        {\n          "id": "deepseek-v4-pro",\n          "object": "model",\n          "created": 1750000000,\n          "owned_by": "deepseek-ai"\n        },\n        {\n          "id": "deepseek-v4-flash",\n          "object": "model",\n          "created": 1750000000,\n          "owned_by": "deepseek-ai"\n        },\n        {\n          "id": "mistral-large-3",\n          "object": "model",\n          "created": 1733100000,\n          "owned_by": "mistralai"\n        },\n        {\n          "id": "llama-4-scout",\n          "object": "model",\n          "created": 1744000000,\n          "owned_by": "meta"\n        }\n      ]\n    }`,
  },
  {
    id: 'completions',
    title: 'Chat Completions',
    endpoint: 'POST /chat/completions',
    content: `Generate a chat completion from a conversation.\n\n    curl https://api.eurostack.ai/v1/chat/completions \\
      -H "Authorization: Bearer YOUR_API_KEY" \\
      -H "Content-Type: application/json" \\
      -d '{\n        "model": "deepseek-v4-pro",\n        "messages": [\n          {"role": "system", "content": "You are a helpful assistant."},\n          {"role": "user", "content": "Hello!"}\n        ],\n        "temperature": 0.7,\n        "max_tokens": 256\n      }'\n\n## Request Body\n\n| Parameter | Type | Required | Description |\n|-----------|------|----------|-------------|\n| model | string | Yes | Model ID (e.g., deepseek-v4-pro) |\n| messages | array | Yes | Array of message objects |\n| temperature | float | No | Sampling temperature (0-2, default 1) |\n| max_tokens | integer | No | Maximum tokens to generate |\n| top_p | float | No | Nucleus sampling parameter |\n| stream | boolean | No | Stream response tokens |\n\n## Response\n\n    {\n      "id": "chatcmpl-abc123",\n      "object": "chat.completion",\n      "created": 1700000000,\n      "model": "deepseek-v4-pro",\n      "choices": [\n        {\n          "index": 0,\n          "message": {\n            "role": "assistant",\n            "content": "Hello! How can I assist you today?"\n          },\n          "finish_reason": "stop"\n        }\n      ],\n      "usage": {\n        "prompt_tokens": 25,\n        "completion_tokens": 15,\n        "total_tokens": 40\n      }\n    }`,
  },
  {
    id: 'embeddings',
    title: 'Embeddings',
    endpoint: 'POST /embeddings',
    content: `Generate vector embeddings for text input.\n\n    curl https://api.eurostack.ai/v1/embeddings \\
      -H "Authorization: Bearer YOUR_API_KEY" \\
      -H "Content-Type: application/json" \\
      -d '{\n        "model": "mistral-embed",\n        "input": "The quick brown fox"\n      }'\n\n## Request Body\n\n| Parameter | Type | Required | Description |\n|-----------|------|----------|-------------|\n| model | string | Yes | Embedding model ID |\n| input | string/array | Yes | Text to embed |\n\n## Response\n\n    {\n      "object": "list",\n      "data": [\n        {\n          "object": "embedding",\n          "embedding": [0.0023064255, -0.009327292],\n          "index": 0\n        }\n      ],\n      "model": "mistral-embed",\n      "usage": {\n        "prompt_tokens": 8,\n        "total_tokens": 8\n      }\n    }`,
  },
  {
    id: 'streaming',
    title: 'Streaming',
    content: `Enable streaming by setting stream: true in your chat completion request.\n\n    curl https://api.eurostack.ai/v1/chat/completions \\
      -H "Authorization: Bearer YOUR_API_KEY" \\
      -H "Content-Type: application/json" \\
      -d '{\n        "model": "deepseek-v4-pro",\n        "messages": [{"role": "user", "content": "Say hello"}],\n        "stream": true\n      }'\n\nThe server will return SSE (Server-Sent Events) with partial message deltas:\n\n    data: {"id":"...","object":"chat.completion.chunk","choices":[{"delta":{"content":"Hello"}}]}\n\n    data: {"id":"...","object":"chat.completion.chunk","choices":[{"delta":{"content":"!"}}]}\n\n    data: [DONE]`,
  },
  {
    id: 'errors',
    title: 'Error Handling',
    content: `The API uses standard HTTP response codes.\n\n| Code | Meaning |\n|------|---------|\n| 200 | Success |\n| 400 | Bad Request |\n| 401 | Unauthorized |\n| 429 | Rate Limited |\n| 500 | Server Error |\n\n    {\n      "error": {\n        "message": "Invalid API key",\n        "type": "authentication_error",\n        "code": "invalid_api_key"\n      }\n    }`,
  },
];

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative group my-6">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 text-slate-euro hover:text-ice transition-colors opacity-0 group-hover:opacity-100"
        aria-label="Copy code"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
      <pre className="bg-navy-50 border border-slate-euro/20 p-5 overflow-x-auto rounded">
        <code className="font-mono text-sm text-ice/90">{code}</code>
      </pre>
    </div>
  );
}

function DocContent({ content }: { content: string }) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let codeBuffer: string[] = [];
  let inCode = false;
  let inTable = false;
  let tableBuffer: string[] = [];
  let key = 0;

  const flushCode = () => {
    if (codeBuffer.length > 0) {
      const code = codeBuffer.join('\n');
      elements.push(<CodeBlock key={`code-${key++}`} code={code} />);
      codeBuffer = [];
      inCode = false;
    }
  };

  const flushTable = () => {
    if (tableBuffer.length > 0) {
      const rows = tableBuffer.filter((r) => !r.match(/^\|[-:\|\s]+\|$/));
      if (rows.length > 0) {
        const headers = rows[0].split('|').map((h) => h.trim()).filter(Boolean);
        const dataRows = rows.slice(1);
        elements.push(
          <div key={`table-${key++}`} className="overflow-x-auto my-6">
            <table className="w-full text-sm border border-slate-euro/20">
              <thead>
                <tr className="bg-navy-50">
                  {headers.map((h, i) => (
                    <th key={i} className="text-left p-3 font-mono text-xs text-slate-euro uppercase tracking-wider border-b border-slate-euro/20">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataRows.map((row, ri) => {
                  const cells = row.split('|').map((c) => c.trim()).filter(Boolean);
                  return (
                    <tr key={ri} className="border-b border-slate-euro/10 hover:bg-navy-50/50">
                      {cells.map((cell, ci) => (
                        <td key={ci} className="p-3 text-ice/80 font-mono text-xs">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      }
      tableBuffer = [];
      inTable = false;
    }
  };

  for (const line of lines) {
    const trimmed = line.trimStart();

    // Code block detection: 4-space indented lines
    if (trimmed.length > 0 && line.startsWith('    ')) {
      flushTable();
      inCode = true;
      codeBuffer.push(line.slice(4));
      continue;
    }

    if (inCode && (line.trim() === '' || line.startsWith('    '))) {
      if (line.startsWith('    ')) {
        codeBuffer.push(line.slice(4));
      } else {
        codeBuffer.push('');
      }
      continue;
    }

    if (inCode) {
      flushCode();
    }

    // Table detection
    if (line.startsWith('|')) {
      inTable = true;
      tableBuffer.push(line);
      continue;
    } else if (inTable) {
      flushTable();
    }

    // Headers
    if (line.startsWith('## ')) {
      elements.push(
        <h3 key={`h-${key++}`} className="font-serif text-2xl text-ice mt-12 mb-4 uppercase tracking-wide">
          {line.replace('## ', '')}
        </h3>
      );
      continue;
    }

    // Bold text
    if (line.startsWith('**') && line.endsWith('**') && line.length < 100) {
      elements.push(
        <p key={`b-${key++}`} className="font-sans font-semibold text-ice mt-6 mb-2">
          {line.replace(/\*\*/g, '')}
        </p>
      );
      continue;
    }

    // Inline code with backtick markers
    const hasInlineCode = line.includes('`');
    if (hasInlineCode && line.trim()) {
      const parts: React.ReactNode[] = [];
      let remaining = line;
      let pi = 0;

      while (remaining.length > 0) {
        const idx = remaining.indexOf('`');
        if (idx === -1) {
          parts.push(<span key={`t-${pi++}`}>{remaining}</span>);
          break;
        }
        if (idx > 0) {
          parts.push(<span key={`t-${pi++}`}>{remaining.slice(0, idx)}</span>);
        }
        const endIdx = remaining.indexOf('`', idx + 1);
        if (endIdx === -1) {
          parts.push(<span key={`t-${pi++}`}>{remaining.slice(idx)}</span>);
          break;
        }
        const codeText = remaining.slice(idx + 1, endIdx);
        parts.push(
          <code key={`ic-${pi++}`} className="bg-alert/10 text-alert px-1.5 py-0.5 rounded font-mono text-xs">
            {codeText}
          </code>
        );
        remaining = remaining.slice(endIdx + 1);
      }

      elements.push(
        <p key={`p-${key++}`} className="text-slate-euro text-sm leading-relaxed my-3">
          {parts}
        </p>
      );
      continue;
    }

    if (line.trim()) {
      elements.push(
        <p key={`p-${key++}`} className="text-slate-euro text-sm leading-relaxed my-3">
          {line}
        </p>
      );
    }
  }

  flushCode();
  flushTable();

  return <>{elements}</>;
}

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('auth');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSections = docSections.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-navy-100">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <SovereignDataStreams slowMode />
        <div className="relative z-10 text-center section-padding">
          <p className="font-mono text-xs text-alert uppercase tracking-widest mb-4">
            API Reference
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-ice uppercase tracking-wide mb-8">
            DOCUMENTATION
          </h1>
          <div className="relative max-w-md mx-auto">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-euro" />
            <input
              type="text"
              placeholder="Search endpoints..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-navy-50 border border-slate-euro/30 text-ice pl-12 pr-4 py-3 font-mono text-sm focus:outline-none focus:border-alert transition-colors rounded"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="section-padding py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="lg:w-1/4 lg:sticky lg:top-24 lg:self-start">
            <nav className="space-y-1">
              {filteredSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    const el = document.getElementById(`docs-${section.id}`);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className={`w-full text-left px-4 py-3 font-mono text-sm transition-all duration-200 flex items-center gap-2 ${
                    activeSection === section.id
                      ? 'text-alert border-l-2 border-alert bg-alert/5'
                      : 'text-slate-euro hover:text-ice hover:bg-navy-50 border-l-2 border-transparent'
                  }`}
                >
                  <ChevronRight
                    size={14}
                    className={activeSection === section.id ? 'opacity-100' : 'opacity-0'}
                  />
                  {section.title}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <div className="lg:w-3/4 space-y-8">
            {filteredSections.map((section) => (
              <div
                key={section.id}
                id={`docs-${section.id}`}
                className="border-b border-slate-euro/10 pb-12 last:border-0"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="font-serif text-3xl text-ice uppercase tracking-wide mb-2">
                      {section.title}
                    </h2>
                    {section.endpoint && (
                      <span className="font-mono text-sm text-alert bg-alert/10 px-3 py-1 rounded">
                        {section.endpoint}
                      </span>
                    )}
                  </div>
                </div>
                <DocContent content={section.content} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
