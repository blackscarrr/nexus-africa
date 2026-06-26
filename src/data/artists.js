// Each artist has a unique slug used for routing: /artists/:slug
export const artists = [
  {
    slug: 'rose-mwangi',
    name: 'Rose Mwangi',
    medium: 'Mixed media & textile',
    location: 'Nairobi, Kenya',
    bio: "Rose works at the intersection of traditional Kenyan textile patterning and contemporary collage. Her practice draws on her grandmother's kitenge archive, reconstructing it into large-format wall pieces that read as both memory and map.",
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop',
    social: { website: '#', instagram: '#', facebook: '#' },
  },
  {
    slug: 'kevo-otieno',
    name: 'Kevo Otieno',
    medium: 'Oil on canvas',
    location: 'Kisumu, Kenya',
    bio: "Kevo's paintings center the everyday: matatu stages, lakeside markets, the particular light of Kisumu at 6pm. He trained informally under sign-painters before moving into gallery work, and the bold lettering instinct still shows in his brushwork.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    social: { website: '#', instagram: '#', facebook: '#' },
  },
  {
    slug: 'amani-wekesa',
    name: 'Amani Wekesa',
    medium: 'Photography',
    location: 'Eldoret, Kenya',
    bio: 'Amani documents the Rift Valley highlands in long-form photo essays, often returning to the same communities over years. Her work has been described as patient — more interested in duration than the single decisive moment.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop',
    social: { website: '#', instagram: '#', facebook: '#' },
  },
  {
    slug: 'juma-bakari',
    name: 'Juma Bakari',
    medium: 'Sculpture & found objects',
    location: 'Mombasa, Kenya',
    bio: 'Juma builds figures from reclaimed dhow timber and coastal scrap metal, treating material history as part of the artwork itself. Each piece carries a handwritten note on what the wood was, before.',
    image: 'https://images.unsplash.com/photo-1542206395-9feb3edaa68d?q=80&w=800&auto=format&fit=crop',
    social: { website: '#', instagram: '#', facebook: '#' },
  },
];

export function getArtistBySlug(slug) {
  return artists.find((a) => a.slug === slug);
}
