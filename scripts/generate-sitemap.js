import { writeFileSync, readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DOMAIN = 'https://yourdomain.com'; // 請替換成您的網域

// 靜態頁面
const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/projects', priority: '0.8', changefreq: 'weekly' },
    { url: '/services', priority: '0.7', changefreq: 'monthly' },
    { url: '/contact', priority: '0.7', changefreq: 'monthly' },
    { url: '/blog', priority: '0.9', changefreq: 'daily' },
];

// 讀取並解析 posts.ts
function getPosts() {
    const postsFile = readFileSync(join(__dirname, '../src/data/posts.ts'), 'utf-8');

    // 提取所有 id 和 date
    const posts = [];
    const postMatches = postsFile.matchAll(/{\s*id:\s*['"]([^'"]+)['"]/g);
    const dateMatches = postsFile.matchAll(/date:\s*['"]([^'"]+)['"]/g);

    const ids = Array.from(postMatches).map(m => m[1]);
    const dates = Array.from(dateMatches).map(m => m[1]);

    ids.forEach((id, index) => {
        posts.push({
            id,
            date: dates[index] || new Date().toISOString().split('T')[0]
        });
    });

    return posts;
}

// 讀取並解析 projects.ts
function getProjects() {
    const projectsFile = readFileSync(join(__dirname, '../src/data/projects.ts'), 'utf-8');

    // 提取所有 id
    const projectMatches = projectsFile.matchAll(/{\s*id:\s*['"]([^'"]+)['"]/g);
    const ids = Array.from(projectMatches).map(m => m[1]);

    return ids.map(id => ({ id }));
}

function generateSitemap() {
    const posts = getPosts();
    const projects = getProjects();

    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    // 靜態頁面
    staticPages.forEach(page => {
        sitemap += '  <url>\n';
        sitemap += `    <loc>${DOMAIN}${page.url}</loc>\n`;
        sitemap += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
        sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
        sitemap += `    <priority>${page.priority}</priority>\n`;
        sitemap += '  </url>\n';
    });

    // 部落格文章
    posts.forEach(post => {
        sitemap += '  <url>\n';
        sitemap += `    <loc>${DOMAIN}/blog/${post.id}</loc>\n`;
        sitemap += `    <lastmod>${post.date}</lastmod>\n`;
        sitemap += `    <changefreq>monthly</changefreq>\n`;
        sitemap += `    <priority>0.8</priority>\n`;
        sitemap += '  </url>\n';
    });

    // 專案頁面
    projects.forEach(project => {
        sitemap += '  <url>\n';
        sitemap += `    <loc>${DOMAIN}/projects/${project.id}</loc>\n`;
        sitemap += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
        sitemap += `    <changefreq>monthly</changefreq>\n`;
        sitemap += `    <priority>0.7</priority>\n`;
        sitemap += '  </url>\n';
    });

    sitemap += '</urlset>';

    // 寫入 public 資料夾
    writeFileSync(join(__dirname, '../public/sitemap.xml'), sitemap);
    console.log('✅ Sitemap generated successfully at public/sitemap.xml');
    console.log(`📊 Total URLs: ${staticPages.length + posts.length + projects.length}`);
    console.log(`   - Static pages: ${staticPages.length}`);
    console.log(`   - Blog posts: ${posts.length}`);
    console.log(`   - Projects: ${projects.length}`);
}

generateSitemap();
