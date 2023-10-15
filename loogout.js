// logout.js
import {
  getAuth,
  signOut,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js'

const auth = getAuth()

// 로그인 상태 확인
onAuthStateChanged(auth, (user) => {
  const logoutMessage = document.getElementById('logoutMessage')
  if (user) {
    // 로그인된 경우, "예" 버튼 클릭 시 로그아웃
    document.getElementById('confirmLogout').addEventListener('click', () => {
      signOut(auth)
        .then(() => {
          // 로그아웃 성공 메시지 표시
          logoutMessage.textContent = '로그아웃되었습니다.'
        })
        .catch((error) => {
          console.error('로그아웃 실패:', error)
        })
    })
  } else {
    // 로그인되지 않은 경우, 메시지 표시 및 로그인 페이지로 이동
    logoutMessage.textContent = '먼저 로그인 해주세요.'
    document.getElementById('confirmLogout').style.display = 'none'
  }
})

// "아니오" 버튼 클릭 시 로그아웃 페이지 닫기
document.getElementById('cancelLogout').addEventListener('click', () => {
  window.close()
})
