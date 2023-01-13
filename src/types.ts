export interface Frontmatter {
	title: string
	ogImage?: string
	description: string
	author: string
	datetime: string
	slug: string
	featured: boolean
	draft: boolean
	tags: string[]
}

export type SocialObjects = {
	name: SocialMedia
	href: string
	active: boolean
	linkTitle: string
}[]

export type SocialIcons = {
	[social in SocialMedia]: string
}

export type SocialMedia = 'Github' | 'Twitter' | 'Twitch' | 'YouTube'
