interface IProps {
  children: number
  updatePricePlus: () => void
  updatePriceMinus: () => void
}

export const ModifyPriceView = ({
  children,
  updatePricePlus,
  updatePriceMinus
}: IProps) => {
  return (
    <>
      <button className={'focus:outline-none'} onClick={updatePricePlus}>
        +
      </button>
      {children}
      <button className={'focus:outline-none'} onClick={updatePriceMinus}>
        -
      </button>
    </>
  )
}
