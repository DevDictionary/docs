const moment = require('moment');
moment.locale("zh-cn");
// .vuepress/config.js
module.exports = {
    base: "/docs/",
    title: "DevDictonary",
    head: [
        ['link', { rel: 'icon', href: '/assets/img/logo.png' }],
        ['meta', { name: 'author', content: '郑翼易' }],
    ],
    plugins: {
        '@vuepress/last-updated': {
            transformer: (timestamp) => {
                return moment(timestamp).format("LLLL")
            }
        },
        '@vuepress/back-to-top': true
    },
    themeConfig: {
        lastUpdated: '更新时间',
        logo: '/assets/img/logo.png',
        nav: [
            { text: '首页', link: '/' },
            { text: '数据结构与算法', link: '/数据结构与算法/' },
            { text: '编译原理', link: '/编译原理/' },
            { text: '操作系统', link: '/操作系统/' },
            { text: '人工智能', link: '/人工智能/' },
            { text: '数据库管理', link: '/数据库管理/' },
            { text: '后端开发', link: '/后端开发/' },
            { text: '前端开发', link: '/前端开发/' },
            { text: '游戏开发', link: '/游戏开发/' },
            { text: '大数据处理', link: '/大数据处理/' },
            { text: '网络安全', link: '/网络安全/' },
            { text: '计算机视觉', link: '/计算机视觉/' },
            { text: '图像处理', link: '/图像处理/' },
            { text: '物联网', link: '/物联网/' },
        ],
        sidebar: {
            "/数据结构与算法/": [
                '',
                '时间和空间复杂度',
                '常见的数据结构',
                '十大排序',
                '查找算法',
                '字符串匹配',
                '图的常见算法',
                '贪心算法',
                '动态规划算法',
                '分治算法',
                '回溯算法',
            ],
            "/编译原理/": [
                '',
                '基础概念',
                '词法分析',
                '语法分析',
                '语义分析',
                '代码优化',
                '目标代码生成',
            ],
            "/操作系统/": [
                '',
            ],
            "/人工智能/": [
                '',
            ],
            "/数据库管理/": [
                '',
            ],
            "/后端开发/": [
                '',
            ],
            "/前端开发/": [
                '',
                '学习清单',
                '前端三件套',
                '框架与库',
                '用户体验设计',
                '性能优化',
            ],
            "/游戏开发/": [
                '',
            ],
            "/大数据处理/": [
                '',
            ],
            "/游戏开发/": [
                '',
            ],
            "/网络安全/": [
                '',
            ],
            "/计算机视觉/": [
                '',
            ],
            "/图像处理/": [
                '',
            ],
            "/物联网/": [
                '',
            ]
        }
    }
}