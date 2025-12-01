// 部落格文章資料
// 新增文章：在 posts 陣列中新增一個物件即可
// 更新文章：直接修改對應的物件內容
//
// 圖片使用方式：
// 1. 封面圖片：設定 coverImage 欄位，例如：coverImage: '/images/blog/my-cover.jpg'
// 2. 內文圖片：在 content 中使用 Markdown 語法，例如：![圖片說明](圖片網址)
//    範例：![極簡設計範例](https://example.com/image.jpg)
// 3. 圖片可以放在 public/images/ 資料夾中，然後使用 /images/xxx.jpg 的路徑
//    或使用外部圖片網址 (https://...)

export interface BlogPost {
  id: string;           // 唯一識別碼，用於 URL (例如: "minimalist-web-design")
  title: {
    zh: string;
    en: string;
  };
  excerpt: {
    zh: string;
    en: string;
  };
  content: {
    zh: string;
    en: string;
  };
  date: string;         // 發布日期 (例如: "2024-11-28")
  readTime: number;     // 閱讀時間（分鐘）
  category: {
    zh: string;
    en: string;
  };
  tags: string[];       // 標籤
  coverImage?: string;  // 封面圖片 URL（可選），例如：'/images/blog/cover.jpg' 或 'https://...'
  author: string;       // 作者名稱
}

export const posts: BlogPost[] = [
  // === KX Lyrics 日語學習系列文章 ===
  {
    id: 'minami373-singer-introduction',
    title: {
      zh: '用盡全力、聲嘶力竭地活著-美波-歌手介紹',
      en: 'Minami - Singer Introduction',
    },
    excerpt: {
      zh: '人生短暫，沒有必要為了迎合他人而活',
      en: 'Life is short, there is no need to live for others.',
    },
    content: {
      zh: `
# 美波 ─ 用嘶吼唱出迷惘與堅持的歌手

「人生短暫，沒有必要為了迎合他人而活。」

這是美波的生命哲學。她的音樂總是充滿自我懷疑、衝突、痛苦，但也從不願放棄。做任何事都用盡全力，聲嘶力竭。

---

## 出身與音樂啟蒙

來自 **埼玉縣** 的美波，在年幼時受到 **尾崎豐** 的衝擊，開始作詞作曲。

高中買下第一把吉他後，便展開了她的音樂之路。

---

## 不順遂卻執著的音樂之路

美波的創作生涯並不是一路順風。

她曾在演唱會分享，剛開始做音樂時非常孤獨：

- 從 **沒有人觀看的 live house** 開始
- 不斷自我懷疑、也曾想過放棄
- 無數次否定自己
- 甚至唱歌時會露出「只有自己一個人、好可憐」的表情

但即便如此，她仍然 **死命地抓住音樂**。

也因此，在她的作品裡，可以聽見大量與自己的對白、與自我掙扎的對抗。

聽過美波的人，都能感受到那份從迷惘、自我否定到努力堅持的情緒，她是一位能讓人深深共鳴的歌手。

---

## 讓大眾認識她的契機──《カワキヲアメク》

讓她真正走進大眾視野的，是動畫《家有女友》的片頭曲 **〈カワキヲアメク〉**。

這首歌奠定了她的代表性印象：

- **擔心到令人心疼的嘶吼音色**
- **情緒濃烈的歌詞**
- **帶有疾走感的旋律**
- **與動畫情緒完美呼應**

也因為這首歌，大家第一次認識到這位令無數人共鳴的歌手。目前播放量已突破 **2.4 億次**。

---

## 我與美波──被音樂拯救的瞬間

我也曾是被美波拯救的人。

在迷惘低潮的時期，我聽到了 **〈ライラック（紫丁香）〉**。

這首歌告訴我：

> 「不要為了迎合他人而活。  
> 人生光是為了自己用盡全力，就已經沒有多餘的力氣。」

這句話徹底改變了我對人生的態度。

---

## 美波曾說過

> **失敗、挫折、痛苦，這些一定會讓你變得更堅強。**  
> **如果在失敗之後，前方幾步就有成功在等著你，**  
> **那現在選擇放棄實在太可惜了。**  
> **如果有人正在為自己的人生苦惱，**  
> **我希望能與大家並肩，一起慢慢往前走。**

這樣一位與我們普通人如此接近、感受如此貼近的歌手，怎麼會讓人不喜歡她呢！

---

## 給正在閱讀的你

希望大家看完我的介紹後，能去聽聽更多美波的歌曲。

無論你現在：

- 正感到迷惘
- 處在人生的十字路口
- 或正在朝夢想前進

你都能從美波的音樂裡，找到屬於你的感受與詮釋。

在最後附上聯兩年參戰的演唱會照片
---

![美波演唱會 2024](/images/2024minami.jpg)

![美波演唱會 2025 - EARTH-TICATION](/images/2025minami.jpg)

      `,
      en: `
# Learn Japanese Through Songs: Start Your Journey with Music

There are many ways to learn Japanese, but learning through music is definitely one of the most enjoyable. At [KX Lyrics](https://kxlyrics.com/articles), we're dedicated to helping people learn Japanese through songs.

## Why Learn Japanese Through Songs?

### 1. Increased Motivation
When listening to songs you love, learning becomes enjoyment rather than a chore.

### 2. Natural Vocabulary Retention
The melody helps you remember words and phrases from the lyrics more easily.

### 3. Learn Authentic Expressions
Japanese songs contain many everyday conversational phrases and authentic expressions.

### 4. Improve Pronunciation
Singing along helps you practice pronunciation and intonation.

## How to Effectively Learn Japanese Through Songs?

1. **Choose songs appropriate for your level** - Beginners should start with slower songs with simpler lyrics
2. **Listen several times first** - Familiarize yourself with the melody and overall feel
3. **Follow along with lyrics** - Listen while reading the lyrics
4. **Look up new words** - Mark unfamiliar words and look up their meanings
5. **Practice singing along** - Try to sing along to practice pronunciation
6. **Understand the grammar** - Analyze the grammatical structures in the lyrics

## Recommended Beginner Songs

- **Sakura (Cherry Blossoms)** - Naotaro Moriyama
- **Ito (Thread)** - Miyuki Nakajima
- **Himawari no Yakusoku** - Motohiro Hata

## Conclusion

Music is a bridge that transcends language barriers. Learning Japanese through songs is not only effective but also allows you to deeply understand Japanese culture. Start your musical Japanese learning journey today!

For more learning resources, visit [KX Lyrics](https://kxlyrics.com/articles)
      `,
    },
    date: '2025-12-01',
    readTime: 5,
    category: {
      zh: '歌手分享',
      en: 'Singer Sharing',
    },
    tags: ['歌手', '音樂', '分享', '美波'],
    author: 'Kakeru',
  },
 
];

// 取得所有文章
export function getAllPosts(): BlogPost[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// 根據 ID 取得單篇文章
export function getPostById(id: string): BlogPost | undefined {
  return posts.find(post => post.id === id);
}

// 根據分類取得文章
export function getPostsByCategory(category: string): BlogPost[] {
  return posts.filter(post => 
    post.category.zh === category || post.category.en === category
  );
}

// 取得所有分類
export function getAllCategories(): string[] {
  const categories = new Set<string>();
  posts.forEach(post => {
    categories.add(post.category.en);
  });
  return Array.from(categories);
}

