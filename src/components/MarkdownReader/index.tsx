import type {HTMLAttributes, ReactNode} from 'react';
import {useEffect, useRef, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';
import {Highlight, themes} from 'prism-react-renderer';

import styles from './styles.module.css';

export type MarkdownReaderView = 'preview' | 'ai';

export type MarkdownReaderProps = {
  content: string;
  filename?: string;
  title?: string;
  initialView?: MarkdownReaderView;
};

const fallbackFilename = 'document.md';

function ActionIcon({name}: {name: 'copy' | 'check' | 'download' | 'expand' | 'collapse'}) {
  const paths = {
    copy: <><rect x="8" y="8" width="11" height="11" rx="2" /><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    download: <><path d="M12 3v12m-4-4 4 4 4-4" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" /></>,
    expand: <><path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5" /></>,
    collapse: <><path d="M3 8h5V3m13 5h-5V3M3 16h5v5m13-5h-5v5" /></>,
  };

  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function previewContent(content: string) {
  return content.replace(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/, '');
}

function CodeBlock({className, children, node: _node, ...props}: HTMLAttributes<HTMLElement> & {children?: ReactNode; node?: unknown}) {
  const [copied, setCopied] = useState(false);
  const language = /language-(\w+)/.exec(className ?? '')?.[1];
  const code = String(children).replace(/\n$/, '');

  if (!language) return <code className={className} {...props}>{children}</code>;

  const copy = async () => {
    if (typeof navigator === 'undefined' || !navigator.clipboard) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch { setCopied(false); }
  };

  return (
    <div className={styles.codeBlock}>
      <button type="button" className={styles.codeCopy} onClick={copy} aria-label={copied ? 'Code copied' : 'Copy code'} title={copied ? 'Code copied' : 'Copy code'}>
        <ActionIcon name={copied ? 'check' : 'copy'} />
      </button>
      <Highlight theme={themes.vsDark} code={code} language={language}>
        {({className: highlightedClassName, tokens, getLineProps, getTokenProps}) => (
          <pre className={`${highlightedClassName} ${styles.highlightedCode}`} {...props}>
            {tokens.map((line, index) => <div key={index} {...getLineProps({line})}>{line.map((token, tokenIndex) => <span key={tokenIndex} {...getTokenProps({token})} />)}</div>)}
          </pre>
        )}
      </Highlight>
    </div>
  );
}

function MarkdownSource({content}: {content: string}) {
  const sourceLines = content.split('\n');

  return (
    <Highlight theme={themes.vsDark} code={content} language="markdown">
      {({className, tokens, getLineProps, getTokenProps}) => (
        <pre className={`${className} ${styles.raw}`}>
          <code>{tokens.map((line, index) => (
            <span key={index} {...getLineProps({line})}>
              {sourceLines[index] === '' ? null : line.map((token, tokenIndex) => (
                <span key={tokenIndex} {...getTokenProps({token})} />
              ))}
              {index < tokens.length - 1 ? '\n' : null}
            </span>
          ))}</code>
        </pre>
      )}
    </Highlight>
  );
}

export default function MarkdownReader({content, filename = fallbackFilename, title, initialView = 'ai'}: MarkdownReaderProps): ReactNode {
  const [view, setView] = useState<MarkdownReaderView>(initialView);
  const [copyState, setCopyState] = useState<'idle' | 'success' | 'error'>('idle');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const visibleContent = previewContent(content);

  useEffect(() => {
    const syncFullscreen = () => setIsFullscreen(document.fullscreenElement === rootRef.current);
    document.addEventListener('fullscreenchange', syncFullscreen);
    return () => document.removeEventListener('fullscreenchange', syncFullscreen);
  }, []);

  const copyMarkdown = async () => {
    if (typeof navigator === 'undefined' || !navigator.clipboard) { setCopyState('error'); return; }
    try { await navigator.clipboard.writeText(content); setCopyState('success'); }
    catch { setCopyState('error'); }
    window.setTimeout(() => setCopyState('idle'), 2200);
  };

  const downloadMarkdown = () => {
    const url = URL.createObjectURL(new Blob([content], {type: 'text/markdown;charset=utf-8'}));
    const link = document.createElement('a');
    link.href = url;
    link.download = filename.endsWith('.md') ? filename : `${filename}.md`;
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
  };

  const toggleFullscreen = async () => {
    if (typeof document === 'undefined') return;
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else if (rootRef.current?.requestFullscreen) await rootRef.current.requestFullscreen();
    } catch { setIsFullscreen(false); }
  };

  return (
    <section ref={rootRef} className={styles.reader} aria-label={title ?? filename}>
      <header className={styles.header}>
        <div className={styles.documentName}>
          <strong>{title ?? filename}</strong>
          {title && <span>{filename}</span>}
        </div>
        <div className={styles.actions}>
          <button type="button" onClick={copyMarkdown} aria-label={copyState === 'success' ? 'Copied' : copyState === 'error' ? 'Copy failed' : 'Copy Markdown'} title={copyState === 'success' ? 'Copied' : copyState === 'error' ? 'Copy failed' : 'Copy Markdown'}><ActionIcon name={copyState === 'success' ? 'check' : 'copy'} /></button>
          <button type="button" onClick={downloadMarkdown} aria-label="Download Markdown" title="Download Markdown"><ActionIcon name="download" /></button>
          <button type="button" onClick={toggleFullscreen} aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'} title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}><ActionIcon name={isFullscreen ? 'collapse' : 'expand'} /></button>
        </div>
      </header>
      <span className={styles.srOnly} role="status">{copyState === 'success' ? 'Markdown copied' : copyState === 'error' ? 'Copy failed' : ''}</span>
      <div className={styles.viewBar} role="group" aria-label="Document view">
        <button type="button" onClick={() => setView('ai')} aria-pressed={view === 'ai'}>AI View</button>
        <button type="button" onClick={() => setView('preview')} aria-pressed={view === 'preview'}>Preview</button>
      </div>
      <div className={styles.body} role="region" tabIndex={0} aria-label={`${title ?? filename} ${view === 'preview' ? 'preview' : 'AI View'}`}>
        {view === 'preview' ? (
          <div className={styles.preview}>
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSanitize]} components={{code: CodeBlock, pre: ({children}) => <>{children}</>}}>{visibleContent}</ReactMarkdown>
          </div>
        ) : <MarkdownSource content={content} />}
      </div>
    </section>
  );
}
