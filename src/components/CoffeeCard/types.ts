export interface CoffeeProps {
  id: number
  imageSrc: string
  tags: string[]
  title: string
  description: string
  price: number
}

export interface CoffeeCardProps {
  coffee: CoffeeProps
}
