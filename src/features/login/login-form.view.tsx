import 'tailwindcss/tailwind.css'
import {CgSpinner} from "react-icons/all";

interface IProps {
    pickEmail: (e: any) => void
    pickPassword: (e: any) => void
    _login: any
    isLoading: boolean
    wrongInformations: boolean
}

export const LoginFormView = ({ pickEmail, pickPassword, _login, isLoading, wrongInformations }: IProps) => {
    return (
      <div className={'flex items-center justify-center h-screen'}>
          <div className={'bg-gray-600 text-white font-bold rounded-lg border shadow-lg p-10 pt-4 w-400'}>
              <h2 className={'text-center mb-3'}>Se connecter</h2>
              {wrongInformations
                    ? <p className={'text-xs mb-2 text-red-500'}>Nom d'utilisateur ou mot de passe incorrect</p>
                    : ''}
              <div className={'mb-4 mx-10'}>
                  <input id={'username'} onChange={pickEmail} placeholder={"Nom d'utilisateur"} className={'px-2 rounded text-black'}/>
              </div>
              <div className={'mb-4 mx-10'}>
                  <input type={'password'} id={'password'} onChange={pickPassword} placeholder={'Mot de passe'} className={'px-2 rounded text-black'}/>
              </div>
              {
                  isLoading
                ? <button type="button" className={"flex bg-white text-black px-1 rounded ml-10 w-auto"} disabled>
                            <CgSpinner className={'animate-spin text-black h-5 w-5 mr-1'} />
                        Connexion...
                  </button>
                : <button onClick={_login} className={'bg-white text-black px-1 rounded ml-10'}>
                       Se connecter
                  </button>
              }

          </div>
      </div>
    )
}