import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from 'react-router-dom'

function Login() {
    const history = useHistory()
    const login = () => history.push('/')

    return (
        <div className="flex w-screen min-h-screen">
            <div className="bg-gray-200 hidden md:block md:w-1/3"></div>
            <div className="flex flex-col justify-center items-center bg-gray-100 w-full md:w-2/3 ">
                <div className="w-80 flex flex-col gap-7 justify-center items-center">
                    <h2 className="text-gray-800 text-3xl font-NovaFlat">Login</h2>
                    <p className="mb-10 text-gray-500">Log in to do whatever it is you do here</p>

                    <input className="bg-opacity-0 w-full p-2 bg-transparent border-b-2" type="email" placeholder="Email"/>
                    <input className="bg-opacity-0 w-full p-2 bg-transparent border-b-2" type="password" placeholder="Password"/>

                    <button className="bg-gray-500 text-gray-200 w-full rounded py-3" onClick={login}>Login</button>

                    <hr className="w-full border-t-2"/>

                    <div className="w-full flex flex-row gap-2">
                        <button className="bg-gray-500 text-gray-200 w-full rounded py-3">
                            <FontAwesomeIcon icon={["fab", "google"]} />
                        </button>
                        <button className="bg-gray-500 text-gray-200 w-full rounded py-3">
                            <FontAwesomeIcon icon={["fab", "twitter"]} />
                        </button>
                        <button className="bg-gray-500 text-gray-200 w-full rounded py-3">
                            <FontAwesomeIcon icon={["fab", "twitch"]} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login