import React, { useState } from 'react'
import ReactModal from 'react-modal'
import { useNavigate } from 'react-router-dom'
import './auth.css'
import AuthPage from './AuthPage'
const AuthModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          backgroundColor:'#612c7d',
        },
      };


  return (
    <>
    <ReactModal isOpen={isOpen}
    style={customStyles}
    onRequestClose={onClose}
    overlayClassName={"overlay"}
    onAfterClose={onClose}
    >
    <div className="p-2  md:p-10 text-center text-white">
      <h2 className="text-xl font-semibold mb-4">Are you a Dealer or an Advertiser?</h2>
      <div className="flex gap-5 items-center justify-between">

        <div className='flex flex-col gap-1 hover:cursor-pointer hover:scale-105 transition-all duration-200 items-center justify-center' 
             onClick={() => {
              navigate(`/auth?usertype=dealer`)
              onClose()
          }
      }
      >
          <img className='h-32 max-w-fit p-2 filter invert' src="/dealers.png" alt="dealers png" />
        <button
          className="px-4 w-full  py-1 bg-white text-black font-bold  "
        >
          Dealer
        </button>
        </div>

        <div className='flex flex-col  gap-1 hover:cursor-pointer hover:scale-105 transition-all duration-200 items-center justify-center '
         onClick={() => {
          navigate(`/auth?usertype=advertiser`)
          onClose()
      }}
      >
          <img className='h-32 max-w-fit p-2 filter invert' src="/ads.png" alt="advertiser png" />
        <button
          className="px-4 w-full  py-1 bg-purple-200 text-black font-bold  "
        >
          Advertiser
        </button>
        </div>
      </div>
    </div>
  </ReactModal>
    </>
  )
}

export default AuthModal