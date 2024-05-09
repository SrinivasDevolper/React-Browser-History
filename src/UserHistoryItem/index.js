import './index.css'

const Userhistoryapp = props => {
  const {eachList, userDeleteItem} = props
  const {id, title, timeAccessed, domainUrl, logoUrl} = eachList
  const deleteItem = () => {
    userDeleteItem(id)
  }
  return (
    <li>
      <div className="list-items">
        <div>
          <p className="time">{timeAccessed}</p>
          <img className="app-logo" src={logoUrl} alt="domain logo" />
          <p className="title">{title}</p>
          <p className="url">{domainUrl}</p>
        </div>
        <button className="delete" type="button" onClick={deleteItem}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default Userhistoryapp
