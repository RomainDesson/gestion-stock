interface IProps {
  showProductForm: () => void
  productFormDisplay: boolean
  _addProduct: (data: any) => void
  handleFieldChange: (e: any) => void
  formData: any
}

export const AddProductView = ({
  showProductForm,
  productFormDisplay,
  _addProduct,
  handleFieldChange,
  formData
}: IProps) => {
  return (
    <>
      <button
        onClick={showProductForm}
        className={'px-3 py-1 border rounded bg-green-600 text-white'}
      >
        + Nouveau produit
      </button>
      {productFormDisplay ? (
        <>
          <form
            className={'flex-col mt-4'}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                _addProduct(formData)
              }
            }}
          >
            <div>
              <input
                className={'border'}
                onChange={handleFieldChange}
                name={'productName'}
                placeholder={'Nom'}
                value={formData.productName}
              />
            </div>
            <div>
              <input
                className={'border'}
                type={'number'}
                onChange={handleFieldChange}
                name={'price'}
                placeholder={'Prix'}
                value={formData.price}
              />
            </div>
            <div>
              <input
                className={'border'}
                type={'number'}
                onChange={handleFieldChange}
                name={'quantity'}
                placeholder={'Quantité'}
                value={formData.quantity}
              />
            </div>
          </form>
          <button
            onClick={() => _addProduct(formData)}
            className={'px-3 py-1 border rounded bg-green-600 text-white mt-2'}
          >
            Confirmer
          </button>
        </>
      ) : (
        ''
      )}
    </>
  )
}
