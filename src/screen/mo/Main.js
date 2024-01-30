// 모듈, 라이브러리
import { useState, useEffect } from 'react'
import { useDispatch, useSelector, batch } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

// 컴포넌트
import Home from './home/Home'
import About from './home/About'
import Business from './home/Business'
import Contact from './home/Contact'
import privacyPolicy from './home/privacyPolicy'

import Typography from '../../components/Typography'
import Spacer from '../../components/Spacer'
import MoPadding from '../../components/MoPadding'

// 리덕스

// 기타
const Main = () => {
  const navigate = useNavigate()

  return (
    <>
      <MoPadding>
        <InHeader>
          <img
            src="/img/logo.svg"
            alt="logo"
            height={35}
            width={35}
            style={{ cursor: 'pointer' }}
            onClick={() => {
              navigate('/')
            }}
          />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              fontSize={14}
              fontWeight="bold"
              addStyle={{ cursor: 'pointer' }}
              onClick={() => {
                navigate('/home/About')
              }}
            >
              About
            </Typography>
            <Spacer vertical={false} space={30} />
            <Typography
              fontSize={14}
              fontWeight="bold"
              addStyle={{ cursor: 'pointer' }}
              onClick={() => {
                navigate('/home/Business')
              }}
            >
              Business
            </Typography>
            <Spacer vertical={false} space={30} />
            <Typography
              fontSize={14}
              fontWeight="bold"
              addStyle={{ cursor: 'pointer' }}
              onClick={() => {
                navigate('/home/Contact')
              }}
            >
              Contact
            </Typography>
          </div>
        </InHeader>
      </MoPadding>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/home/About" Component={About} />
        <Route path="/home/Business" Component={Business} />
        <Route path="/home/Contact" Component={Contact} />
        <Route path="/home/privacyPolicy" Component={privacyPolicy} />
      </Routes>

      <InFooter>
        <Typography fontSize={12} color="#fff">
          멘토멘티
        </Typography>
        <Spacer space={10} />
        <Typography fontSize={12} color="#fff">
          대표: 이동권
        </Typography>
        <Spacer space={10} />
        <Typography fontSize={12} color="#fff">
          주소: 충청남도 계룡시 사계로 6길 28
        </Typography>
        <Spacer space={10} />
        <Typography fontSize={12} color="#fff">
          개인정보 책임 관리자: 이동권
        </Typography>
        <Spacer space={10} />
        <Typography fontSize={12} color="#fff">
          E-mail: padzz321@naver.com
        </Typography>
      </InFooter>
    </>
  )
}

export default Main

const InHeader = styled.header`
  height: 60px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const InFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  background-color: #000;
`
