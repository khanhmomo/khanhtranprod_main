import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Trang chủ',
      links: [
        {
          text: 'Giới thiệu',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Dịch vụ',
          href: getPermalink('/homes/startup'),
        },
        
      ],
    },
    {
      text: 'Liên hệ',
      links: [
        {
          text: 'Features (Anchor Link)',
          href: getPermalink('/#features'),
        },
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
      ],
    },

   
  ],

};

export const footerData = {
  links: [
    
  ],

  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },

  ],
  
};
