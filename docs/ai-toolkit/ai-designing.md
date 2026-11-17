import MarkdownReader from '@site/src/components/MarkdownReader';
import source from '@site/src/generated/designMarkdown';
import ClaudeCodeIcon from '@site/static/img/ai-icons/claude-code-dashboard.svg';
import CursorIcon from '@site/static/img/ai-icons/cursor-dashboard.svg';
import CodexIcon from '@site/static/img/ai-icons/codex-dashboard.svg';
import GeminiIcon from '@site/static/img/ai-icons/gemini-dashboard.svg';

# AI designing

<section className="ai-design-intro">
  <div className="ai-design-intro__header">
    <span className="ai-design-intro__eyebrow">Portable design guidance</span>

### Design.md

    <p className="ai-design-intro__description">One design system file for the AI tools you already use.</p>
    <p className="ai-design-intro__spec">Follows Google’s official DESIGN.md spec</p>
  </div>
  <div className="ai-design-intro__tools">
    <p className="ai-design-intro__tools-label">Works with your AI tools</p>
    <div className="ai-design-intro__grid">
      <span className="ai-design-intro__tool"><span className="ai-design-intro__logo"><ClaudeCodeIcon aria-hidden="true" /></span>Claude Code</span>
      <span className="ai-design-intro__tool"><span className="ai-design-intro__logo"><CursorIcon aria-hidden="true" /></span>Cursor</span>
      <span className="ai-design-intro__tool"><span className="ai-design-intro__logo"><CodexIcon aria-hidden="true" /></span>Codex</span>
      <span className="ai-design-intro__tool"><span className="ai-design-intro__logo"><GeminiIcon aria-hidden="true" /></span>Gemini</span>
    </div>
    <p className="ai-design-intro__more">And other AI coding assistants</p>
  </div>
</section>


<MarkdownReader content={source} filename="design.md" title="Design system guidance" initialView="ai" />


Where do I put the file?
In your project root, next to README.md. Then point to it from CLAUDE.md, AGENTS.md or your Cursor rules.

>Put DESIGN.md in your project root, then tell your agent to follow it in AGENT.md.

>Copy and paste into a skill in your AI tools

>Attach DESIGN.md file in your prompt
