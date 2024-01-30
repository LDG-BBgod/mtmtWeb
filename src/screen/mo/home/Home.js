// 모듈, 라이브러리
import { useState, useEffect } from 'react'
import { useDispatch, useSelector, batch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

// 컴포넌트
import Typography from '../../../components/Typography'
import Spacer from '../../../components/Spacer'
import MoPadding from '../../../components/MoPadding'
import Button1 from '../../../components/Button1'
// 리덕스

// 기타

const InCompList = ({ backgroundColor, listNumber, text1 }) => (
  <div
    style={{
      width: '100%',
      backgroundColor: '#fff',
      display: 'flex',
      alignItems: 'center',
      borderRadius: 15,
    }}
  >
    <div
      style={{
        flexShrink: 0,
        width: 50,
        height: 50,
        borderRadius: 15,
        backgroundColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography fontSize={20} fontWeight="bold" color="#fff">
        {listNumber}
      </Typography>
    </div>
    <div style={{ padding: '0 10px' }}>
      <Typography fontWeight="500" fontSize={12} addStyle={{ lineHeight: 1.3 }}>
        {text1}
      </Typography>
    </div>
  </div>
)

const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <div name="섹션1" style={{ backgroundColor: '#0D2156' }}>
        <MoPadding>
          <div
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '30px 0',
            }}
          >
            <img src="/img/homeImg1.png" alt="homeImg1" width={'100%'} />
            <Spacer space={40} />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography fontSize={18} fontWeight="bold" color="#fff">
                신입사원분들, 프리랜서분들
              </Typography>
              <Spacer space={20} />
              <Typography fontSize={18} fontWeight="bold" color="#fff">
                진행하시는 프로젝트가 막히셨나요?
              </Typography>
              <Spacer space={20} />
              <Typography fontSize={18} fontWeight="bold" color="#fff">
                멘토멘티가 해결해드립니다.
              </Typography>
            </div>
          </div>
        </MoPadding>
      </div>
      <div name="섹션2">
        <MoPadding>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '50px 0',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography fontSize={18} fontWeight="bold" color="#0D2156">
                전문가님들의 멘토링을 통한
              </Typography>
              <Spacer space={5} />
              <Typography fontSize={18} fontWeight="bold" color="#0D2156">
                프로젝트 해결! 부담없이 이용하세요.
              </Typography>
              <Spacer space={20} />
              <Typography fontSize={18} fontWeight="bold">
                주니어&전문가 멘토링 매칭 솔루션
              </Typography>
              <Spacer space={5} />
              <Typography fontSize={18} fontWeight="bold">
                "멘토멘티"
              </Typography>
              <Spacer space={40} />
              <img src="/img/homeImg2.png" alt="homeImg2" width={'100%'} />
              <Spacer space={40} />

              <Button1
                text="서비스 이용하기"
                width={'100%'}
                height={40}
                fontSize={20}
                backgroundColor="#0D2156"
                onClick={() => {
                  alert(
                    '현재 베타서비스를 준비중입니다.\n궁금하신점이 있으시면 Contact에 문의사항을 남겨주세요.',
                  )
                }}
              />
              <Spacer space={20} />
              <Button1
                text="APP 다운로드"
                width={'100%'}
                height={40}
                fontSize={20}
                backgroundColor="#0DA300"
                onClick={() => {
                  alert(
                    '현재 베타서비스를 준비중입니다.\n궁금하신점이 있으시면 Contact에 문의사항을 남겨주세요.',
                  )
                }}
              />
              <Spacer space={20} />
              <Button1
                text="멘토 등록하기"
                width={'100%'}
                height={40}
                fontSize={20}
                backgroundColor="#EA7000"
                onClick={() => {
                  navigate('/home/Business')
                }}
              />
            </div>
          </div>
        </MoPadding>
      </div>
      <div name="섹션3" style={{ backgroundColor: '#B3D5F3' }}>
        <MoPadding>
          <div style={{ padding: '50px 0' }}>
            <Typography fontSize={18} fontWeight="bold" color="#0D2156">
              신입사원, 프리랜서 멘티님들!
            </Typography>
            <Spacer space={5} />
            <Typography fontSize={18} fontWeight="bold" color="#0D2156">
              혼자서 고민하지 마세요!
            </Typography>
            <Spacer space={50} />
            <InCompList
              backgroundColor={'#0D2156'}
              listNumber={'01'}
              text1={
                '혼자서 프로젝트를 진행하시느라 어려우셨죠? 막힌 부분을 멘토님과 함께 해결해보세요.'
              }
            />
            <Spacer space={25} />
            <InCompList
              backgroundColor={'#0D2156'}
              listNumber={'02'}
              text1={
                '멘토링을 통해 문제도 해결하고, 업무 실력도 향상 시킬수 있어요.'
              }
            />
            <Spacer space={25} />
            <InCompList
              backgroundColor={'#0D2156'}
              listNumber={'03'}
              text1={
                '막힌 부분을 등록하시고 의뢰 비용을 선택하시면, 10분 이내로 멘토님이 매칭되어, 함께 해결해주십니다.'
              }
            />
            <Spacer space={25} />
            <InCompList
              backgroundColor={'#0D2156'}
              listNumber={'04'}
              text1={
                '원하시는 방식으로 진행 가능해요. (전화, 채팅, 화면공유, 원격제어, 화상회의, 직접미팅)'
              }
            />
          </div>
        </MoPadding>
      </div>

      <div name="섹션4" style={{ backgroundColor: '#808080' }}>
        <MoPadding>
          <div style={{ padding: '50px 0' }}>
            <Typography
              fontSize={18}
              fontWeight="bold"
              color="#fff"
              addStyle={{ lineHeight: 1.4 }}
            >
              5년이상 경력이 있으신 전문 멘토님들!
            </Typography>
            <Typography
              fontSize={18}
              fontWeight="bold"
              color="#fff"
              addStyle={{ lineHeight: 1.4 }}
            >
              편하게 멘토링하시고, 부가 수익도 창출해보세요!
            </Typography>
            <Spacer space={50} />
            <InCompList
              backgroundColor={'#000'}
              listNumber={'01'}
              text1={
                '원하는 시간과 멘토링 요청을 자유롭게 선택할 수 있어요. 할당량 없는 자유도 100% 멘토링입니다.'
              }
            />
            <Spacer space={25} />
            <InCompList
              backgroundColor={'#000'}
              listNumber={'02'}
              text1={
                '업무 영역에서 곤란을 겪고 있는 멘티분들을 도와주시고, 멘토비를 지급받으세요.'
              }
            />
            <Spacer space={25} />
            <InCompList
              backgroundColor={'#000'}
              listNumber={'03'}
              text1={
                '원하시는 방식으로 진행 가능해요. (전화, 채팅, 화면공유, 원격제어, 화상회의, 직접미팅)'
              }
            />
          </div>
        </MoPadding>
      </div>
    </>
  )
}

export default Home
