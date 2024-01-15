import React, { useEffect, useMemo, useState } from 'react'
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom';
import Piechart from './piechart';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BarChart from './lineChart';



const AnalyticsDialog = () => {
    const [current, setCurrent] = useState(-1);
    const [achievementData,setData]= useState({
        labels: ['DailyChallenges', 'Achievements'],
        datasets: [
          {
            label: 'Monthly Completed Challenges',
            data: [12, 3],
            backgroundColor: [
              'rgba(173, 216, 230, 0.2)',
              'rgba(255, 165, 0, 0.2)',
             ],
            borderColor: [
              'rgba(173, 216, 230, 1)',
              'rgba(255, 165, 0, 1)',
            ],
            borderWidth: 1,
          },
        ],
      });

      const [RewardData,setRewardData]= useState({
        labels: ['Xp Obtained', 'Gems/Trophy Obtained'],
        datasets: [
          {
            label: 'Monthly Rewards Obtained',
            data: [55, 3],
            backgroundColor: [
              'rgba(173, 216, 230, 0.2)',
              'rgba(29, 209, 161,0.4)',
             ],
            borderColor: [
              'rgba(173, 216, 230, 1)',
              'rgba(29, 209, 161,1.0)',
            ],
            borderWidth: 1,
          },
        ],
      });


      const labels = ["Day 01", "Day 02", "Day 03", "Day 04", "Day 05", "Day 06", "Day 07"];

      
       const LessonData = {
            labels,
            datasets: [
            {
                label: "Lesson Completed",
                data: [2,0,0,4,0,0,1],
                backgroundColor: "rgba(29, 209, 161,1.0)"
            }
            ]
        }

        const flashData = {
            labels,
            datasets: [
            {
                label: "Weekly Flashcard Revisited",
                data: [2,0,0,3,1,1,1],
                backgroundColor: "rgba(29, 209, 161,1.0)"
            }
            ]
        }

      

      function displayChart(current){
        if(current==1){
            return <BarChart data={LessonData}/>
        }else if(current==2){
            return <Piechart data={RewardData}/>
        }else if(current==3){
            return <BarChart data={flashData}/>
        }
        else{
            return <Piechart data={achievementData}/>
        }
      }

      

      const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1}
      };
    return (
        <div className="dialogSign w-[70%] mx-[8vw] md:mx-[5vw] mb-4 h-[95%] mt-6 pb-7 max-[600px]:max-w-[75vw] max-[600px]:w-auto overflow-scroll  relative" id='main2'>
        <h1 className='headSign text-[35px] text-center mt-[3vh] mb-4'>User's Analytics</h1>
            <div className="flex justify-center max-h-[60%] text-white">
                {current? displayChart(current):displayChart(current)}
            </div>
            <div className="w-[80%] h-auto ml-[10%] mt-9">
            <Carousel beforeChange={(currentSlide)=>{setCurrent([currentSlide])}} responsive={responsive}>
                <div className='text-center'>Monthly Challenges Completed</div>
                <div className='text-center'>Weekly Lesson Completed</div>
                <div className='text-center'>Monthly Rewards Obtained</div>
                <div className='text-center'>Weekly Flashcard Revisited</div>
            </Carousel>
            </div>
        </div>
  )
}

export default AnalyticsDialog




