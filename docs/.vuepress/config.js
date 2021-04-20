module.exports = {
  title: 'Jarvis Bold',
  description: 'Just playing around',
  base: '/blog/',
  themeConfig: {
    editLinks: false,
    docsDir: 'docs',
    nav: [],
    sidebar: [
      {
        title: '前端',
        collapsable: false,
        children: [
          'fe/css',
          'fe/js',
          'fe/es6',
          'fe/vue',
          'fe/other',
          'fe/optimize',
          'fe/rxjs',
          'fe/git',
        ]
      },
    ]
  }
}