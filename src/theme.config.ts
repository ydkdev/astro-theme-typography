export const THEME_CONFIG: App.Locals["config"] = {
  /** blog title */
  title: "ydk-blog",
  /** your name */
  author: "ydk",
  /** website description */
  desc: "the blog of a tech-devoted coder",
  /** your deployed domain */
  website: "https://ydk.zone",
  /** your locale */
  locale: "zh-cn",
  /** theme style */
  themeStyle: "auto",
  /** your socials */
  socials: [
    {
      name: "github",
      href: "https://github.com/ydkdev",
    },
  ],
  /** your header info */
  header: {},

  /** your navigation links */
  navs: [
    {
      name: "Posts",
      href: "/posts/page/1",
    },
    {
      name: "Archive",
      href: "/archive",
    },
    {
      name: "Categories",
      href: "/categories",
    },
    {
      name: "About",
      href: "/about",
    },
  ],
  /** your category name mapping, which the `path` will be shown in the url */
  category_map: [],
  /** your comment provider */
  comments: {
    disqus: {
      shortname: "typography-astro",
    },
    // giscus: {
    //   repo: 'moeyua/astro-theme-typography',
    //   repoId: 'R_kgDOKy9HOQ',
    //   category: 'General',
    //   categoryId: 'DIC_kwDOKy9HOc4CegmW',
    //   mapping: 'title',
    //   strict: '0',
    //   reactionsEnabled: '1',
    //   emitMetadata: '1',
    //   inputPosition: 'top',
    //   theme: 'light',
    //   lang: 'zh-CN',
    //   loading: 'lazy',
    // },
    // twikoo: {
    //   envId: "https://twikoo-tau-flame.vercel.app",
    // }
  },
};
