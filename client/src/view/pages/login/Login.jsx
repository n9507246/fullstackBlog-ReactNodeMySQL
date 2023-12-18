import { Link } from 'react-router-dom'
import classes from './styles.module.scss'
import LoginBtn from '@components/loginBtn/loginBtn'

function Login() {

    return (
      <div className={classes.login}>
        <div className={classes.card}>
          <div className={classes.left}>
            <h1>Hello word</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae impedit rem repellat ea modi dolorum sequi deserunt nisi minus ipsa distinctio consequuntur, odio ullam eaque iusto dolores veritatis numquam. Reprehenderit!
            </p>
            <span>Don't you have an account?</span>
            <Link to='/register'>
              <button>Register</button>
            </Link>
          </div>
          <div className={classes.right}>
            <h1>Login</h1>
            <form>
              <input type="text" placeholder='Username' />
              <input type="password" placeholder='Password' />
              <LoginBtn/>
              <div className={classes.register_link_mobile}>
                Not registered yet? 
                <Link  to='/register'>
                  Registration
                </Link>
              </div>

            </form>
          </div>
        </div>
      </div>
    )
  }
  
  export default Login
  