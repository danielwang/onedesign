import type {ReactNode} from 'react';
import {useEffect, useRef, useState} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const stageWidth = 892;
const stageHeight = 558;

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const panel = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [compact, setCompact] = useState(false);
  const assets = useBaseUrl('/img/landing/');

  useEffect(() => {
    if (!panel.current) return;
    const element = panel.current;
    const observer = new ResizeObserver(() => {
      const {width, height} = element.getBoundingClientRect();
      const isCompact = window.innerWidth <= 800;
      setCompact(isCompact);
      setScale(Math.max(0.1, Math.min(1, (width - 48) / stageWidth, (height - 48) / (isCompact ? 340 : stageHeight))));
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const guide = (asset: string, position: string) =>
    <img className={`${styles.guide} ${position}`} src={`${assets}line-${asset}.svg`} alt="" />;

  return (
    <Layout title={siteConfig.title} description="Design language for nebulaONE">
      <main className={`${styles.page} home-landing`}>
        <section className={styles.intro} aria-labelledby="home-title">
          <div className={styles.introContent}>
            <Link to="/" className={styles.brand} aria-label="ONEdesign home">
              <img src={`${assets}logo-symbol.svg`} alt="" width="79" height="59" />
              <img src={`${assets}logo-wordmark.svg`} alt="" width="177" height="33" />
            </Link>
            <Heading as="h1" id="home-title" className={styles.tagline}>
              Design language for <strong>nebula</strong>ONE
            </Heading>
            <Link to="/docs/overview/intro" className={`button ${styles.explore}`}>
              Explore <img src={`${assets}arrow.svg`} alt="" aria-hidden="true" width="20" height="20" />
            </Link>
          </div>
        </section>
        <section className={styles.visual} ref={panel} aria-label="ONEdesign design disciplines">
          <div className={styles.stageSpace} style={{width: stageWidth * scale, height: (compact ? 340 : stageHeight) * scale}}>
            <div className={styles.stage} style={{transform: `scale(${scale}) translateY(${compact ? -120 : 0}px)`}}>
              <span className={`${styles.label} ${styles.visualDesign}`}>Visual design</span>
              {guide('visual', styles.visualLine)}
              <span className={`${styles.label} ${styles.responsiveDesign}`}>Responsive design</span>
              {guide('responsive', styles.responsiveLine)}
              <span className={`${styles.label} ${styles.accessibility}`}>Accessibility</span>
              {guide('accessibility', styles.accessibilityLine)}
              <span className={`${styles.label} ${styles.animation}`}>Animation and interaction design</span>
              {guide('animation', styles.animationLine)}
              <div className={`${styles.layerFrame} ${styles.uxFrame}`} aria-hidden="true">
                <div className={`${styles.layerPlane} ${styles.uxPlane}`}>
                  <div className={styles.wireframe}>
                    <div className={styles.wireNav}><i /><div><i /><i /><i /></div></div>
                    <div className={styles.wireBody}>
                      <div className={styles.wireCopy}><i /><i /><i /></div>
                      <div className={styles.wireFlow}>
                        <div className={styles.flowNodes}><i /><i /><i /></div>
                        <img src={`${assets}line-flow.svg`} alt="" />
                        <div className={styles.flowFoot}><i /><i /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.layerFrame} ${styles.uiFrame}`} aria-hidden="true">
                <div className={`${styles.layerPlane} ${styles.uiPlane}`}>
                  <img src={`${assets}ui-preview.png`} alt="" />
                </div>
              </div>
              <span className={`${styles.label} ${styles.research}`}>User research</span>
              {guide('research', styles.researchLine)}
              <span className={`${styles.label} ${styles.data}`}>Data, analytics</span>
              {guide('data', styles.dataLine)}
              <span className={`${styles.label} ${styles.principles}`}>Design Principles</span>
              {guide('principles', styles.principlesLine)}
              <span className={`${styles.label} ${styles.architecture}`}>Information architecture</span>
              {guide('research', styles.architectureLine)}
            </div>
          </div>
          <ul className={styles.disciplineList} aria-label="Design disciplines">
            <li>Visual design</li>
            <li>Responsive design</li>
            <li>Accessibility</li>
            <li>Animation and interaction design</li>
            <li>User research</li>
            <li>Data, analytics</li>
            <li>Design Principles</li>
            <li>Information architecture</li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}
