import React from 'react'
import Dashboard  from '../../components/Dashboard'
import ProtectPage from '../../components/ProtectPage'
const DashboardPage = () => {
  return (
    <div>
        <ProtectPage>
            <Dashboard  />
        </ProtectPage>
    </div>
  )
}

export default DashboardPage