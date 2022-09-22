export type Blog = {
    category: {
      createdAt: string
      id: string
      name: string
      publishedAt: string
      revisedAt: string
      updatedAt: string
    }
    content: string
    createdAt: string
    eyecatch: {
      url: string
      width: number
      height: number
    }
    id: string
    publishedAt: string
    revisedAt: string
    title: string
    updatedAt: string
}