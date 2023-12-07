import {DefaultTheme, defineConfig} from 'vitepress'
import timeline from 'vitepress-markdown-timeline';
import { alertPlugin } from "markdown-it-github-alert";
// import wikilinks from 'markdown-it-wikilinks'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({

    title: 'Campus Hub Online',
    // base: '/courses/',
    // srcDir: '/post/',
    assetsDir: './static',
    description: 'This is a website for education resources sharing and management, build by vite-press.',

    // vite: {
    //     // 配置 Vite 插件，处理 SVG 文件
    //     plugins: [svgLoader()],
    // },

    lastUpdated: true,
    cleanUrls: true,

    themeConfig: {
        siteTitle: "Campus Hub Online",
        // logo: "",
        // set navigation in navbar.
        nav: nav(),
        // Search Config in Vitepress
        // https://vitepress.dev/reference/default-theme-search
        search: {
            provider: 'local',
            options: {
                locales: {
                    zh: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换'
                                }
                            }
                        }
                    },
                    en: {
                        translations: {
                            button: {
                                buttonText: 'Search Document',
                                buttonAriaLabel: 'Search Document'
                            },
                            modal: {
                                noResultsText: 'Cannot find relative content',
                                resetButtonTitle: 'Remove query conditions',
                                footer: {
                                    selectText: 'Select',
                                    navigateText: 'Switch'
                                }
                            }
                        }
                    }
                }
            }
        },
        socialLinks: [
          { icon: "github", link: "https://github.com/Anxiu0101/campus-hub-vitepress" },
          {
              icon: {
                  svg: `<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z\"/></svg>`
              },
              link: "mailto://anxiu.fyc@foxmail.com"
          }
        ],
        footer: {
            message: 'Content resources follow <a herf="https://github.com/">CC BY-NC-SA 4.0</a>, and code resources adhere to the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.\n',
            // message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
            copyright: 'Copyright © 2023 <a href="https://github.com/Anxiu0101">Anxiu0101</a>'
        },
    },

    markdown: {
        // options for markdown-it-anchor
        anchor: { permalink: false },

        // options for markdown-it-toc
        toc: { level: [1, 2] },

        // code block settings.
        // add line numbers for each line of code.
        lineNumbers: true,

        container: {
          tipLabel: '提示',
          warningLabel: '警告',
          dangerLabel: '危险',
          infoLabel: '信息',
          detailsLabel: '详情',
        },

        config: (md) => {
            // https://github.com/HanochMa/vitepress-markdown-timeline
            // https://www.npmjs.com/package/vitepress-markdown-timeline
            md.use(timeline);
            // https://github.com/ByPikod/markdown-it-github-alert
            // https://www.npmjs.com/package/markdown-it-github-alert
            md.use(alertPlugin);
        }
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: "Course",
            link: '/course/',
            activeMatch: '/course',
        },
        {
            text: "About us",
            items: [
                {
                    text: 'Team Member',
                    // TODO: set the Team Member link
                    link: '/about/team-member',
                },
                {
                    text: 'Changelog',
                    link: '/about/changelog',
                }
            ],
        },

    ]
}
