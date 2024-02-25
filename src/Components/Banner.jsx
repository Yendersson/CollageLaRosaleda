import img from '../assets/banner.jpg';
const Banner = () => {
    return (
        <div className="banner">
            <div className="text">
                <h1>I.E.S. La Rosaleda. Excursiones 2023-2024</h1>
            </div>
            <div className="banner-img">
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default Banner;