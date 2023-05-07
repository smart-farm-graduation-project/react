import React, { useState } from 'react';

function Findinfo() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleUsernameSubmit = (event) => {
    event.preventDefault();
    if (username === '') {
      setErrorMsg('아이디를 입력해주세요.');
    } else {
      setErrorMsg(`아이디 ${username}이/가 존재하지 않습니다.`);
    }
  };

  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    if (password === '') {
      setErrorMsg('비밀번호를 입력해주세요.');
    } else {
      setErrorMsg(`비밀번호 ${password}은/는 존재하지 않습니다.`);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${"/img/Homepagelogo.png"})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h2 style={{ marginBottom: '5px', position: 'relative', left : '-180px', top : '270px' }}>아이디 찾기</h2>
      <form style={{position : 'absolute', top : '710px', left : '700px'}} onSubmit={handleUsernameSubmit}>
        <div style={{ marginBottom: '5px' }}>

          <input
            type="text"
            placeholder="아이디를 입력해주세요."
            id="username"
            name="username"
            style={{ width: '100%', height: '30px' }}
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <button type="submit" style={{ width: '100%' }}>
          아이디 찾기
        </button>
      </form>

      <h2 style={{ marginTop: '40px', marginBottom: '20px' , position: 'relative', left : '100px', top : '192px' }}>비밀번호 찾기</h2>
      <form style ={{position : 'absolute', top : '710px', left : '1000px'}} onSubmit={handlePasswordSubmit}>
        <div style={{ marginBottom: '5px' }}>
         
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            id="password"
            name="password"
            style={{ width: '100%', height: '30px' }}
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit" style={{ width: '100%' }}>
          비밀번호 찾기
        </button>
      </form>

      {errorMsg && <p style={{ color: 'red', marginTop: '50px', position: 'relative', top: '250px' }}>{errorMsg}</p>}

    </div>
  );
}

export default Findinfo;
