export interface Post {
  id: number
  date: string
  date_gmt: string
  guid: Guid
  modified: string
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
  title: Title
  content: Content
  excerpt: Excerpt
  author: number
  featured_media: number
  comment_status: string
  ping_status: string
  sticky: boolean
  template: string
  format: string
  meta: Meta
  categories: number[]
  tags: any[]
  "kategorier-nyheter": any[]
  "instagram-feeds": any[]
  acf: any[]
  _links: Links
}

export interface Guid {
  rendered: string
}

export interface Title {
  rendered: string
}

export interface Content {
  rendered: string
  protected: boolean
}

export interface Excerpt {
  rendered: string
  protected: boolean
}

export interface Meta {
  _relevanssi_hide_post: string
  _relevanssi_hide_content: string
  _relevanssi_pin_for_all: string
  _relevanssi_pin_keywords: string
  _relevanssi_unpin_keywords: string
  _relevanssi_related_keywords: string
  _relevanssi_related_include_ids: string
  _relevanssi_related_exclude_ids: string
  _relevanssi_related_no_append: string
  _relevanssi_related_not_related: string
  _relevanssi_related_posts: string
  _relevanssi_noindex_reason: string
  footnotes: string
}

export interface Links {
  self: Self[]
  collection: Collection[]
  about: About[]
  author: Author[]
  replies: Reply[]
  "version-history": VersionHistory[]
  "predecessor-version": PredecessorVersion[]
  "wp:featuredmedia": Featuredmedum[]
  "wp:attachment": WpAttachment[]
  "wp:term": WpTerm[]
  curies: Cury[]
}

export interface Self {
  href: string
}

export interface Collection {
  href: string
}

export interface About {
  href: string
}

export interface Author {
  embeddable: boolean
  href: string
}

export interface Reply {
  embeddable: boolean
  href: string
}

export interface VersionHistory {
  count: number
  href: string
}

export interface PredecessorVersion {
  id: number
  href: string
}

export interface Featuredmedum {
  embeddable: boolean
  href: string
}

export interface WpAttachment {
  href: string
}

export interface WpTerm {
  taxonomy: string
  embeddable: boolean
  href: string
}

export interface Cury {
  name: string
  href: string
  templated: boolean
}
