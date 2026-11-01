// The uneven three-column layout shared by the homepage "Our Expertise" and each service page's
// offerings: widest first, narrowest last, each image with its own shape.
export const expertiseGrid =
  'grid items-start gap-12 md:grid-cols-[1.7fr_1.15fr_0.8fr] md:gap-8 lg:gap-12'
export const expertiseShapes = ['aspect-[16/10]', 'aspect-square', 'aspect-4/3']
export const expertiseSizes = [
  '(min-width: 768px) 46vw, 100vw',
  '(min-width: 768px) 31vw, 100vw',
  '(min-width: 768px) 22vw, 100vw',
]
