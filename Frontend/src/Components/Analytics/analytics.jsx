import React from 'react'
import Piechart from './piechart'
import AnalyticsDialog from './analyticsDialog'

const Analytics = () => {
    return (
        <div className="contain">
        <div className="w-screen h-screen wrapperAnalytics">
                <div className="flex justify-center items-center h-[100%]">
                    <AnalyticsDialog/>
        </div>
        </div>
        </div>
      )
}

export default Analytics