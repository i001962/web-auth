import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { createCreds, validateCreds } from '../components/webauthn';
import '../components/App.css';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <div className="App">
        <header className="App-header">

          <img style={{
              height: "20vh"
            }} 
            src="cyber-security.svg" 
            alt="" />
          
          <p>
            WebAuthn API Demo
          </p>
          
          <p>
            <a href="https://blog.davidvassallo.me">Check blog post for more details</a>
          </p>
          
          <button 
            
            onClick={createCreds}
          >
            Register Creds
          </button>

          <button 
           
            onClick={validateCreds}
          >
            Validate Creds
          </button>

        </header>
      </div>



    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
