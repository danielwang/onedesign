import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const logo = useBaseUrl('/img/logo.svg');
  const arrow = useBaseUrl('/img/home-explore-arrow.svg');

  return (
    <Layout
      title={siteConfig.title}
      description="Design language for nebulaONE">
      <main className={`${styles.page} home-landing`}>
        <div className={styles.content}>
          <Link to="/" className={styles.brand} aria-label="ONEdesign home">
            <img src={logo} alt="" />
          </Link>
          <Heading as="h1" className={styles.tagline}>
            Design language for <strong>nebula</strong>ONE
          </Heading>
          <Link to="/docs/overview/intro" className={`button ${styles.explore}`}>
            Explore <img src={arrow} alt="" aria-hidden="true" width="20" height="20" />
          </Link>
        </div>
      </main>
    </Layout>
  );
}
