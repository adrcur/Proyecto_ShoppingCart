import { ring } from 'ldrs'


export const Loader = () => {
	return (
        <div className="container-loader">
            <ring size={40} speed={0.9} color='black' />
        </div>
    )
}
