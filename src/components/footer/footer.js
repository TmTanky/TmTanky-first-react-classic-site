import React from 'react'

const Footer = () => {

    const date = new Date().getFullYear()

    return <footer>
        
        <div className="footerbox">
            <div className="footerlogo">
                <h1> ReactSite </h1>
            </div>

            <div className="footerlinks">
                <div className="links1">
                    <li> <a href="https://www.google.com/"> Lorem Ipsum </a></li>
                    <li> <a href="https://www.google.com/"> Lorem Ipsum </a></li>
                    <li> <a href="https://www.google.com/"> Lorem Ipsum </a></li>
                </div>

                <div className="links1">
                    <li> <a href="https://www.google.com/"> Lorem Ipsum </a></li>
                    <li> <a href="https://www.google.com/"> Lorem Ipsum </a></li>
                    <li> <a href="https://www.google.com/"> Lorem Ipsum </a></li>
                    <li> <a href="https://www.google.com/"> Lorem Ipsum </a></li>
                </div>
            </div>
        </div>

        <div className="copyright">
            <p> Copyright &copy; Reactsite {date} </p>
        </div>

    </footer>

}

export default Footer