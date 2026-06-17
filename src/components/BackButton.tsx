type BackButtonProps = {
  onClick: () => void
  label?: string
}

function BackButton({ onClick, label = 'Back' }: BackButtonProps) {
  return (
    <button className="back-button" type="button" onClick={onClick}>
      <span aria-hidden="true">←</span>
      {label}
    </button>
  )
}

export default BackButton
