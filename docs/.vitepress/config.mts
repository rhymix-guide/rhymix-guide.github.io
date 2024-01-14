import { defineConfig, mergeConfig } from 'vitepress'

const customConfig = {};

if (process.env.NODE_ENV === 'production') {
  customConfig.head = [
    [
      'meta',
      { name: 'google-site-verification', content: 'zxNvFXHnilnwtr39rTNOFwgfG4lsyDevcbXIcC0FZS0' }
    ],
  ]
} else {
  customConfig.markdown = {
    lineNumbers: true,
  }
}

// https://vitepress.dev/reference/site-config
export default mergeConfig(customConfig, defineConfig({
  lang: 'ko-KR',
  title: 'Rhymix Guide',
  titleTemplate: ':title - 라이믹스 가이드',
  description: "라이믹스 가이드",
  base: '/',
  lastUpdated: true,
  head: [
    [
      'meta',
      { name: 'google-site-verification', content: 'zxNvFXHnilnwtr39rTNOFwgfG4lsyDevcbXIcC0FZS0' }
    ],
    [
      'meta',
      { name: 'naver-site-verification', content: 'b0cdbccb84b0ce74ae0d8596bc69ec8fa26e2ff3' }
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: [2, 4],
    nav: [
      {
        text: '디자인',
        items: [
          { text: '시작하기', link: '/design/template/about' },
          { text: '레이아웃', link: '/design/layout/about' },
          // { text: '스킨' },
          // { text: '위젯' },
        ]
      },
      {
        text: '확장기능',
        items: [
          { text: '시작하기', link: '/extend/basic' },
          // { text: '애드온' },
          { text: '모듈', link: '/extend/module/about' },
          // { text: '위젯' },
        ]
      },
      { text: '레퍼런스', link: '/reference/debug' },
      { text: 'Awesome', link: 'https://github.com/rhymix-guide/awesome-rhymix' },
    ],

    sidebar: {
      '/design/': [
        {
          text: '템플릿',
          items: [
            { text: '개요', link: '/design/template/about' },
            { text: '템플릿 문법', link: '/design/template/blade' },
            // { text: '템플릿 문법 (v1)', link: '/design/template/old-syntax' },
          ]
        },
        {
          text: '레이아웃 만들기',
          items: [
            { text: '개요', link: '/design/layout/about' },
            { text: '설정 파일', link: '/design/layout/conf' },
          ]
        },
        {
          text: '스킨 만들기',
          items: [
            { text: '게시판 (board)' },
            { text: '커뮤니케이션 (communication)' },
            { text: '에디터 (editor)' },
            { text: '통합검색 (integration_search)' },
            { text: '회원 (member)' },
            { text: '오류 표시 (message)' },
            { text: '알림센터 (ncenterlite)' },
            { text: '페이지 (page)' },
            { text: '설문 (poll)' },
            {
              text: '위젯',
              items: [
                { text: 'Content (content)' },
                { text: '모바일 Content (mcontent)' },
                { text: '카운터 (counter_status)' },
                { text: '언어 선택 (language_select)' },
                { text: '로그인 정보 (login_info)' },
                { text: '설문 (pollWidget)' },
              ],
            },
          ]
        },
        {
          text: '위젯 스타일 만들기',
          items: [
            { text: '개요' },
          ]
        },
        {
          text: '확장하기',
          items: [
            { text: '애드온 만들기' },
            { text: '모듈 만들기', link: '/extend/module/about' },
            { text: '위젯 만들기', link: '/extend/widget/about' },
          ]
        },
      ],

      '/extend/': [
        {
          text: '확장 기능',
          items: [
            { text: '시작하기', link: '/extend/basic' },
            { text: '설정 파일', link: '/extend/basic/manifest-info' },
            { text: '정적분석도구 사용하기', link: '/extend/basic/static-analysis' },
          ]
        },
        {
          text: '애드온 만들기',
          items: [
            { text: '개요', link: '/extend/addon' },
          ]
        },
        {
          text: '모듈 만들기',
          items: [
            { text: '개요', link: '/extend/module/about' },
            { text: '모듈 정보 및 설정', link: '/extend/module/manifest' },
            { text: '액션 정의', link: '/extend/module/action' },
            { text: '이벤트 (트리거)', link: '/extend/module/event' },
            { text: '스키마', link: '/extend/module/schema' },
            { text: '룰셋' },
          ]
        },
        {
          text: '위젯 만들기',
          items: [
            { text: '개요', link: '/extend/widget/about' },
          ]
        },
        {
          text: '디자인',
          items: [
            { text: '템플릿', link: '/design/template/about' },
            { text: '레이아웃 만들기', link: '/design/layout/about' },
            { text: '스킨 만들기' },
            { text: '위젯 스타일 만들기' },
          ]
        },
        {
          text: '기타',
          items: [
            { text: 'Composer 사용하기', link: '/extend/module/composer' },
          ]
        },
      ],

      '/reference/': [
        {
          text: '레퍼런스',
          items: [
            // { text: '라이프 사이클', link: '/reference/lifecycle' },
            { text: '디버그', link: '/reference/debug' },
            { text: '네임스페이스/autoload', link: '/reference/namespace-and-autoload' },
            { text: '템플릿' },
            {
              text: '데이터베이스', link: '/reference/database',
              items: [
                { text: '쿼리 빌더', link: '/reference/database/query-builder' },
                { text: 'DB 헬퍼', link: '/reference/database/db-helper' },
              ]
            },
            { text: '라우터', link: '/reference/router' },
            {
              text: 'Manifest',
              items: [
                {
                  text: '모듈',
                  items: [
                    { text: '액션', link: '/reference/module-manifest-actions' },
                  ]
                },
              ],
            },
            {
              text: '이벤트 (트리거)',
              link: '/reference/trigger',
              items: [
                { text: '개요', link: '/reference/trigger' },
                { text: '트리거 목록', link: '/reference/trigger-list' },
              ],
            },
            { text: '룰셋' },
            { text: '폼 필터' },
            {
              text: '주요 객체',
              items: [
                { text: '문서', link: '/reference/document' },
              ]
            },
            {
              text: '기타',
              items: [
                { text: 'changelog', link: '/reference/changelog' },
              ]
            }
          ]
        },
      ],
    },

    lastUpdated: {
      formatOptions: {
        dateStyle: 'long',
        timeStyle: undefined,
      }
    },

    externalLinkIcon: true,

    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/rhymix-guide/rhymix-guide.github.io/edit/main/docs/:path',
      text: '이 페이지 수정하기'
    },
    docFooter: {
      prev: '이전',
      next: '다음'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/rhymix-guide/rhymix-guide.github.io/' }
    ]
  },
  markdown: {
    config: (md) => {
    },
  },
  sitemap: {
    hostname: 'https://rhymix-guide.github.io/',
  },
}))
