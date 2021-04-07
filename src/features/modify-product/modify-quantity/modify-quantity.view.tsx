interface IProps {
  children: number
  updateQuantityPlus: () => void
  updateQuantityMinus: () => void
}

export const ModifyQuantityView = ({
  children,
  updateQuantityMinus,
  updateQuantityPlus
}: IProps) => {
  return (
    <>
      <button className={'focus:outline-none'} onClick={updateQuantityPlus}>
        +
      </button>
      {children}
      <button className={'focus:outline-none'} onClick={updateQuantityMinus}>
        -
      </button>
    </>
  )
}
