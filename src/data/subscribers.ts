// 電子報訂閱者管理
// 注意：這是前端示範用的本地儲存方案
// 正式環境建議使用後端 API 或第三方服務（如 Mailchimp, ConvertKit, Buttondown 等）

export interface Subscriber {
  email: string;
  subscribedAt: string;
  confirmed: boolean;
}

const STORAGE_KEY = 'blog_subscribers';

// 取得所有訂閱者
export function getSubscribers(): Subscriber[] {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

// 新增訂閱者
export function addSubscriber(email: string): { success: boolean; message: string } {
  const subscribers = getSubscribers();
  
  // 檢查是否已訂閱
  if (subscribers.some(sub => sub.email.toLowerCase() === email.toLowerCase())) {
    return { success: false, message: 'already_subscribed' };
  }
  
  // 驗證 email 格式
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: 'invalid_email' };
  }
  
  const newSubscriber: Subscriber = {
    email,
    subscribedAt: new Date().toISOString(),
    confirmed: true, // 在實際應用中，這應該在 email 確認後才設為 true
  };
  
  subscribers.push(newSubscriber);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(subscribers));
  
  return { success: true, message: 'subscribed' };
}

// 移除訂閱者
export function removeSubscriber(email: string): boolean {
  const subscribers = getSubscribers();
  const filtered = subscribers.filter(sub => sub.email.toLowerCase() !== email.toLowerCase());
  
  if (filtered.length === subscribers.length) {
    return false; // 沒有找到該訂閱者
  }
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  return true;
}

// 匯出訂閱者列表（用於發送電子報）
export function exportSubscribers(): string {
  const subscribers = getSubscribers();
  return subscribers.map(sub => sub.email).join('\n');
}

// 取得訂閱者數量
export function getSubscriberCount(): number {
  return getSubscribers().length;
}

/*
 * ==========================================
 * 電子報發送建議
 * ==========================================
 * 
 * 由於這是純前端應用，發送電子報需要使用第三方服務：
 * 
 * 1. **Buttondown** (推薦給個人部落格)
 *    - 免費方案支援 100 訂閱者
 *    - 簡單的 API 整合
 *    - https://buttondown.email/
 * 
 * 2. **ConvertKit**
 *    - 免費方案支援 1000 訂閱者
 *    - 強大的自動化功能
 *    - https://convertkit.com/
 * 
 * 3. **Mailchimp**
 *    - 免費方案支援 500 訂閱者
 *    - 完整的行銷功能
 *    - https://mailchimp.com/
 * 
 * 4. **Resend** (開發者友好)
 *    - 免費方案每月 3000 封
 *    - 現代化的 API
 *    - https://resend.com/
 * 
 * 整合步驟：
 * 1. 註冊選擇的服務
 * 2. 取得 API Key
 * 3. 建立後端 API 端點或使用 serverless function
 * 4. 將 addSubscriber 改為呼叫 API
 * 
 * 範例（使用 Buttondown）：
 * 
 * async function subscribeToNewsletter(email: string) {
 *   const response = await fetch('https://api.buttondown.email/v1/subscribers', {
 *     method: 'POST',
 *     headers: {
 *       'Authorization': `Token ${BUTTONDOWN_API_KEY}`,
 *       'Content-Type': 'application/json',
 *     },
 *     body: JSON.stringify({ email }),
 *   });
 *   return response.json();
 * }
 */

