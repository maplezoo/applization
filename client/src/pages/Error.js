import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';
const Error = () => {
    return (
        <Wrapper className='full-page'>
            <div>
                <img src={img} alt='not found' />
                <h3>Opps.</h3>
                <p>The page is not found</p>
                <Link to='/'>back home</Link>
            </div>
        </Wrapper>
    );
}
export default Error
