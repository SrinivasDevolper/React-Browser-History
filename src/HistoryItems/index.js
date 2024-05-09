import {Component} from 'react'

import Userhistoryapp from '../UserHistoryItem/index'

import './index.css'

const deleteHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class HistoryItems extends Component {
  state = {value: '', userHistoryItem: deleteHistoryList}

  userInputValue = event => {
    this.setState({value: event.target.value})
  }

  userDeleteItem = id => {
    const {userHistoryItem} = this.state
    const filterDeleteItem = userHistoryItem.filter(
      eachDeleteItem => eachDeleteItem.id !== id,
    )
    this.setState({userHistoryItem: filterDeleteItem})
  }

  render() {
    const {value, userHistoryItem} = this.state
    const resultUserHistory = userHistoryItem.filter(eachList => {
      const {title} = eachList
      return title.toLowerCase().includes(value.toLowerCase())
    })
    return (
      <div className="bg-container">
        <div className="search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="logo"
          />
          <div className="button-container">
            <button className="search-btn" type="button">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-img"
              />
            </button>
            <input
              type="text"
              placeholder="search input element"
              className="input-text"
              onChange={this.userInputValue}
              value={value}
            />
          </div>
        </div>
        <ul className="items-container">
          {resultUserHistory.length !== 0 ? (
            resultUserHistory.map(eachList => (
              <Userhistoryapp
                eachList={eachList}
                key={eachList.id}
                userDeleteItem={this.userDeleteItem}
              />
            ))
          ) : (
            <div className="items-container-noSHow">
              <p className="no-show">There is no history to show</p>
            </div>
          )}
        </ul>
      </div>
    )
  }
}
export default HistoryItems
