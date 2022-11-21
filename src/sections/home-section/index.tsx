import Header from '../../components/header';

import './styles.scss'

function HomeSection () {
    return (
        <section className='home-section'>
            <Header/>
            
            <div className='home-section--content'>
                Content
            </div>
        </section>
    )
}

export default HomeSection;