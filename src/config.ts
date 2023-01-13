import type { SocialObjects } from './types'

export const SITE = {
	website: 'https://i4o.dev/',
	author: 'i4o',
	desc: 'Thoughts, stories and ideas about web development, indiehacking, learning and personal growth.',
	title: 'i4o',
	ogImage: 'astropaper-og.jpg',
	lightAndDarkMode: true,
	postPerPage: 3,
}

export const LOGO_IMAGE = {
	enable: false,
	svg: true,
	width: 216,
	height: 46,
}

export const SOCIALS: SocialObjects = [
	{
		name: 'Github',
		href: 'https://github.com/i4o-dev',
		linkTitle: ` ${SITE.title} on Github`,
		active: true,
	},
	{
		name: 'Twitter',
		href: 'https://twitter.com/i4o_dev',
		linkTitle: `${SITE.title} on Twitter`,
		active: true,
	},
	{
		name: 'Twitch',
		href: 'https://twitch.tv/i4o_dev',
		linkTitle: `${SITE.title} on Twitch`,
		active: true,
	},
	{
		name: 'YouTube',
		href: 'https://youtube.com/@i4o',
		linkTitle: `${SITE.title} on YouTube`,
		active: true,
	},
]
