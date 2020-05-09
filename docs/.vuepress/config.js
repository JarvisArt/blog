module.exports = {
  base: '/note/',
  dest: 'dist',
  title: 'Web前端笔记',
  description: '记录Web前端知识',
  themeConfig: {
    editLinks: false,
    docsDir: 'docs',
    nav: [],
    sidebar: [
      {
        title: '基础知识',
        collapsable: false,
        children: [
          'chapter1/css',
        ]
      },
    ]
  }
}
