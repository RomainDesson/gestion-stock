interface IProps {
    deleteFromApi: () => void
}

export const DeleteProductView = ({deleteFromApi}: IProps) => {
    return (
        <button onClick={deleteFromApi}>Supprimer</button>
    )
}