const purgecss = require('@fullhuman/postcss-purgecss')({
    content: ['./hugo_stats.json'],
    defaultExtractor: content => {
      const els = JSON.parse(content).htmlElements;
      return [
        ...(els.tags || []),
        ...(els.classes || []),
        ...(els.ids || []),
      ];
    },
    safelist: [
      'fadeInDown',
      'fadeInUp',
      'fadeOutUp',
      'animated',
      'on',
      'next',
      'left',
      'right',
      'sticked',
      'play',
      'stop',
      'client',
      'in',
      'navbar-right',
      'navbar-left',
      'menu-center',
      'col-half',
      'storage-name',
      'wrap-sticky',
      'brand-center',
      'megamenu-content'
    ]
  });

  module.exports = {
    plugins: [
      ...(process.env.HUGO_ENVIRONMENT === 'production' ? [purgecss] : [])
    ]
  };