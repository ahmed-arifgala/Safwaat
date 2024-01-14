import React from 'react'
import '../../App.css'
import Streak from '../../Assets/fire.png'
import One from '../../Assets/frame1.png'
import BookWhite from '../../Assets/openbook2.png'

const LeaderboardTable = ({data,label,board,userLeagues,userId}) => {
  function highlight(index){
    if(index==0){
      return 'bg-[#FACC15] w-9 h-7 p-1 rounded-md text-center ml-12';
    }else if(index==1){
      return 'bg-[#94A3B8] w-9 h-7 p-1 rounded-md text-center ml-12';
    }else if(index==2){
      return 'bg-[#D97706] w-9 h-7 p-1 rounded-md text-center ml-12';
    }
    else if(index<data.length-3){
      return 'w-9 h-7 p-1 bg-[#0A3F67] rounded-md text-center ml-12'
    }
    return 'bg-[#F43F5E] w-9 h-7 p-1 rounded-md text-center ml-12';
  }

  function userhighlight(id){
    if(id==userId){
      return ''
      // 'bg-blue-300 text-white rounded-3xl'
    }
    console.log(id);
    return null
  }

  return (
    <div className="mx-4 mt-8 relative" style={{maxHeight: '90%',overflow: 'auto' }}>
        <table className="w-full">
          <thead> 
            <tr className="tablemenu bg-[#0A3F67] w-[20%] rounded-full">
              <th className="w-1/6 p-2  text-white ">{label.firstCol}</th>
              <th className="w-4/6 px-8 py-2 text-start  text-white">{label.secCol}</th>
              <th className="w-1/6 p-2  text-white "><span className='text-white'>{label.thirdCol}</span></th>
            </tr>
          </thead>
          <tbody>
            {board=='xp' && data.map(({ username, leaderboardXP,playerID },index) => (
            <>
            <tr key={index} className={userhighlight(playerID)}>
              <td className="p-5 text-center text-white"><p className={highlight(index)}>{index+1}</p></td>
              <td className="p-5 text-white">{username}</td>
              <td className="p-5 text-center font-bolder text-white">{leaderboardXP}</td>
            </tr>
            {index < data.length - 1 && (
                <tr className="border-b border-gray-600">
                  <td colSpan="3"></td>
                </tr>
              )}
              </>
          )) }
          {board=='streak' && data.map(({_id, username, streak }, index) => (
            <>
            <tr key={index} className={userhighlight(_id)}>
              <td className="p-5 text-center text-white"><p className={highlight(index)}>{index+1}</p></td>
              <td className="p-5 text-white">{username}</td>
              <td className="p-5 text-center text-white">{streak}</td>
              <td><hr /></td>
            </tr>
            {index < data.length - 1 && (
                <tr className="border-b border-gray-600">
                  <td colSpan="3"></td>
                </tr>
              )}
            </>
          ))}
        </tbody>
        </table>
      </div>
  )
}

export default LeaderboardTable