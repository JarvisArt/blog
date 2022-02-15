module.exports = {
  title: 'Jarvis Bold',
  description: 'Just playing around',
  base: '/blog/',
  themeConfig: {
    editLinks: true,
    docsDir: 'docs',
    nav: [],
    sidebar: [
      {
        text: '前端',
        link: '/fe/',
        children: [
          'css',
          'js',
          'es6',
          'vue',
          'react-hooks',
          'typescript',
          'other',
          'optimize',
          'rxjs',
          'git',
        ]
      },
    ]
  }
}