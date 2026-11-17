import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const logoSrc = useBaseUrl('/img/logo.svg');
  return (
    <header className={styles.hero}>
      <div className={`container ${styles.heroInner}`}>
        <div className={styles.heroContent}>
          <Link to="/" className={styles.logo} aria-label="nebulaONE home">
            <img src={logoSrc} alt="nebulaONE" />
          </Link>
          <span className={styles.eyebrow}>UX &amp; UI Documentation</span>
          <Heading as="h1" className={styles.heroTitle}>
            <span className={styles.titleLine}>Design guidance</span>
            <span className={styles.titleLine}>
              for <em className={styles.titleAccent}>humans</em> and{' '}
              <em className={styles.titleAccent}>AI</em>
            </span>
          </Heading>
          <p className={styles.heroSubtitle}>
            Practical UX and UI guidelines for creating clear, consistent
            experiences.
          </p>
          <div className={styles.buttons}>
            <Link className={`button button--primary button--lg ${styles.cta}`} to="/docs/overview/intro">
              Explore
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="UX and UI design guidelines for humans and AI systems">
      <HomepageHeader />
    </Layout>
  );
}
