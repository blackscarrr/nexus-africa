// Each activity has a unique slug used for routing: /community/:slug
// hasRegistration: false for ongoing practices with no single bookable date (e.g. Lens Collective)
export const activities = [
  {
    slug: 'book-reading-hangs',
    title: 'Book Reading Hangs',
    tagline: 'Tea, sentences, no syllabus.',
    body: "Once a month, we close the studio doors, put on a pot of tea, and read together — sometimes Achebe, sometimes a zine someone made last week. No syllabus, just people who like sentences.",
    longBody: "It started with two people and a borrowed copy of Things Fall Apart, and it's stayed almost exactly that small in spirit even as the room has grown. There's no set curriculum and no one assigned to lead — whoever brought something interesting that month gets to talk about why. Some months it's a novel, some months it's a single long poem, some months it's just printouts of someone's unfinished short story they want torn apart kindly. The tea is non-negotiable.",
    heroImage: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1400&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?q=80&w=900&auto=format&fit=crop',
    ],
    hasRegistration: true,
    registerUrl: 'https://forms.google.com/REPLACE_WITH_BOOK_HANG_FORM',
    cadence: 'Monthly',
  },
  {
    slug: 'tree-planting-day',
    title: 'Tree Planting Day',
    tagline: 'Slow, dirty, unglamorous — and loved.',
    body: "Every long rains, the collective heads out past the city to plant. It's slow, dirty, unglamorous work — and it's become one of the things members look forward to most.",
    longBody: "We pick a site outside Nairobi, usually somewhere degraded enough that the difference is visible within a season or two. No one's an expert going in — most members learn how to plant properly for the first time standing in that field. It's become a quiet anchor point in the calendar: the one Nexus activity that has nothing to do with showing or selling anything, just putting something back.",
    heroImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1400&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1466692476655-ba23ab2dc46c?q=80&w=900&auto=format&fit=crop',
    ],
    hasRegistration: true,
    registerUrl: 'https://forms.google.com/REPLACE_WITH_TREE_PLANTING_FORM',
    cadence: 'Twice a year, long rains',
  },
  {
    slug: 'lens-collective',
    title: 'Lens Collective',
    tagline: 'Candid shots from inside the community.',
    body: "A loose group of photographers from within the community who carry a camera to almost everything — not a media team producing content, just members catching the real, unstaged moments as they happen.",
    longBody: "There's no call sheet and no shot list. Lens Collective is just the name for a handful of members who happen to always have a camera on them — at the reading hangs, the planting days, open studio nights, even ordinary afternoons at the space. The shots that come out of it are intentionally unpolished: nobody posed, nobody was told to look a certain way. It's the rawest record of what Nexus actually looks like day to day.",
    heroImage: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1400&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1493863641943-9b68992a8d11?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=900&auto=format&fit=crop',
    ],
    hasRegistration: false,
    cadence: 'Ongoing',
  },
  {
    slug: 'open-studio-nights',
    title: 'Open Studio Nights',
    tagline: 'Half studio visit, half house party.',
    body: 'Twice a quarter, working artists open their studios to anyone curious enough to show up. Half studio visit, half house party — always loud, always worth it.',
    longBody: "Open Studio Nights started because members kept asking to see where the work actually gets made. Now, a handful of times a year, a few studios open their doors at once — visitors wander between them, artists talk through whatever's on the easel or the floor, and the night usually ends with everyone in one studio anyway, music on, too late to leave.",
    heroImage: 'https://images.unsplash.com/photo-1531913764164-f85c52e6e654?q=80&w=1400&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1531913764164-f85c52e6e654?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=900&auto=format&fit=crop',
    ],
    hasRegistration: true,
    registerUrl: 'https://forms.google.com/REPLACE_WITH_OPEN_STUDIO_FORM',
    cadence: 'Quarterly',
  },
];

export function getActivityBySlug(slug) {
  return activities.find((a) => a.slug === slug);
}
