module.exports = {
  title: '未来架构',
  description: 'Just playing arch',
  ga: 'ca-pub-9009841192314468',
  themeConfig: {
  	displayAllHeaders: true, // 默认值：false  显示所有页面的标题链接	
  	sidebar: 'auto',  // 自动生成侧栏
  	lastUpdated: 'Last Updated', //  前缀显示值，最后更新时间
    nav: [
      { text: 'Home', link: '/docs' },
      // { text: 'Guide', link: '/guide/' },
      { text: '分布式基础', 
      	items: [
          { text: 'FLP不可能性原理', link: '/basic/01-FLP不可能性原理.md' },
          { text: 'CAP原理', link: '/basic/02-CAP理论.md' },
          { text: 'Base理论', link: '/basic/03-Base理论.md' },
          { text: '分布式一致性', link: '/basic/04-分布式一致性.md' },
          { text: '2PC-and-3PC', link: '/basic/05-2PC-and-3PC.md' },
          { text: 'Paxos算法', link: '/basic/06-Paxos算法.md' },
          { text: 'Raft算法', link: '/basic/07-Raft算法.md' },
          { text: 'Zab协议', link: '/basic/08-Zab协议.md' }
        ] 
      },
      { text: '技术架构', 
      	items: [
          { text: '分库分表设计', link: '/tech/db-design/' },
          { text: '冷热数据分离', link: '/tech/db-data/' },
          { text: '缓存设计原则', link: '/tech/cache/' },
          { text: '分布式事务', link: '/tech/tran/' }
        ] 
      },{ text: '场景架构', 
      	items: [
          { text: '电商(秒杀、库存、sku)', link: '/scene/shop/' },
          { text: '支付(聚合、三方、银联)', link: '/scene/pay/' },
          { text: '风控(支付、信贷)', link: '/scene/risk/' }
        ] 
      },{ text: '技术选型', 
      	items: [
          { text: '前端', link: '/scene/shop/' },
          { text: '后端', link: '/scene/pay/' },
          { text: '大数据', link: '/scene/risk/' },
          { text: '数据库', link: '/tech/db-design/' },
          { text: '运维', link: '/tech/db-data/' },
          { text: '测试', link: '/tech/cache/' },
          { text: '产品', link: '/tech/tran/' }
        ] 
      },{ text: 'Devops', 
      	items: [
      	  { text: '持续交付方案', link: '/scene/shop/' },
          { text: '自动化测试', link: '/scene/shop/' }
        ] 
      },
      // ,{ text: '研发平台搭建', 
      // 	items: [
      //     { text: '容器化部署', link: '/scene/shop/' },
      //     { text: '物理机部署', link: '/scene/pay/' }
      //   ] 
      // }
      { text: '开发资源', 
      	items: [
          { text: 'JSON编辑器', link: 'https://www.bejson.com/jsoneditoronline' },
          { text: 'CRON表达式', link: 'http://cron.qqe2.com/' },
          { text: '谷歌趋势', link: 'https://trends.google.com/trends' }
        ] 
      },
      { text: 'Github', link: 'https://github.com/yfmin' },
    ]
  },
  plugins: [
    ['@vuepress/google-analytics', {
        ga: 'ca-pub-9009841192314468'//你的Google Analytics ID
    }],
  ]
}