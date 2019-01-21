module.exports = {
  title: 'Parallax Developer Docs',
  description:
    'The go-to reference for developer guides, explainations and implimentations',
  themeConfig: {
    sidebar: [
      {
        title: 'Quick Links',
        children: ['/', '/about/']
      },
      {
        title: 'Guides',
        collapsable: false,
        children: ['/guides/idle-until-urgent/', '/guides/next-gen-images/']
      }
    ],
    displayAllHeaders: true,
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    repo: 'parallax/developer-docs',
    docsDir: 'docs'
  }
}
