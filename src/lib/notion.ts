import { Client } from '@notionhq/client';

// 初始化 Notion 客户端 - 修复版
let notion: Client;

const token = process.env.NOTION_TOKEN;
if (!token) {
  console.error('ERROR: NOTION_TOKEN is not set!');
}

notion = new Client({
  auth: token || 'dummy-token',
});

// 辅助函数：安全获取属性值
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getPropertyValue(page: any, propertyName: string, type: string): string {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const prop = (page.properties as any)[propertyName];
  if (!prop) return '';
  
  switch (type) {
    case 'title':
      return prop.title?.[0]?.plain_text || '';
    case 'rich_text':
      return prop.rich_text?.[0]?.plain_text || '';
    case 'url':
      return prop.url || '';
    case 'number':
      return prop.number || 0;
    default:
      return '';
  }
}

// 数据库 ID
const DB_IDS = {
  workExperience: process.env.NOTION_WORK_DB_ID || '',
  projectExperience: process.env.NOTION_PROJECT_DB_ID || '',
  aiLab: process.env.NOTION_AI_LAB_DB_ID || '',
  coreSkills: process.env.NOTION_SKILLS_DB_ID || '',
};

// 类型定义
export interface WorkExperience {
  id: string;
  period: string;
  title: string;
  company: string;
  description: string;
  link?: string;
  order: number;
}

export interface ProjectExperience {
  id: string;
  tag: string;
  name: string;
  description: string;
  link?: string;
  order: number;
}

export interface AILab {
  id: string;
  category: string;
  name: string;
  description: string;
  link?: string;
  mediaUrl?: string;
  mediaType?: 'image' | 'video';
  order: number;
}

export interface CoreSkill {
  id: string;
  name: string;
  order: number;
}

// 获取工作经历
export async function getWorkExperiences(): Promise<WorkExperience[]> {
  if (!DB_IDS.workExperience) {
    console.warn('NOTION_WORK_DB_ID not set');
    return [];
  }
  
  try {
    const response = await notion.databases.query({
      database_id: DB_IDS.workExperience,
      sorts: [{ property: '排序', direction: 'ascending' }],
    });
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return response.results.map((page: any) => ({
      id: page.id,
      period: getPropertyValue(page, '时间段', 'title'),
      title: getPropertyValue(page, '职位', 'rich_text'),
      company: getPropertyValue(page, '公司', 'rich_text'),
      description: getPropertyValue(page, '工作内容描述', 'rich_text'),
      link: getPropertyValue(page, '公司/项目链接', 'url'),
      order: Number(getPropertyValue(page, '排序', 'number')) || 0,
    }));
  } catch (error) {
    console.error('Error fetching work experiences:', error);
    return [];
  }
}

// 获取项目经历
export async function getProjectExperiences(): Promise<ProjectExperience[]> {
  if (!DB_IDS.projectExperience) {
    console.warn('NOTION_PROJECT_DB_ID not set');
    return [];
  }
  
  try {
    const response = await notion.databases.query({
      database_id: DB_IDS.projectExperience,
      sorts: [{ property: '排序', direction: 'ascending' }],
    });
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return response.results.map((page: any) => ({
      id: page.id,
      tag: getPropertyValue(page, '标签', 'title'),
      name: getPropertyValue(page, '项目名称', 'rich_text'),
      description: getPropertyValue(page, '项目描述', 'rich_text'),
      link: getPropertyValue(page, '项目链接', 'url'),
      order: Number(getPropertyValue(page, '排序', 'number')) || 0,
    }));
  } catch (error) {
    console.error('Error fetching project experiences:', error);
    return [];
  }
}

// 获取 AI Lab
export async function getAILab(): Promise<AILab[]> {
  if (!DB_IDS.aiLab) {
    console.warn('NOTION_AI_LAB_DB_ID not set');
    return [];
  }
  
  try {
    const response = await notion.databases.query({
      database_id: DB_IDS.aiLab,
      sorts: [{ property: '排序', direction: 'ascending' }],
    });
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return response.results.map((page: any) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const mediaFiles = (page.properties['媒体 github URL'] as any)?.files || [];
      const mediaFile = mediaFiles[0];
      let mediaUrl = mediaFile?.file?.url || mediaFile?.external?.url || '';
      
      // 如果没有文件，尝试从 URL 类型属性获取
      if (!mediaUrl) {
        mediaUrl = getPropertyValue(page, '媒体 github URL', 'url');
      }
      
      const mediaType = mediaUrl ? (mediaUrl.match(/\.(mp4|webm|mov)$/i) ? 'video' : 'image') : undefined;
      
      return {
        id: page.id,
        category: getPropertyValue(page, '标题', 'title'),
        name: getPropertyValue(page, '项目名称', 'rich_text'),
        description: getPropertyValue(page, '项目描述', 'rich_text'),
        link: getPropertyValue(page, 'url', 'url'),
        mediaUrl,
        mediaType,
        order: Number(getPropertyValue(page, '排序', 'number')) || 0,
      };
    });
  } catch (error) {
    console.error('Error fetching AI Lab:', error);
    return [];
  }
}

// 获取核心技能
export async function getCoreSkills(): Promise<CoreSkill[]> {
  if (!DB_IDS.coreSkills) {
    console.warn('NOTION_SKILLS_DB_ID not set');
    return [];
  }
  
  try {
    const response = await notion.databases.query({
      database_id: DB_IDS.coreSkills,
      sorts: [{ property: '显示顺序', direction: 'ascending' }],
    });
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return response.results.map((page: any) => ({
      id: page.id,
      name: getPropertyValue(page, '技能名称', 'title'),
      order: Number(getPropertyValue(page, '显示顺序', 'number')) || 0,
    }));
  } catch (error) {
    console.error('Error fetching core skills:', error);
    return [];
  }
}

export { notion, DB_IDS };
