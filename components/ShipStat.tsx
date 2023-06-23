export type ShipStatProps = {
  name: string
  value: string
}

export const ShipStat = ({ name, value }: ShipStatProps) => {
  return (
    <li className="flex justify-between">
      <span className="font-bold">{name}:</span>
      <span>{value}</span>
    </li>
  )
}
