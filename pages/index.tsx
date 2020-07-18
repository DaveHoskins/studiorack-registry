import { Component } from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/index.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { getPlugins, Plugin } from '../lib/plugins'
import { withRouter, Router } from 'next/router'

class App extends Component<{
  plugins: Plugin[],
  router: Router
}, {
  pluginsFiltered: Plugin[]
  router: Router
  query: string,
}> {

  constructor(props) {
    super(props)
    this.state = {
      pluginsFiltered: props.plugins,
      router: props.router,
      query: ''
    }
  }

  handleChange = (event) => {
    const query = event.target.value.toLowerCase()
    const filtered = this.props.plugins.filter((plugin) => {
      if (plugin.name.toLowerCase().indexOf(query) != -1 ||
        plugin.description.toLowerCase().indexOf(query) != -1 ||
        plugin.tags.includes(query)) {
        return plugin
      }
      return false
    })
    this.setState({
      pluginsFiltered: filtered,
      query: query
    })
    console.log(query, filtered)
  }

  render() {
    return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={`${styles.section} ${styles.sectionCreators}`} id="template">
          <div className={styles.container}>
            <div className={styles.inner}>
              <img className={styles.sectionImage} src={`${this.state.router.basePath}/images/creators.jpg`} alt="Creators" />
              <h2 className={styles.title}>Automate your plugin publishing workflow</h2>
              <p>Our plugin starter template uses GitHub Actions to build your plugin with the Steinberg VST3 SDK, publishing a new version straight to Github Releases.</p>
              <a className="button" href="https://github.com/audio-project-manager/apm-plugin" target="_blank">Use the plugin template</a>
            </div>
          </div>
        </section>
        <section className={`${styles.section} ${styles.sectionProducers}`} id="app">
          <div className={styles.container}>
            <div className={styles.inner}>
              <img className={styles.sectionImage} src={`${this.state.router.basePath}/images/producers.jpg`} alt="Producers" />
              <h2 className={styles.title}>Easy plugin installation &amp; management</h2>
              <p>Our app and command line tools allow you to search our plugin registry for free plugins. You can install and manage plugin versions all from one place.</p>
              <a className="button" href="https://github.com/audio-project-manager/apm-cli" target="_blank">Install the CLI</a>
            </div>
          </div>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`} id="plugins">
          <div className={utilStyles.header}>
            <h2 className={[utilStyles.headingLg, utilStyles.headerCell].join(' ')}>Plugins</h2>
            <input className={utilStyles.headerSearch} placeholder="Search" value={this.state.query} onChange={this.handleChange} />
          </div>
          <ul className={utilStyles.list}>
            {this.state.pluginsFiltered.map(({ slug, description, name, tags, version}) => (
              <li className={utilStyles.listItem} key={name}>
                <h3>
                  <Link href="/plugins/[slug]" as={`/plugins/${slug}`}>
                    <a className="hover:underline">{name} <small className={utilStyles.lightText}>v{version}</small></a>
                  </Link>
                </h3>
                <ul className={utilStyles.tags}>
                  {tags.map((tag) => (
                    <li className={utilStyles.tag} key={tag}>{tag}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    )
  }
}
export default withRouter(App)

export const getStaticProps: GetStaticProps = async () => {
  const plugins = await getPlugins()
  console.log(plugins)
  return {
    props: {
      plugins
    }
  }
}
