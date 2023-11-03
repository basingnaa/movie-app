import Skeleton from "./Skeleton";


const SkeletonMovieCard = () => {
  return (
    <div className="movieCardSkeleton">
        <Skeleton classes="movieCardImage" />
        <Skeleton classes="movieCardTitle" />
    </div>
  )
}

export default SkeletonMovieCard