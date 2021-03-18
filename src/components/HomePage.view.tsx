interface IProps {
    handleLogout: () => void
}

export const HomePageView = ({ handleLogout }: IProps) => {
    return (
      <>
        <p>home</p>
          <button onClick={handleLogout}>
              Logout
          </button>
      </>
    )
}