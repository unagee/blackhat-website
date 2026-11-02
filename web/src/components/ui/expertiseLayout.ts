// The uneven three-column layout shared by the homepage "Our Expertise" and each service page's
// offerings: columns of different widths that start at different heights, each image with its
// own shape, so the row reads as a composition rather than a grid.
export const expertiseGrid =
  'grid items-start gap-12 md:grid-cols-[1.45fr_1.25fr_1fr] md:gap-8 lg:gap-12'
export const expertiseOffsets = ['', 'md:mt-28', 'md:mt-12']
export const expertiseShapes = ['aspect-[16/10]', 'aspect-square', 'aspect-4/3']
export const expertiseSizes = [
  '(min-width: 768px) 40vw, 100vw',
  '(min-width: 768px) 34vw, 100vw',
  '(min-width: 768px) 27vw, 100vw',
]
