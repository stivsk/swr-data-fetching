import ContentLoader from 'react-content-loader'

const BulletListLoader = () => (
  <div>
    <ContentLoader height="450">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(bar => (
        <>
          <circle cx="20" cy={20 + 30 * bar} r="8" />
          <rect
            x="35"
            y={20 + (30 * bar - 5)}
            rx="5"
            ry="5"
            width="210"
            height="10"
          />
        </>
      ))}
    </ContentLoader>
  </div>
)

export default BulletListLoader
