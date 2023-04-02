// .vuepress/config.js
module.exports = {
    base: "/docs/",
    title: "DevDictonary",
    head: [
        ['link', { rel: 'icon', href: '/assets/img/logo.png' }],
        ['meta', { name: 'author', content: '郑翼易' }],
    ],
    themeConfig: {
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
            "/前端开发/": [
                '',
                '学习清单',
                '前端三件套',
                '框架与库',
                '用户体验设计',
                '性能优化',
            ],
            "/数据结构与算法/": [
                '',
                '时间和空间复杂度',
                '十大排序',
                '查找算法',
                '字符串匹配',
            ],
        }
    }
}