import {BrowserRouter,Link,Routes,Route} from 'react-router-dom';
import SignIn from './login';
import Register from './register';
export default function Navbar()
{
    return(
        <BrowserRouter>
            <div>
                <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                    <ul className='navbar nav'>
                        <li className='nav-item'>
                            <Link to='/SignIn' className='nav-link'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/SignIn' className='nav-link'>login</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/register' className='nav-link'>Register</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route exact path='/' ></Route>
                    <Route exact path='/SignIn' element={<Login />}></Route>
                    <Route exact path='/register' element={<Register />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
    }