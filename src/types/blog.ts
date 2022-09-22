export type Blog = {
  id: string
  title: string
  excerpt: string
  category: {
    createdAt: string
    id: string
    name: string
    publishedAt: string
    revisedAt: string
    updatedAt: string
  }
  eyecatch?: {
    url: string
    width: number
    height: number
  }
  content: string
  createdAt: string
  publishedAt: string
  revisedAt: string
  updatedAt: string
}