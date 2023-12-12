## Build



### Search - Pagefind

vitepress build default by vite. And in campus hub we added the pagefind tool into.[Getting Started with Pagefind | Pagefind — Static low-bandwidth search at scale](https://pagefind.app/docs/)

```rust
cargo install pagefind
pagefind --site "public"
```



```html
<link href="/pagefind/pagefind-ui.css" rel="stylesheet">
<script src="/pagefind/pagefind-ui.js"></script>
<div id="search"></div>
<script>
    window.addEventListener('DOMContentLoaded', (event) => {
        new PagefindUI({ element: "#search", showSubResults: true });
    });
</script>
```



### Comments - [giscus](https://giscus.app/zh-CN)





### Recommendation

[VitePress 首页内容推荐 | Ceil.Top](https://ceil.top/CODES/vitepress-recommendation.html)



### Banner

[VitePress Banner组件 | Ceil.Top](https://ceil.top/CODES/vitepress-banner.html)



### AI Agent

[把人工智能嵌入到VitePress | Ceil.Top](https://ceil.top/CODES/openai-with-vitepress.html)





[xinlei3166/vitepress-demo: 使用 Vitepress 搭建组件库文档站点。 (github.com)](https://github.com/xinlei3166/vitepress-demo)





[快速开始 | PromiseUI (liyao1520.github.io)](https://liyao1520.github.io/promise-ui/quick-start/)

[单选框 | vitepress-doc-plugin (ladychatterleylover.github.io)](https://ladychatterleylover.github.io/vitepress-doc-plugin-web/component/radio/)