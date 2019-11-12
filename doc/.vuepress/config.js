module.exports = {
    title: '笔记',
    description: '世界上最大的谎言就是你不行',
    head: [
        ['link', { rel: 'icon', href: 'https://cdn.jsdelivr.net/gh/wliduo/Index@master/static/favicon.ico' }],
        /* ['script', { type: 'text/javascript', src: 'https://cdn.jsdelivr.net/gh/wliduo/Mark@master/' + 'assets/lib/love.js' }], */
        ['script', { type: 'text/javascript', src: 'https://cdn.jsdelivr.net/gh/wliduo/Index@master/static/count.js' }]
    ],
    // 打包文件夹
    dest: 'docs',
    // 端口
    port: 4000,
    markdown: {
        // 代码块显示行号
        /* lineNumbers: true */
    },
    /* plugins: [
        [
            '@vuepress/last-updated',
            {
                // 上次更新时间格式化
                transformer: (timestamp, lang) => {
                    // 不要忘了安装moment
                    const moment = require('moment')
                    moment.locale(lang)
                    // return moment(timestamp).fromNow()
                    return moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
                }
            }
        ]
    ], */
    themeConfig: {
        // 将同时提取markdown中h1和h2标题，显示在侧边栏上
        sidebarDepth: 2,
        // 文档更新时间，每个文件git最后提交的时间
        /* lastUpdated: '上次更新', */
        nav: [
            // 内部链接，以doc为根目录
            { text: '主页', link: '/' },
            {
                text: 'Java',
                items: [
                    { text: 'Base', link: '/java/' },
                    { text: 'Netty', link: '/netty/' }
                ]
            },
            {
                text: 'Data',
                items: [
                    { text: 'Redis', link: '/redis/' },
                    /* { text: 'MySQL', link: '/mysql/' }, */
                    { text: 'Elasticsearch', link: '/elasticsearch/' }
                ]
            },
            { text: 'Docker', link: '/docker/' },
            { text: '前端记录', link: '/front/' },
            { text: '工具命令', link: '/command/' },
            {
                text: '开源项目',
                items: [
                    { text: 'ShiroJwt', link: '/shirojwt/' },
                    { text: 'ViewGenerator', link: '/viewgenerator/' },
                    { text: 'VueStudy', link: 'https://github.com/dolyw/VueStudy' },
                    { text: 'NettyStudy', link: 'https://github.com/dolyw/NettyStudy' },
                    { text: 'Elasticsearch', link: 'https://github.com/dolyw/Elasticsearch' }
                ]
            },
            { text: '零散记录', link: '/other/' },
            { text: '编程闲话', link: '/gossip/' },
            // 外部链接
            /* { text: '我的博客', link: 'https://dolyw.com/go?url=https://blog.dolyw.com' }, */
            // 下拉列表
            {
                text: '联系',
                items: [
                    { text: '导航', link: 'https://dolyw.com/go?url=https://map.dolyw.com' },
                    { text: '博客', link: 'https://dolyw.com/go?url=https://blog.dolyw.com' },
                    { text: '音乐', link: 'https://dolyw.com/go?url=https://res.dolyw.com' },
                    { text: '留言', link: 'https://dolyw.com/go?url=https://msg.dolyw.com' },
                    { text: '简历', link: 'https://dolyw.com/go?url=https://cv.dolyw.com' },
                    { text: 'GitHub', link: 'https://dolyw.com/go?url=https://github.com/dolyw' }
                ]
            }
        ],
        sidebar: {
            // 学习记录
            '/java/': [
                ['', 'Java'],
                ['01-Thread-Safe.md', 'Java中的线程安全'],
                ['02-Thread-Pool.md', 'Java中的线程池的创建及使用'],
                ['03-List-De-Duplication.md', 'List集合去重方式及效率对比'],
                ['04-50-Details.md', 'Java性能优化的50个细节']
            ],
            '/redis/': [
                ['', 'Redis'],
                ['00-DataBaseConsistency.md', 'Redis与数据库一致性'],
                ['01-DataBaseConsistency.md', 'Redis与数据库一致性补充']
            ],
            /* '/mysql/': [
                ['', '目录']
            ], */
            '/netty/': [
                ['', 'Netty'],
                ['00-Netty-SocketIO.md', 'Netty-SocketIO实现聊天室']
            ],
            '/docker/': [
                ['', 'Docker'],
                ['00-GettingStarted.md', 'Docker入门安装'],
                ['01-VisualizationTools.md', 'Docker界面可视化'],
                ['02-Tomcat.md', 'Docker下Tomcat的使用'],
                ['03-Elasticsearch.md', 'Docker下Elasticsearch的使用']
            ],
            '/elasticsearch/': [
                ['', 'Elasticsearch'],
                ['00-GettingStarted.md', '简单了解Elasticsearch'],
                ['01-LocalInstallation', '安装本地Elasticsearch'],
                ['02-LocalInstallationIK.md', '安装本地IK分词插件'],
                ['03-SpringBootES.md', 'SpringBoot整合Elasticsearch'],
                ['04-DockerES.md', 'Docker下Elasticsearch的使用'],
                ['05-MySqlES.md', 'MySql数据同步Elasticsearch']
            ],
            // 前端记录
            '/front/': [
                ['', '组件UI库记录']
            ],
            // 工具命令
            '/command/': [
                ['', '工具命令'],
                ['01-Git-Command.md', 'Git命令记录'],
                ['02-Linux-Command.md', 'Linux命令记录'],
                ['03-Docker-Command.md', 'Docker命令记录'],
                ['04-Git-MultiUser.md', 'SSH同时使用多个Git账户'],
                ['05-Git-MultiPush.md', 'Git一次Push到多个远端']
            ],
            // 开源项目
            '/shirojwt/': [
                ['', 'ShiroJwt'],
                ['ShiroJwt01.md', '项目说明'],
                ['ShiroJwt-Interface.md', '接口文档'],
                ['ShiroJwt02-MySQL.md', '改为数据库形式(MySQL)'],
                ['ShiroJwt03-401.md', '解决无法直接返回401错误'],
                ['ShiroJwt04-Redis.md', '实现Shiro的Cache(Redis)功能']
            ],
            '/viewgenerator/': [
                ['', 'ViewGenerator']
            ],
            // 零散记录
            '/other/': [
                ['', '推荐阅读书籍博客文章'],
                ['01-CV.md', '怎么样写一个好的简历'],
                ['02-CV2.md', '怎么样写一个好的简历To'],
                ['03-Interview.md', '一些不错的面试记录收集'],
                ['05-Github-Failure.md', '解决GitHub访问不了的方法'],
                ['04-Jekyll.md', '在Windows下安装与使用Jekyll']
            ],
            // 编程闲话
            '/gossip/': [
                ['', 'Java程序员的悲哀'],
                ['01-Programmer-Slang.md', '码农有趣的黑话'],
                ['02-Technical-Interpretation.md', '史上最污技术解读'],
                ['03-Make-System.md', '阎王爷让我给他做个后台管理系统']
            ]
        }
    }
}