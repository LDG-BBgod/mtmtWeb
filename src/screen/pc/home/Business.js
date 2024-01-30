// 모듈, 라이브러리
import { useState, useEffect } from 'react'
import { useDispatch, useSelector, batch } from 'react-redux'
import { styled } from 'styled-components'
import axios from 'axios'

// 컴포넌트
import Typography from '../../../components/Typography'
import Spacer from '../../../components/Spacer'
import Inner from '../../../components/Inner'
import Divider from '../../../components/Divider'
import Button1 from '../../../components/Button1'
// 리덕스

// 기타
const Business = () => {
  const [isAuthCheck, setIsAuthCheck] = useState(false)
  const [isContact, setIsContact] = useState('')

  const handleButton = async () => {
    if (isAuthCheck && isContact) {
      const body = {
        contact: isContact,
      }
      await axios
        .post(process.env.REACT_APP_MENTOR_CREATE, body)
        .then((res) => {
          if (!res.data.err) {
            alert(
              '멘토멘티 베타서비스에 성공적으로 참여하셨습니다. 베타서비스를 출시할 때 안내드리겠습니다.',
            )
            window.location.reload()
          } else {
            alert('서버에 오류가 발생하였습니다. 페이지를 새로고침해주세요.')
          }
        })
        .catch((err) => {
          alert('서버에 오류가 발생하였습니다. 페이지를 새로고침해주세요.')
        })
    } else {
      alert(
        '개인정보 수집 이용에 동의해 주세요.\nmail 혹은 전화번호를 입력해주세요.',
      )
    }
  }

  return (
    <Inner>
      <Spacer space={80} />
      <Typography fontSize={30} fontWeight="bold" color="#0D2156">
        Business
      </Typography>
      <Spacer space={20} />
      <Divider height={5} color={'#0D2156'} />
      <Spacer space={30} />
      <Typography fontSize={24} fontWeight="500">
        멘토링 “중개” 서비스를 “준비” 중입니다.
      </Typography>
      <Spacer space={10} />
      <Typography fontSize={24} fontWeight="500">
        파트너로 참여하실 멘토님들을 “모집”중입니다.
      </Typography>
      <Spacer space={50} />
      <div
        style={{
          backgroundColor: '#0D2156',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          padding: 15,
          borderRadius: 30,
        }}
      >
        <img src="/img/businessImg1.png" alt="businessImg1" />
        <Spacer vertical={false} space={30} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 30,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/img/businessIcon1.svg" alt="businessIcon1" />
            <Spacer vertical={false} space={20} />
            <Typography fontSize={20} fontWeight="500" color="#fff">
              전문가 멘토님들을 위한 부업입니다.
            </Typography>
            <Typography fontSize={12} fontWeight="500" color="#fff">
              (회사의 겸업금지조항이 신경쓰이는 분들은 문의주세요.)
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/img/businessIcon1.svg" alt="businessIcon1" />
            <Spacer vertical={false} space={20} />
            <Typography fontSize={20} fontWeight="500" color="#fff">
              원하는 시간과 업무를 자유롭게 선택할 수 있어요. 할당량 자체가
              없습니다.
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/img/businessIcon1.svg" alt="businessIcon1" />
            <Spacer vertical={false} space={20} />
            <Typography fontSize={20} fontWeight="500" color="#fff">
              업무 영역에서 곤란을 겪고 있는 주니어 분들을 보조하는 업무입니다.
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/img/businessIcon1.svg" alt="businessIcon1" />
            <Spacer vertical={false} space={20} />
            <Typography fontSize={20} fontWeight="500" color="#fff">
              Mail 혹은 전화번호를 남겨주세요. beta service에 참여하실 수
              있습니다.
            </Typography>
          </div>
        </div>
      </div>
      <Spacer space={100} />
      <Typography fontSize={30} fontWeight="bold" color="#0D2156">
        부담 없이 beta service에 참여해보세요.
      </Typography>
      <Spacer space={20} />
      <Typography>
        연락처를 남겨주신 분께 서비스 출시 시, 출시 안내와 함께 매칭 우선권
        쿠폰을 드립니다.
      </Typography>
      <Spacer space={10} />
      <Typography>
        남겨주신 연락처는 beta service 출시 안내에만 사용되며 이외 목적으로는
        사용되지 않고 바로 폐기됩니다.
      </Typography>
      <Spacer space={10} />
      <Typography>신청 후, 참여가 없으셔도 어떤 불이익도 없습니다.</Typography>
      <Spacer space={20} />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="checkBox"
          style={{ height: 16, width: 16 }}
          id="auth"
          onChange={() => {
            setIsAuthCheck(!isAuthCheck)
          }}
        />
        <Spacer vertical={false} space={8} />
        <label htmlFor="auth" style={{ cursor: 'pointer', fontSize: 14 }}>
          개인정보 수집 이용 동의
        </label>
        <Spacer vertical={false} space={4} />
        <Typography
          fontSize={14}
          addStyle={{ cursor: 'pointer' }}
          onClick={() => {
            window.open('/home/privacyPolicy', '_blank')
          }}
        >
          [보기]
        </Typography>
      </div>
      <Spacer space={15} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <input
          style={{
            border: 'none',
            backgroundColor: '#F3F3F3',
            width: 400,
            height: 40,
            borderRadius: 20,
            paddingLeft: 20,
          }}
          type="text"
          placeholder="mail 혹은 전화번호 입력"
          onChange={(e) => {
            setIsContact(e.target.value)
          }}
        />
        <Button1
          width={150}
          height={40}
          text="참여하기"
          fontSize={18}
          backgroundColor="#0D2156"
          onClick={() => {
            handleButton()
          }}
        />
      </div>
      <Spacer space={100} />
    </Inner>
  )
}

export default Business
