export default {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'Epikem Blog', // Navigation and Site Title
  siteTitleAlt: 'Epikem Blog', // Alternative Site title for SEO
  siteUrl: 'https://blog.epikem.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteBanner: '/assets/banner.jpg', // Your image for og:image tag. You can find it in the /static folder
  defaultBg: '/assets/bg.png', // default post background header
  favicon: 'src/favicon.png', // Your image for favicons. You can find it in the /src folder
  siteDescription: 'Eeikem blog', // Your site description
  author: 'Epikem', // Author for schemaORGJSONLD
  // siteLogo: '/assets/logo.png', // Image for schemaORGJSONLD
  // siteLogo: 'https://ko.gravatar.com/userimage/142407511/91e390841fbecffa3aaac55d1ae4b503.png?size=200',
  siteLogo: '',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  // userTwitter: '@mhadaily', // Twitter Username - Optional
  // ogSiteName: 'mhadaily', // Facebook Site Name - Optional
  siteFBAppID: '', // Facebook App ID - Optional
  userTwitter: '', // Twitter Username - Optional
  ogSiteName: '', // Facebook Site Name - Optional
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  // themeColor: '#3498DB',
  themeColor: '#F77F00',
  // backgroundColor: '#2b2e3c',
  backgroundColor: '#003049',

  // Settings for typography.ts
  headerFontFamily: 'Bitter',
  bodyFontFamily: 'Open Sans',
  baseFontSize: '16px',

  //
  Google_Tag_Manager_ID: 'GTM-MVP42QK',
  POST_PER_PAGE: 6,
};
