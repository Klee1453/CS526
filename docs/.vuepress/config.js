import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { shikiPlugin } from '@vuepress/plugin-shiki'

export default {
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
                                    text: 'Topic 7: User Authentication',
                                    collapsible: true,
                                    children: ['/slides/slide07/s07.md'],
                                },
                                {
                                    text: 'Topic08: Operating Systems Security Basics & Unix Access Control',
                                    collapsible: true,
                                    children: ['/slides/slide08/s08.md'],
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
                        link: 'https://github.com/',
                    },
                    {
                        text: 'CS526 - PU',
                        link: 'https://www.cs.purdue.edu/homes/ninghui/courses/526_Fall14/lectures.html',
                    },
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
                                    text: 'Topic 7: User Authentication',
                                    collapsible: true,
                                    children: ['/en/slides/slide07/s07.md'],
                                },
                                {
                                    text: 'Topic 8 Operating Systems Security Basics & Unix Access Control',
                                    collapsible: true,
                                    children: ['/en/slides/slide08/s08.md'],
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
                        link: 'https://github.com/',
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
}