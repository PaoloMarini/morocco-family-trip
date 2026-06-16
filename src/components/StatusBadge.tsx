import type { ActivityStatus } from '../types/trip'

type StatusBadgeProps = {
  status: ActivityStatus
}

const statusLabels: Record<ActivityStatus, string> = {
  confirmed: 'Confirmed',
  suggested: 'Suggested',
  flexible: 'Flexible',
}

function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`status-badge status-badge--${status}`}>
      {statusLabels[status]}
    </span>
  )
}

export default StatusBadge
