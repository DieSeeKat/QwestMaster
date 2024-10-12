import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Loading() {
    return (
        <SkeletonTheme baseColor="#ffffff30" highlightColor="#ffffff50">
            <div className="w-full">
                <Skeleton height={200}/>
                <Skeleton height={30} style={{marginBottom: 10}}/>
            </div>
        </SkeletonTheme>

    );
}