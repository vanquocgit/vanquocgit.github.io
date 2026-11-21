export interface NavItem {
  label: string;
  shortLabel?: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export const profile = {
  siteTitle: 'Góc Cá Nhân — Vlog, CV & Công cụ Web',
  author: 'Đỗ Văn Quốc',
  initials: 'ĐVQ',
  role: 'GIS Engineer & UX/UI Designer',
  location: 'Việt Nam',
  bio: 'Ghi chép lại những kiến thức đã học qua vlog, bài viết kỹ thuật và xây dựng các công cụ nhỏ hữu ích chạy trực tiếp trên trình duyệt.',
  email: 'ban@example.com',
  nav: [
    { label: 'Trang chủ', shortLabel: 'Trang chủ', href: '/' },
    { label: 'Vlog & Bài viết', shortLabel: 'Vlog', href: '/posts' },
    { label: 'Công cụ & App', shortLabel: 'Công cụ', href: '/apps' },
    { label: 'CV', shortLabel: 'CV', href: '/cv' },
  ] satisfies NavItem[],
  socials: [
    { label: 'GitHub', href: 'https://github.com/vanquocgit' },
    { label: 'YouTube', href: 'https://youtube.com/@username' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/username' },
    { label: 'Email', href: 'mailto:ban@example.com' },
  ] satisfies SocialLink[],
};
