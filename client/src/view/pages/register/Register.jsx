import { Link } from 'react-router-dom'
import classes from './styles.module.scss'

function Register() {

  return (
    <div className={classes.register}>
      <div className={classes.card}>
        <div className={classes.left}>
          <h1>My social</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae impedit rem repellat ea modi dolorum sequi deserunt nisi minus ipsa distinctio consequuntur, odio ullam eaque iusto dolores veritatis numquam. Reprehenderit!
          </p>
          <span>Do you have an account?</span>          
          <Link to='/login'>
            <button>Login</button>
          </Link>
        </div>
        <div className={classes.right}>
          <h1>Register</h1>
          <div>
            <form>
              <input type="text" placeholder='Username' />
              <input type="email" placeholder='Email' />
              <input type="password" placeholder='Username' />
              <input type="text" placeholder='Name' />
              <button>Register</button>
            </form>
            <div className={classes.login_link_mobile}>
                Already have an account? 
                <Link  to='/login'>
                  Login
                </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )

}
  
  export default Register
  