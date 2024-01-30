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
const Contact = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [mail, setMail] = useState('')
  const [question, setQuestion] = useState('')

  const handleButton = async () => {
    if (name && phone && mail && question) {
      const body = {
        name,
        phone,
        mail,
        question,
      }
      await axios
        .post(process.env.REACT_APP_CONTACTMAIL_CREATE, body)
        .then((res) => {
          if (!res.data.err) {
            alert(
              '멘토멘티에 문의사항을 제출하였습니다.\n빠르게 확인후 답변드리겠습니다.',
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
        '성함, 휴대폰 번호, E-mail, 문의사항을 입력해주세요.',
      )
    }
  }

  return (
    <Inner>
      <Spacer space={80} />
      <Typography fontSize={30} fontWeight="bold" color="#0D2156">
        Contact
      </Typography>
      <Spacer space={20} />
      <Divider height={5} color={'#0D2156'} />
      <Spacer space={100} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src="/img/contactImg1.svg" alt="contactImg1" />
          <Spacer space={20} />
          <Typography fontSize={26} fontWeight="bold">
            문의하기
          </Typography>
          <Spacer space={20} />
          <Typography fontWeight="500">업무 협약, 서비스 문의,</Typography>
          <Spacer space={10} />
          <Typography fontWeight="500">
            기타 문의 등 요청사항을 남겨주세요.
          </Typography>
          <Spacer space={10} />
          <Typography fontWeight="500">한인 후 답변드립니다.</Typography>
        </div>
        <div
          style={{
            paddingLeft: 50,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 30,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <img
              src="/img/contactPhone.svg"
              alt="contactPhone"
              height={40}
              width={40}
            />
            <Typography fontSize={20} fontWeight="bold" color="#000">
              010 - 5408 - 8229
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <img
              src="/img/contactFax.svg"
              alt="contactFax"
              height={40}
              width={40}
            />
            <Typography fontSize={20} fontWeight="bold" color="#000">
              0505 - 720 - 0229
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <img
              src="/img/contactMail.svg"
              alt="contactMail"
              height={40}
              width={40}
            />
            <Typography fontSize={20} fontWeight="bold" color="#000">
              padzz321@naver.com
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <img
              src="/img/contactCompany.svg"
              alt="contactCompany"
              height={40}
              width={40}
            />
            <Typography fontSize={20} fontWeight="bold" color="#000">
              충청남도 계룡시 사계로6길 28
            </Typography>
          </div>
        </div>
      </div>
      <Spacer space={150} />

      <Typography fontSize={20} fontWeight="bold" color="#0D2156">
        성함
      </Typography>
      <Spacer space={10} />
      <InInput
        onChange={(e) => {
          setName(e.target.value)
        }}
      />
      <Spacer space={30} />

      <Typography fontSize={20} fontWeight="bold" color="#0D2156">
        휴대폰 번호
      </Typography>
      <Spacer space={10} />
      <InInput
        placeholder="(-) 기호 없이 입력해주세요."
        onChange={(e) => {
          setPhone(e.target.value)
        }}
      />
      <Spacer space={30} />

      <Typography fontSize={20} fontWeight="bold" color="#0D2156">
        E-mail
      </Typography>
      <Spacer space={10} />
      <InInput
        placeholder="이메일 형식으로 입력해주세요."
        onChange={(e) => {
          setMail(e.target.value)
        }}
      />
      <Spacer space={30} />

      <Typography fontSize={20} fontWeight="bold" color="#0D2156">
        문의하기
      </Typography>
      <Spacer space={10} />
      <InTextarea
        onChange={(e) => {
          setQuestion(e.target.value)
        }}
      />
      <Spacer space={30} />
      <Button1
        height={50}
        width={200}
        text="제출하기"
        backgroundColor="#0D2156"
        fontSize={20}
        onClick={() => {
          handleButton()
        }}
      />
      <Spacer space={100} />
    </Inner>
  )
}

export default Contact

const InInput = styled.input`
  height: 35px;
  width: 100%;
  border: solid 1px #000;
  border-radius: 8px;
  padding-left: 10px;
  font-size: 16px;
`
const InTextarea = styled.textarea`
  resize: none;
  height: 200px;
  width: 100%;
  border: solid 1px #000;
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
`
