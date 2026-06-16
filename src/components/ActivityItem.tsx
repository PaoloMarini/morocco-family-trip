import type { Activity } from '../types/trip'
import StatusBadge from './StatusBadge'

type ActivityItemProps = {
  activity: Activity
}

function ActivityItem({ activity }: ActivityItemProps) {
  return (
    <li className="activity-item">
      <div>
        <p>{activity.title}</p>
        {activity.note && <span>{activity.note}</span>}
      </div>
      <StatusBadge status={activity.status} />
    </li>
  )
}

export default ActivityItem
