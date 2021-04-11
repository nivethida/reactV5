import React from 'react'
import {Link} from '@reach/router'


class ErrorBoundary extends React.Component {
    state = {hasError: false, redirect: false}

    static getDerivedStateFromError() {
        return {hasError: true}
    }
    componentDidCatch(error, info){
        console.log("ErrorBoundary caught an error", error, info)
    }
    componentDidMount(){
        if(this.state.hasError){
            setTimeout(()=>{
                this.setState({redirect: true})
            }, 5000)
        }
    }
    render () {
        if(this.state.redirect){
            return <Redirect to="/"/>
        }
        if(this.state.hasError){
            <h1>
                There was an error with listing <Link to = "/"> Click here to go back to home page or wait f0r 30 seconds </Link>
            </h1>

        }
        return this.props.children
    }
}

export default ErrorBoundary;