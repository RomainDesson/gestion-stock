import 'tailwindcss/tailwind.css'

interface IProps {
    pickEmail: (e: any) => void
    pickPassword: (e: any) => void
    _login: (data: object) => Promise<void>
}

export const LoginFormView = ({ pickEmail, pickPassword, _login }: IProps) => {
    return (
      <div className={'flex items-center justify-center h-screen'}>
          <div className={'bg-gray-600 text-white font-bold rounded-lg border shadow-lg p-10 w-400'}>
              <div className={'mb-4'}>
                  <input id={'email'}onChange={pickEmail} placeholder={'Email'} className={'px-2 rounded text-black'}/>
              </div>
              <div className={'mb-4'}>
                  <input id={'password'}onChange={pickPassword} placeholder={'Mot de passe'} className={'px-2 rounded text-black'}/>
              </div>
              <button onClick={_login} className={'bg-white text-black px-1 rounded self-center'}>
                  Se connecter
              </button>
          </div>
      </div>
    )
}