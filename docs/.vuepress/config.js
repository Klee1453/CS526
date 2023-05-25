import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import MarkdownItKatex from 'markdown-it-katex'

export default {
    base: '/CS526/',
    locales: {
        '/': {
          lang: 'zh-CN',
          title: '名字还没想好',
          description: '一个对普渡大学CS526课程的翻译项目',
        },
        '/en/': {
          lang: 'en-US',
          title: 'CS526 Translation',
          description: 'A translation project of CS526!',
        },
    },
    theme: defaultTheme({
        // 默认主题配置从这里开始, 各项配置参见https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html
        logo: '/images/logo.png',
        locales: {
            '/': {
                home: '/',
                sidebar: {
                    '/slides/': [
                        {
                            text: 'CS526',
                            collapsible: true,
                            children: [
                                {
                                    text: 'Topic03: Cryptography - One-time Pad, Information Theoretic Security, and Stream Ciphers',
                                    collapsible: true,
                                    children: ['/slides/slide03/s03.md', '/slides/slide03/cs555_s08.md'],
                                },
                                {
                                    text: 'Topic07: User Authentication',
                                    collapsible: true,
                                    children: ['/slides/slide07/s07.md'],
                                },
                                {
                                    text: 'Topic08: Operating Systems Security Basics & Unix Access Control',
                                    collapsible: true,
                                    children: ['/slides/slide08/s08.md'],
                                },
                                {
                                    text: 'Topic 19: Integrity Protection Models',
                                    collapsible: true,
                                    children: ['/slides/slide19/s19.md'],
                                },
                                {
                                    text: 'Topic 22: Role and Attribute Based Access Control',
                                    collapsible: true,
                                    children: ['/slides/slide22/s22.md'],
                                },   
                            ],
                        },
                    ],
                },
                navbar: [
                    {
                        text: '首页',
                        link: '/',
                    },
                    {
                        text: 'GitHub',
                        link: 'https://github.com/Klee1453/CS526',
                    },
                    {
                        text: 'CS526 - PU',
                        link: 'https://www.cs.purdue.edu/homes/ninghui/courses/526_Fall14/lectures.html',
                    },
                    // {
                    //     text: 'CS555 - PU',
                    //     link: 'https://www.cs.purdue.edu/homes/ninghui/courses/555_Spring12/lectures.html',
                    //     activeMatch: '.*\/cs555\w*$',
                    // },
                ],
            },
            '/en/': {
                home: '/en/',
                sidebar: {
                    '/en/slides/': [
                        {
                            text: 'CS526',
                            collapsible: true,
                            children: [
                                {
                                    text: 'Topic03: Cryptography - One-time Pad, Information Theoretic Security, and Stream Ciphers',
                                    collapsible: true,
                                    children: ['/en/slides/slide03/s03.md', '/en/slides/slide03/cs555_s08.md'],
                                },  
                                {
                                    text: 'Topic 7: User Authentication',
                                    collapsible: true,
                                    children: ['/en/slides/slide07/s07.md'],
                                },
                                {
                                    text: 'Topic 8: Operating Systems Security Basics & Unix Access Control',
                                    collapsible: true,
                                    children: ['/en/slides/slide08/s08.md'],
                                },
                                {
                                    text: 'Topic 19: Integrity Protection Models',
                                    collapsible: true,
                                    children: ['/en/slides/slide19/s19.md'],
                                },
                                {
                                    text: 'Topic 22: Role and Attribute Based Access Control',
                                    collapsible: true,
                                    children: ['/en/slides/slide22/s22.md'],
                                },                                
                            ],
                        },
                    ],
                },
                navbar: [
                    {
                        text: 'Home',
                        link: '/en/',
                    },
                    {
                        text: 'GitHub',
                        link: 'https://github.com/Klee1453/CS526',
                    },
                    {
                        text: 'CS526 - PU',
                        link: 'https://www.cs.purdue.edu/homes/ninghui/courses/526_Fall14/lectures.html',
                    },
                ],
            },
        },
    }),
    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: '搜索',
                },
                '/en/': {
                    placeholder: 'Search',
                },
            },
        }),
        shikiPlugin({}),
    ],
    extendsMarkdown: (md) => {
        md.use(MarkdownItKatex)
    },
}