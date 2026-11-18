import fs from 'node:fs';
import path from 'node:path';

const rawTitle = process.argv.slice(2).join(' ').trim();

if (!rawTitle) {
  console.error('Vui lòng nhập tiêu đề bài viết. Ví dụ: npm run new-post "Huong dan Docker"');
  process.exit(1);
}

function toSlug(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

const now = new Date();
const yyyy = now.getFullYear();
const mm = String(now.getMonth() + 1).padStart(2, '0');
const dd = String(now.getDate()).padStart(2, '0');
const dateStr = `${yyyy}-${mm}-${dd}`;

const slug = toSlug(rawTitle) || 'bai-viet-moi';
const folderName = `${dateStr}-${slug}`;
const targetDir = path.resolve(process.cwd(), 'src/content/posts', folderName);
const targetFile = path.join(targetDir, 'index.mdx');

if (fs.existsSync(targetFile)) {
  console.error(`Bài viết đã tồn tại tại: ${targetFile}`);
  process.exit(1);
}

fs.mkdirSync(targetDir, { recursive: true });

const safeTitle = rawTitle.replace(/"/g, '\\"');
const template = `---
title: "${safeTitle}"
description: "Mô tả ngắn gọn 140-160 ký tự cho bài viết này để tối ưu hiển thị trên Google Search."
pubDate: ${dateStr}
updatedDate: ${dateStr}
tags: ["ghichep"]
youtubeId: ""
draft: true
---
import Callout from '@/components/mdx/Callout.astro';

## 1. Giới thiệu

Viết nội dung bài chia sẻ của bạn tại đây...

<Callout type="tip" title="Ghi chú nhanh">
  Bạn có thể dùng Callout để làm nổi bật ý chính.
</Callout>

## 2. Chi tiết & Mã nguồn minh họa

\`\`\`bash
echo "Hello from ${slug}"
\`\`\`
`;

fs.writeFileSync(targetFile, template, 'utf-8');
console.log(`Đã tạo mẫu bài viết mới tại:\n${targetFile}`);
console.log('Lưu ý: Đổi `draft: false` trong frontmatter khi bạn sẵn sàng xuất bản công khai.');
