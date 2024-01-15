import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import UserResultBox from './userResultBox';
import InvertedButton from '../../../UI/Button/InvertedButton';
import FilledButton from '../../../UI/Button/FilledButton';
import group from '../../../Assets/Gifs/group.gif';

function FriendshipMain() {
    
const navigate = useNavigate();

const [searchValue, setSearchValue] = useState("");
const [searched, setSearched] = useState(false);

const navigateHandler = () => {
    navigate('Insights')
}

const onSearch = () => {
    console.log(searchValue);
    setSearched(true);
}

const searchDetail = [
    {
        name: 'Muhammad Amir',
        userName: '@muhammadAmir',
    },
    {
        name: 'Fahad Umer',
        userName: '@fahad_umer',
    },
    {
        name: 'Malik Shaz',
        userName: '@shaz.123',
    },
    {
        name: 'Khalid Zain',
        userName: '@khalidX',
    }

]
  
    return (
    
    <div className='h-screen w-3/4 pt-8 ml-10 '>
        
        {/* First Section */}
        <div>
            <h1 className='font-bold text-secondary text-2xl mb-4'>Friendship Awaits, Start Searching! 🚀</h1>

            {/* Searchbar container */}
            <div className='w-full'>
                {/* Search Bar */}
                <div className="flex items-center justify-between w-[80%] p-4 px-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
                
                {/* Inner Search Bar Input  */}
                <div className="flex p-4 w-10/12 rounded-lg bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input className="text-secondary bg-gray-100 w-3/4 outline-none ml-7"
                        type="text" 
                        placeholder="Enter the Username or Full Name ..." 
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}

                        />

                </div>
            
                {/* Search Button */}
                <div className="bg-secondary text-white ml-5 py-3 px-5 font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
                    <button 
                    className='w-full h-full'
                    onClick= {onSearch}
                    >Search</button>
                </div>
            
                </div>
            </div>

        </div>

        {/*Border  */}
        <div className='h-[2px] w-[90%] bg-slate-300 mt-8 '>
        </div>

        {/*Second Section  */}
        
        <div className='mt-5 text-secondary flex '>
           
           {
            searched ?
           
            
            (
            <div className='w-3/5 border-r-[2px] border-slate-300 pr-4'>
                <h1 className='font-bold text-secondary text-xl mb-4'>Search Results</h1>
                <div className='w-full grid grid-cols-2 gap-2'>
                    {
                        searchDetail.map(
                            (val, i) => (
                                <UserResultBox key={i} name={val.name} userName={val.userName}  />
                            )
                        )
                    }
                
                </div>
            </div>
            )
            
            : 
            
            (
            <div className='w-3/5 flex-column px-8 mt-4'>
                <img src={group} alt='group animation' className='mix-blend-multiply h-48 w-48 ' /> 
                <p className='text-center text-lg font-Poppins'>Learning is a journey best taken with friends. Seek out like-minded individuals to join you!</p>
            </div>
            )
        }
            {/* Summary Section */}
            <div className='w-2/5 text-secondary flex justify-center' >
                {/* Main Div */}
                <div className='w-11/12 h-min-[90%] border-[2px] border-cyan-500 rounded-xl'>
                    <h1 className='font-bold text-lg text-center mt-4 mb-5 '>Your Friendship Hub Insights</h1>
                    <p className='text-slate-500 text-sm mx-4 text-center mb-5 font-Inter'>Building Brilliance Together: Inspiring connections, invitations sent, 
                        and friendships in the making. Your knowledge network is thriving!</p>
                    <div className='ml-5 mr-10 text-slate-500'>
                        <p className='mb-3 flex justify-between'>
                            <span className='font-bold'>Your Safwaat Friends</span>
                            <span className=''>15</span>
                        </p>
                        <p className='mb-3 flex justify-between'>
                            <span className='font-bold'>Pending Friend Requests</span>
                            <span>10</span>
                        </p>
                        <p className='mb-3 flex justify-between'>
                            <span className='font-bold'>Your Sent Requests</span>
                            <span>5</span>
                        </p>
                    </div>
                    
                    <div className='w-1/2 mx-auto mt-7 mb-2'>
                        <FilledButton clickHandler={navigateHandler}>View Details</FilledButton>
                    </div>

                </div>

            

            </div>

            


           

        
        </div>


    </div>
  )
}

export default FriendshipMain