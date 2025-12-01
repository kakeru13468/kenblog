// 專案資料
// 新增專案：在 projects 陣列中新增一個物件即可
// 更新專案：直接修改對應的物件內容
//
// 圖片使用方式：
// 1. 封面圖片：設定 coverImage 欄位，例如：coverImage: '/images/projects/my-project-cover.jpg'
// 2. 專案截圖：設定 images 陣列，例如：images: ['/images/projects/screenshot1.jpg', '/images/projects/screenshot2.jpg']
// 3. 內文圖片：在 fullDescription 中使用 Markdown 語法，例如：![圖片說明](圖片網址)
// 4. 圖片可以放在 public/images/ 資料夾中，然後使用 /images/xxx.jpg 的路徑
//    或使用外部圖片網址 (https://...)

export interface Project {
  id: string;           // 唯一識別碼，用於 URL (例如: "ecommerce-platform")
  title: {
    zh: string;
    en: string;
  };
  description: {
    zh: string;
    en: string;
  };
  fullDescription: {
    zh: string;
    en: string;
  };
  category: {
    zh: string;
    en: string;
  };
  year: string;
  technologies: string[];
  coverImage?: string;  // 封面圖片 URL（可選），例如：'/images/projects/cover.jpg'
  images?: string[];    // 專案截圖陣列（可選），例如：['/images/projects/screenshot1.jpg']
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'kxlyrics-japanese-learning-website',
    title: {
      zh: 'KX Lyrics 日語學習網站',
      en: 'KX Lyrics Japanese Learning Website',
    },
    description: {
      zh: '一個用於學習日語的網站，提供日文歌曲學習功能',
      en: 'A website for learning Japanese, providing Japanese song learning features',
    },
    fullDescription: {
      zh: `
# 專案概述
這是一個用於學習日語的網站，提供 **日文歌曲學習** 功能。

---

## 🌟 網站由來
- 受到 **marumaru** 的啟發，在其停站期間打造出這個「唱歌學日語」的網站。
- 初衷是提供一個能 **查看日文歌曲翻譯**、並能 **同步練習日文歌** 的平台。
- 目前已累積 **100+ 首歌曲**，並持續更新中。

後來隨著 marumaru 的回歸，雖然流量受到影響，但我不希望網站只是替代品，因此調整方向：

- 不只追熱門歌，也會更新 **冷門但好聽的作品**。
- 提升網站現代化程度，提供更好的 **使用者體驗**。
- 不定期介紹 **有潛力或有趣的歌手／歌曲**，讓大家學日文歌時有更多選擇！

---

## 🎵 網站功能

### 1. **歌詞同步播放**
- 歌詞會與歌曲影片同步顯示。
- 使用者可以一邊聽一邊看，一邊練習日文歌。

### 2. **多種歌詞呈現方式**
- 支援 **羅馬字／漢字假名** 切換。
- 初學者或已具基礎的學習者都能找到適合自己的模式。

### 3. **會員系統**
- 可加入「最愛歌詞」。
- 之後能從個人頁面快速回到該歌曲。

### 4. **歌曲留言**
- 可在歌曲頁面留言交流。
- 也能看到其他使用者的心得或分享。
      `,
      en: `
## Project Overview

A website for learning Japanese, providing Japanese song learning features.

### Key Features

- Japanese song browsing and search
- Japanese song learning features
- Japanese song note features
- Japanese song pronunciation features
- Japanese song learning progress tracking

### Technical Highlights

- React for frontend
- Node.js for backend
- PostgreSQL for database
- Tailwind CSS for styling
      `,
    },
    category: {
      zh: '網頁開發',
      en: 'Web Development',
    },
    year: '2024',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    featured: true,
    liveUrl: 'https://kxlyrics.com/',
    githubUrl: '',
  },
  
];

// 取得所有專案
export function getAllProjects(): Project[] {
  return projects.sort((a, b) => parseInt(b.year) - parseInt(a.year));
}

// 根據 ID 取得單一專案
export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

// 取得精選專案
export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured);
}

// 根據分類取得專案
export function getProjectsByCategory(category: string): Project[] {
  return projects.filter(project => 
    project.category.zh === category || project.category.en === category
  );
}

// 取得所有分類
export function getAllProjectCategories(): string[] {
  const categories = new Set<string>();
  projects.forEach(project => {
    categories.add(project.category.en);
  });
  return Array.from(categories);
}

