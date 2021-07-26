import { useHistory } from "react-router"
import { goToFeedPage } from "../routes/coordinator"
import { useLayoutEffect } from "react"

const useUnprotectedpage = () => {
    const history = useHistory()
    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if (token){
            goToFeedPage(history)
        }
    }, [history])
}

export default useUnprotectedpage