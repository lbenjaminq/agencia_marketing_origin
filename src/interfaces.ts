export interface Post {
  id: string
  title: string
  href: string
  category: Category
  description: string
  imageUrl: string
}

export interface Category {
  name: string
  href: string
}