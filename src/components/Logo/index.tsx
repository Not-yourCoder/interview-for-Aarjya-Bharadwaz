
type Props = {
    imageUrl: string
    className?: string
}

const SpaceXLogo = ({ imageUrl, className }: Props) => {
    return (
        <div className={className}>
            <img src={imageUrl} alt="logo" className='' />
        </div>
    )
}

export default SpaceXLogo