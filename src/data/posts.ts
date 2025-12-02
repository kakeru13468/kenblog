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
    jp: string;
  };
  excerpt: {
    zh: string;
    en: string;
    jp: string;
  };
  content: {
    zh: string;
    en: string;
    jp: string;
  };
  date: string;         // 發布日期 (例如: "2024-11-28")
  readTime: number;     // 閱讀時間（分鐘）
  category: {
    zh: string;
    en: string;
    jp: string;
  };
  tags: string[];       // 標籤
  coverImage?: string;  // 封面圖片 URL（可選），例如：'/images/blog/cover.jpg' 或 'https://...'
  author: string;       // 作者名稱
}

export const posts: BlogPost[] = [
  {
    id: 'minami373-singer-introduction',
    title: {
      zh: '用盡全力、聲嘶力竭地活著-美波-歌手介紹',
      en: 'Minami - Singer Introduction',
      jp: '全力で、声を枯らして生きる - 美波 - 歌手紹介',
    },
    excerpt: {
      zh: '人生短暫，沒有必要為了迎合他人而活',
      en: 'Life is short, there is no need to live for others.',
      jp: '人生は短い、他人に合わせて生きる必要なんてない。',
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
# Minami - The Singer Who Screams Out Confusion and Persistence

"Life is short, there is no need to live to please others."

This is Minami's philosophy of life. Her music is always full of self-doubt, conflict, and pain, but she never gives up. She does everything with all her might, screaming her heart out.

---

## Origin and Musical Enlightenment

From **Saitama Prefecture**, Minami was impacted by **Yutaka Ozaki** at a young age and began writing lyrics and composing music.

After buying her first guitar in high school, she started her musical journey.

---

## A Rough but Persistent Musical Path

Minami's creative career was not smooth sailing.

She once shared at a concert that she was very lonely when she first started making music:

- Started from **live houses with no audience**
- Constantly doubted herself and thought about giving up
- Denied herself countless times
- Even had an expression of "I'm all alone, how pitiful" while singing

But even so, she still **clung desperately to music**.

Therefore, in her works, you can hear a lot of dialogue with herself and resistance against self-struggle.

Anyone who has heard Minami can feel the emotions ranging from confusion and self-denial to striving to persist. She is a singer who resonates deeply with people.

---

## The Opportunity to be Known by the Public - "Kawaki wo Ameku"

What truly brought her into the public eye was the opening theme song **"Kawaki wo Ameku"** for the anime "Domestic Girlfriend".

This song established her representative impression:

- **Heartbreakingly screaming tone**
- **Emotionally intense lyrics**
- **Melody with a sense of sprinting**
- **Perfectly echoing the anime's emotions**

Because of this song, everyone recognized this singer who resonates with countless people for the first time. Currently, the view count has exceeded **240 million**.

---

## Me and Minami - The Moment I Was Saved by Music

I was also someone saved by Minami.

During a period of confusion and low tide, I heard **"Lilac"**.

This song told me:

> "Don't live to please others.
> Life uses up all your strength just living for yourself, there's no spare energy left."

This sentence completely changed my attitude towards life.

---

## Minami Once Said

> **Failure, frustration, and pain will definitely make you stronger.**
> **If success is waiting for you just a few steps ahead after failure,**
> **It would be a pity to give up now.**
> **If anyone is worrying about their life,**
> **I hope to walk forward slowly, side by side with everyone.**

How can one not like such a singer who is so close to us ordinary people and whose feelings are so relatable!

---

## To You Who Are Reading This

I hope that after reading my introduction, you will listen to more of Minami's songs.

Whether you are currently:

- Feeling lost
- At a crossroads in life
- Or moving towards your dreams

You can find your own feelings and interpretations in Minami's music.

Finally, attaching photos from the concerts I attended for two consecutive years.
---

![Minami Concert 2024](/images/2024minami.jpg)

![Minami Concert 2025 - EARTH-TICATION](/images/2025minami.jpg)
      `,
      jp: `
# 美波 ─ 叫びで迷いと執念を歌う歌手

「人生は短い、他人に合わせて生きる必要なんてない。」

これが美波の人生哲学です。彼女の音楽は常に自己不信、葛藤、苦痛に満ちていますが、決して諦めようとはしません。何事も全力で、声を枯らして行います。

---

## 出身と音楽の目覚め

**埼玉県**出身の美波は、幼少期に**尾崎豊**の衝撃を受け、作詞作曲を始めました。

高校で初めてのギターを買ってから、彼女の音楽の道が始まりました。

---

## 順風満帆ではなかったが執着した音楽の道

美波の創作活動は順風満帆ではありませんでした。

彼女はかつてライブで、音楽を始めた当初は非常に孤独だったと語っています：

- **観客のいないライブハウス**からスタート
- 絶えず自己不信に陥り、諦めようと思ったことも
- 何度も自分を否定した
- 歌っている時でさえ「自分は一人ぼっちで、かわいそう」という表情をしていた

それでも彼女は、**死に物狂いで音楽にしがみつきました**。

そのため、彼女の作品には、自分自身との対話や、自己葛藤への抵抗が多く見られます。

美波を聴いたことがある人なら誰でも、迷い、自己否定から努力して堅持するまでの感情を感じ取ることができます。彼女は人々深く共感させる歌手です。

---

## 世間に知られるきっかけ ──『カワキヲアメク』

彼女を真に大衆の視野に入れたのは、アニメ『ドメスティックな彼女』のオープニングテーマ**「カワキヲアメク」**でした。

この曲は彼女の代表的な印象を決定づけました：

- **心が痛むほどの叫び声**
- **感情の濃い歌詞**
- **疾走感のあるメロディ**
- **アニメの感情との完璧な呼応**

この曲のおかげで、誰もが初めてこの無数の人々に共感を与える歌手を知ることになりました。現在、再生回数は**2.4億回**を突破しています。

---

## 私と美波 ── 音楽に救われた瞬間

私も美波に救われた一人です。

迷いと低迷の時期に、私は**「ライラック」**を聴きました。

この曲は私に教えてくれました：

> 「他人に合わせて生きるな。
> 人生は自分のために全力を尽くすだけで、余分な力なんて残っていない。」

この言葉は、私の人生に対する態度を完全に変えました。

---

## 美波はかつてこう言いました

> **失敗、挫折、苦痛、これらは必ずあなたを強くします。**
> **もし失敗の後、数歩先に成功が待っているとしたら、**
> **今諦めるのはあまりにも惜しいです。**
> **もし誰かが自分の人生に悩んでいるなら、**
> **私は皆と肩を並べて、一緒にゆっくりと前に進んでいきたいです。**

私たち一般人とこれほど近く、感情がこれほど身近な歌手を、どうして好きにならずにいられるでしょうか！

---

## 読んでいるあなたへ

私の紹介を読んだ後、もっと美波の曲を聴いてみてほしいです。

あなたが今：

- 迷っている
- 人生の岐路に立っている
- あるいは夢に向かって進んでいる

どのような状態であっても、美波の音楽の中に、あなただけの感情と解釈を見つけることができるでしょう。

最後に、2年連続で参戦したライブの写真を添付します。
---

![美波ライブ 2024](/images/2024minami.jpg)

![美波ライブ 2025 - EARTH-TICATION](/images/2025minami.jpg)
      `,
    },
    date: '2025-12-01',
    readTime: 5,
    category: {
      zh: '歌手分享',
      en: 'Singer Sharing',
      jp: '歌手紹介',
    },
    tags: ['歌手', '音樂', '分享', '美波'],
    author: 'Kakeru',
  },
  {
    id: "git-problem",
    title: {
      zh: "沒踩過坑不敢說自己會Git",
      en: "You Can't Say You Know Git Until You've Stumbled",
      jp: "失敗を経験せずにGitを知っているとは言えない",
    },
    excerpt: {
      zh: "這邊記錄順便介紹自己在開發中遇到的一些git問題",
      en: "Recording and introducing some Git problems encountered during development.",
      jp: "開発中に遭遇したGitの問題を記録し、紹介します。",
    },
    content: {
      zh: `
# Git 筆記

這個筆記是根據本人在工作以及專案時踩過的坑，會陸續更新。

## 創建新分支

- \`git checkout -b name\` # 創建本地分支並且切換
- \`git push origin name\` # 將本地分支上傳至雲端(在雲端創建新分支)

## 移動分支

\`git checkout "target branch"\`

## 更新分支

**情境:**

dev branch 基於舊的 main，當 main 更新時 dev 也想要將 main 更新的 code 更新過來但不想要更動在 dev 改動的東西。

\`\`\`mermaid
gitGraph
  commit id: "first commit"
  branch dev
  commit id: "new branch first"
  commit id: "second commit"
  checkout main
  commit id: "second commit"
  commit id: "second update commit"
\`\`\`

1. \`git checkout main\` # 切換分支
2. \`git pull\`
3. \`git checkout dev\`
4. \`git merge main\`

## 刪除分支

\`git push origin --delete target branch\`

## 刪除指定 commit

1. \`git rebase -i HEAD~2\` # 顯示前兩筆，~ 後的數字可以自己改
2. 將 Pick 改成 drop
3. \`:wq\` 儲存
4. \`git push origin 分支名稱 --force\`

## 退回指定 commit

\`git reset <指定commit>\`

## 修改 Github repo 的資料夾名稱

**一般情況**

\`git mv <old name> <new name>\`

**如遇到僅需要修改大小寫的情況**

1. \`git mv <old name> <任意名稱>\`
2. \`git mv <任意名稱> <new name>\`

由於 Windows 環境對檔案系統不區分大小寫，但 Git 區分，因此無法直接做修改。
      `,
      en: `
# Git Notes

These notes are based on the pitfalls I've encountered during work and projects, and will be updated periodically.

## Create New Branch

- \`git checkout -b name\` # Create local branch and switch to it
- \`git push origin name\` # Upload local branch to cloud (create new branch in cloud)

## Move Branch

\`git checkout "target branch"\`

## Update Branch

**Scenario:**

dev branch is based on old main. When main updates, dev wants to update with main's code but doesn't want to change what's modified in dev.

\`\`\`mermaid
gitGraph
  commit id: "first commit"
  branch dev
  commit id: "new branch first"
  commit id: "second commit"
  checkout main
  commit id: "second commit"
  commit id: "second update commit"
\`\`\`

1. \`git checkout main\` # Switch branch
2. \`git pull\`
3. \`git checkout dev\`
4. \`git merge main\`

## Delete Branch

\`git push origin --delete target branch\`

## Delete Specific Commit

1. \`git rebase -i HEAD~2\` # Show last two commits, number after ~ can be changed
2. Change Pick to drop
3. \`:wq\` Save
4. \`git push origin branch_name --force\`

## Revert to Specific Commit

\`git reset <specific_commit>\`

## Modify Github Repo Folder Name

**General Case**

\`git mv <old name> <new name>\`

**Case where only case sensitivity needs modification**

1. \`git mv <old name> <temp_name>\`
2. \`git mv <temp_name> <new name>\`

Since Windows environment is case-insensitive for file systems, but Git is case-sensitive, direct modification is not possible.
      `,
      jp: `
# Git メモ

このメモは、私が仕事やプロジェクトで踏んだ地雷に基づいています。随時更新されます。

## 新しいブランチの作成

- \`git checkout -b name\` # ローカルブランチを作成して切り替える
- \`git push origin name\` # ローカルブランチをクラウドにアップロード（クラウドで新しいブランチを作成）

## ブランチの移動

\`git checkout "target branch"\`

## ブランチの更新

**シナリオ:**

devブランチは古いmainに基づいています。mainが更新されたとき、devもmainの更新されたコードを取り込みたいが、devでの変更は変更したくない場合。

\`\`\`mermaid
gitGraph
  commit id: "first commit"
  branch dev
  commit id: "new branch first"
  commit id: "second commit"
  checkout main
  commit id: "second commit"
  commit id: "second update commit"
\`\`\`

1. \`git checkout main\` # ブランチを切り替える
2. \`git pull\`
3. \`git checkout dev\`
4. \`git merge main\`

## ブランチの削除

\`git push origin --delete target branch\`

## 特定のコミットの削除

1. \`git rebase -i HEAD~2\` # 前の2つのコミットを表示、~の後の数字は変更可能
2. Pickをdropに変更
3. \`:wq\` 保存
4. \`git push origin branch_name --force\`

## 特定のコミットに戻す

\`git reset <specific_commit>\`

## Githubリポジトリのフォルダ名を変更する

**一般的な場合**

\`git mv <old name> <new name>\`

**大文字小文字のみを変更する必要がある場合**

1. \`git mv <old name> <temp_name>\`
2. \`git mv <temp_name> <new name>\`

Windows環境はファイルシステムの大文字小文字を区別しませんが、Gitは区別するため、直接変更することはできません。
      `,
    },
    date: '2025-12-02',
    readTime: 5,
    category: {
      zh: '開發',
      en: 'Development',
      jp: '開発',
    },
    tags: ['git', 'github', '分享', '開發'],
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

