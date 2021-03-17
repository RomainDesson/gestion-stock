interface IProps {
    pickEmail: (e: any) => void
    pickPassword: (e: any) => void
    _login: (data: object) => Promise<void>
}

export const LoginFormView = ({ pickEmail, pickPassword, _login }: IProps) => {
    return (
      <>
          <p>Email</p>
          <input onChange={pickEmail}/>
          <p>Password</p>
          <input onChange={pickPassword}/><br/>
          <button onClick={_login}>
              Se connecter
          </button>
      </>
    )
}