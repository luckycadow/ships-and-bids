import { Starship } from '@/api/ships'
import { ShipStat } from './ShipStat'
import { formatNumber, isNumber } from '@/utils/numbers'

export type ShipCardProps = {
  ship: Starship
}

export const ShipCard = ({ ship }: ShipCardProps) => (
  <div key={ship.url} className="card shadow">
    <div className="card-body">
      <h2 className="card-title">
        {ship.name}
        {ship.pilots.length === 1 && (
          <span className="badge badge-warning">Single owner</span>
        )}
      </h2>
      <p>
        <span className="capitalize">{ship.starship_class}</span> class
        manufactured by {ship.manufacturer}
      </p>
      <ul className="grid">
        <ShipStat
          name="Cargo capacity"
          value={formatNumber(ship.cargo_capacity)}
        />
        <ShipStat
          name="Passenger capacity"
          value={formatNumber(ship.passengers)}
        />
        <ShipStat name="Crew size" value={formatNumber(ship.crew)} />
        <ShipStat name="Hyperdrive" value={ship.hyperdrive_rating} />
        <ShipStat
          name="Max atmosphere speed"
          value={formatNumber(ship.cargo_capacity)}
        />
      </ul>
      <div className="card-actions items-center justify-end gap-6">
        {isNumber(ship.cost_in_credits) && (
          <span>
            Current bid:{' '}
            <span className="text-primary font-bold">
              ${formatNumber(ship.cost_in_credits)}
            </span>
          </span>
        )}
        <button className="btn btn-secondary">Bid</button>
      </div>
    </div>
  </div>
)
