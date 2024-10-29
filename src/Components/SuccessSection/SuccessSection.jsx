import './successSection.css'
// components
import SuccessCard from './SuccessCard/SuccessCard'
import { useState } from 'react'
//Images
import BlueLabelLogo from '../../assets/blueLabel-logo.png'
import TaosLogo from '../../assets/taos-logo.png'
import MomsLogo from '../../assets/4moms-logo.png'
import FireEmoji from '../../assets/Fire-Emoji.png'
import Arrow from '../../assets/services-arrow.svg'
import { useEffect } from 'react'



const carouselData = [
    {
        id: 1,
        image: BlueLabelLogo,
        text: '1 They’re keen on ensuring the best practices they implement specifically align with our brand.',
        alt: 'BlueLabel Logo'
    },
    {
        id: 2,
        image: MomsLogo,
        text: '2 They’re keen on ensuring the best practices they implement specifically align with our brand.',
        alt: '4 Moms Logo'
    },
    {
        id: 3,
        image: TaosLogo,
        text: '3 They provide a range of great services. Everything they do is consistent and meets the same high standard.',
        alt: 'Taos Logo'
    },
    {
        id: 4,
        image: BlueLabelLogo,
        text: '4 They’re keen on ensuring the best practices they implement specifically align with our brand.',
        alt: 'BlueLabel Logo'
    },
    {
        id: 5,
        image: MomsLogo,
        text: '5 They’re keen on ensuring the best practices they implement specifically align with our brand.',
        alt: '4 Moms Logo'
    },
    {
        id: 6,
        image: TaosLogo,
        text: '6 They provide a range of great services. Everything they do is consistent and meets the same high standard.',
        alt: 'Taos Logo'
    }
];

const SuccessSection = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);

    useEffect(() => {
        // Adjust the number of cards based on screen size
        const updateCardsToShow = () => {
            if (window.innerWidth <= 600) {
                setCardsToShow(1);
            } else {
                setCardsToShow(3);
            }
        };

        updateCardsToShow(); // Set initial state
        window.addEventListener('resize', updateCardsToShow); // Listen for window resize

        return () => {
            window.removeEventListener('resize', updateCardsToShow); // Cleanup listener
        };
    }, []);

    const goLeft = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex - 1 + carouselData.length) % carouselData.length;
            return newIndex <= carouselData.length - cardsToShow ? newIndex : carouselData.length - cardsToShow;
        });
    };

    const goRight = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % carouselData.length;
            return newIndex <= carouselData.length - cardsToShow ? newIndex : 0;
        });
    };

    return (
        <section className='successSection__MainContainer' id='successSection'>
            <div className='successSection__Content-Container'>
                <div className='successSection__Content-TitleContainer'>
                    <h2 className='successSection__Content-Title'>
                        Success Speaks for Itself
                    </h2>
                </div>
                <div className='successSection__Content-CardsContainer'>
                    
                    
                    <div className='successSection__Carousel-Container'>
                        <div className='successSection__Carousel-Track'>
                            {carouselData.slice(currentIndex, currentIndex + cardsToShow).map((item) => (
                                <SuccessCard key={item.id} image={item.image} text={item.text} alt={item.alt} />
                            ))}
                        </div>
                    </div>   

                    <div className='carousel__BtnContainer'>
                        <button className='carousel__Btn carousel__Btn--Left' onClick={goLeft}><img src={Arrow}/></button>
                        <button className='carousel__Btn carousel__Btn--Right' onClick={goRight}><img src={Arrow}/></button>
                    </div>
                    
                    <div className='successSection__FireEmoji-Container successSection__FireEmoji-1'>
                        <img className='successSection__FireEmoji' src={FireEmoji} alt='Fire Emoji'/>
                    </div>
                </div>

                
            </div>

        </section>
    )
}

export default SuccessSection