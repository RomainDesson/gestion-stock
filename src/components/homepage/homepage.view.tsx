import {ProductListContainer} from "../product-list/product-list.container";

interface IProps {
    _logout: () => void
}

export const HomepageView = ({ _logout }: IProps) => {
    return (
        <>
           <div className={'flex justify-between'}>
               <h1 className={'block m-2 text-2xl'}>GESTION-STOCK</h1>
               <button onClick={_logout} className={'border block px-4 py-1 m-2.5 rounded bg-red-600 text-white'}>
                   Déconnexion
               </button>
           </div>
           <ProductListContainer />
        </>
    )
}