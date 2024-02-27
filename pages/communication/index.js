import React from 'react'
import Layout from '../../components/Layout'
import GoogleMaps from '../../components/GoogleMap'

const Communication = () => {
  return (
    <Layout>
        <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}} >
          Communication
          <GoogleMaps/>
        </div>
    </Layout>
  )
}

export default Communication