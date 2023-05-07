import React from 'react';

function join() {
  return (
    <div style={{
      backgroundImage: `url(${"/img/Homepagelogo.png"})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    }}>
      <h2 style={{ position: 'absolute', top: '650px', left: '710px' }}>회원가입</h2>
      <form style={{ position: 'absolute', top: '700px', left: '840px' }}>
        <div style={{ marginBottom: '5px' }}>
          <label htmlFor="username" style={{ display: 'block' }}></label>
          <input type="text" placeholder="아이디 : " id="username" name="username" style={{ width: '100%', height: '30px' }} required />
        </div>

        <div style={{ marginBottom: '5px' }}>
          <label htmlFor="password" style={{ display: 'block' }}></label>
          <input type="password" placeholder="비밀번호 : " id="password" name="password" style={{ width: '100%', height: '30px' }} required />
        </div>

        <div style={{ marginBottom: '5px' }}>
          <label htmlFor="password-confirm" style={{ display: 'block' }}></label>
          <input type="password" placeholder="비밀번호 확인 : " id="password-confirm" name="password-confirm" style={{ width: '100%', height: '30px' }} required />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email" style={{ display: 'block' }}></label>
          <input type="email" placeholder="이메일 : " id="email" name="email" style={{ width: '100%', height: '30px' }} required />
        </div>

      </form>

      <div style={{ position: 'absolute', top: 750, left: 1050 }}>
        <button style={{ width: '100px', height: '50px' }} onClick={() => window.location.href='/Login'}>회원가입</button>
      </div>

    </div>
  );
}

export default join;
