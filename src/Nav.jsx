import img from './assets/worldIcon.png'

export default function Nav() {
    return (
        <div className='nav'>
            <img src={img} className="nav--logo" />
            <p className="nav--header">my travel journal</p>
        </div>
    )
}