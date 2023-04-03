import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>Application <span> collation</span> Helper</h1>

          <p>Welcome to Offere, the ultimate job application collation that get your offer coming here.</p>
          <p>Tired of applying to jobs and never hearing back? With Offere, you can easily keep track of every job you've applied for, get online assesment and interview.
            Our user-friendly platform streamlines your job search process, making it more efficient and effective.
            Sign up today and take control of your job search with Applization!</p>

          <Link to={"/register"} className='btn btn-hero'>Login/Register</Link>
        </div>
        <img src={main} alt='main' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing