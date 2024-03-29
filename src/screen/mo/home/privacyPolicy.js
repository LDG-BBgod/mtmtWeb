// 모듈, 라이브러리
import { useState, useEffect } from 'react'
import { useDispatch, useSelector, batch } from 'react-redux'
import { styled } from 'styled-components'

// 컴포넌트
import Typography from '../../../components/Typography'
import Spacer from '../../../components/Spacer'
import Inner from '../../../components/Inner'
// 리덕스

// 기타

const privacyPolicy = () => {
  return (
    <Inner>
      <pre style={{ whiteSpace: 'pre-wrap', padding: '100px 0', lineHeight: 1.3 }}>{`
멘토멘티(이하 ‘회사’)는 이용자(이하 ‘정보주체’)의 ‘동의를 기반으로 개인정보를 수집∙이용 및 제공’하고 있으며 ‘정보주체의 개인정보자기결정권을 적극적으로 보장’하고 개인정보와 관련한 ‘정보주체의 고충을 원활하게 처리’할 수 있도록 다음과 같은 ‘개인정보처리방침’을 수립∙공개합니다.

‘개인정보처리방침’ 이란 정보주체의 소중한 개인정보를 보호함으로써 정보주체가 안심하고 서비스를 이용할 수 있도록 회사가 준수해야 할 지침을 의미하며 본 ‘개인정보처리방침’은 ‘멘토멘티’ 서비스에 적용됩니다.

제1조 (개인정보의 처리 목적)
1. 쿠폰 제공
2. 서비스 출시 시 알림

제2조 (개인정보의 처리 및 보유 기간)
1. 쿠폰 제공 및 서비스 출시 알림 이후 파기
2. 3월 내 서비스 출시 안되었을 시 파기

제3조 (개인정보의 제 3자 제공)
1. 개인정보의 3자 제공 일체 없음

제4조 (정보주체의 권리∙의무 및 그 행사방법)
1. 회사가 제공하는 서비스를 이용하는 이용자는 개인정보주체로서 언제든지 개인정보 보호 관련 권리(개인정보 열람 요구, 오류 등이 있을 경우 정정 요구, 삭제 요구, 처리 정지 요구 등)를 행사할 수 있으며, 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.
2. 이와 관련하여 개인정보를 열람∙정정∙삭제 등을 하고자 할 때에는 회사의 고객센터, 개인정보관리책임자에게 서면, 전화 또는 이메일로 요청 시 신속히 처리하겠습니다

제5조 (수집하는 개인정보 항목)
1. 이메일
2. 전화번호

제6조 (개인정보 보호책임자)

1. 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있으며, 정보주체께서는 회사의 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다.
2. 책임자메일 : na841a@naver.com

제7조 (권익침해에 대한 구제)
개인정보가 침해되어 이에 대한 신고나 상담이 필요하신 경우네는 아래 기관에 문의하셔서 도움을 받으실 수 있습니다.
- 개인정보 침해신고센터 (http://privacy.kisa.or.kr, 전화 118)
- 개인정보 분쟁조정위원회 (https://www.kopico.go.kr/main/main.do, 전화 1833-6972)
- 대검찰청 사이버범죄수사단 (http://www.spo.go.kr, 전화 02-3480-3573)
- 경찰청 사이버범죄수사단 (http://www.netan.go.kr, 전화 1566-0112)

제8조 (개인정보 처리방침 변경)
개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지하겠습니다.

상기 개인정보처리방침은 2024년 1월 30일부터 적용됩니다.`}</pre>
    </Inner>
  )
}

export default privacyPolicy
