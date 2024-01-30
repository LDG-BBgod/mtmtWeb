// 모듈, 라이브러리
import { useState, useEffect } from 'react'
import { useDispatch, useSelector, batch } from 'react-redux'
import { styled } from 'styled-components'

// 컴포넌트
import Typography from '../../../components/Typography'
import Spacer from '../../../components/Spacer'
import Inner from '../../../components/Inner'
import Divider from '../../../components/Divider'
// 리덕스

// 기타

const InCompTeam = ({ src, name, role }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <Spacer space={60} />
    <img src={src} alt="aboutTeamImg" height={150} width={150} />
    <Spacer space={30} />
    <Typography fontSize={24} fontWeight="600" color="#0D2156">
      {name}
    </Typography>
    <Spacer space={5} />
    <Typography fontSize={24} fontWeight="600" color="#0D2156">
      {role}
    </Typography>
  </div>
)

const About = () => {
  return (
    <Inner>
      <Spacer space={80} />
      <Typography fontSize={30} fontWeight="bold" color="#0D2156">
        About 멘토멘티
      </Typography>
      <Spacer space={20} />
      <Divider height={5} color={'#0D2156'} />
      <Spacer space={30} />
      <Typography fontSize={24} fontWeight="500">
        멘토멘티는 업무 효율을 혁신하는 스타트업입니다.
      </Typography>
      <Spacer space={10} />
      <Typography fontSize={24} fontWeight="500">
        24년 9월 서비스가 출시됩니다.
      </Typography>
      <Spacer space={100} />
      <Typography fontSize={30} fontWeight="bold" color="#0D2156">
        TEAM
      </Typography>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <InCompTeam
          src={'/img/aboutTeamImg1.svg'}
          name={'이동권'}
          role={'대표, 개발자'}
        />
        <InCompTeam
          src={'/img/aboutTeamImg2.svg'}
          name={'이동진'}
          role={'영업, 마케팅'}
        />
        <InCompTeam
          src={'/img/aboutTeamImg3.svg'}
          name={'최연주'}
          role={'디자이너'}
        />
      </div>
      <Spacer space={150} />
      <Typography fontSize={30} fontWeight="bold" color="#0D2156">
        Partners
      </Typography>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <InCompTeam src={'/img/aboutPartnersImg1.svg'} />
        <Spacer vertical={false} space={100} />
        <InCompTeam src={'/img/aboutPartnersImg2.svg'} />
      </div>
      <Spacer space={100} />
    </Inner>
  )
}

export default About
