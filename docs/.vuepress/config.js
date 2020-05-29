module.exports = {
  base: '',
  dest: 'dist',
  title: 'Web前端笔记',
  description: '记录Web前端知识',
  themeConfig: {
    editLinks: false,
    docsDir: 'docs',
    nav: [],
    sidebar: [
      {
        title: '常见知识',
        collapsable: false,
        children: [
          'chapter1/css',
          'chapter1/js',
          'chapter1/optimize',
        ]
      },
    ]
  }
}
