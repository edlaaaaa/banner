import './index.css'

const BannerCardItem = props => {
  const {bannerCardsList} = props
  const {headerText, description, className} = bannerCardsList

  return (
    <li className={`${className}=banner-card-item`}>
      <h1 className="heading">{headerText}</h1>
      <p className="detail">{description}</p>

      <div className="btn-container">
        <button className="show-btn" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}
export default BannerCardItem
