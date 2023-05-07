import React from "react";

function Loginhome(){
    return(
        <div
        style={{
          backgroundImage: `url(${"/img/Homepagelogo.png"})`,
          backgroundSize: "contain",
          backgroundRepeat : 'no-repeat',
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
<h2 style={{ position: 'absolute', top: '650px', left: '710px' }}>로그인</h2>
      <form style={{ position: 'absolute', top: '700px', left: '840px' }}>
        <div style={{ marginBottom: '5px' }}>
          <label htmlFor="username" style={{ display: 'block' }}></label>
          <input type="text" placeholder="아이디 : " id="username" name="username" style={{ width: '100%', height: '30px' }} required />
        </div>

        <div style={{ marginBottom: '5px' }}>
          <label htmlFor="password" style={{ display: 'block' }}></label>
          <input type="password" placeholder="비밀번호 : " id="password" name="password" style={{ width: '100%', height: '30px' }} required />
        </div>
        </form>

        <div style={{position : 'absolute', top : 800, left: 950}}>
        <button onClick={() => window.location.href='/join'}>Join Now</button>
        </div>
      

        <div style={{position : 'absolute', top : 800, left: 850}}>
        <button onClick={() => window.location.href='/Findinfo'}>Find ID/PW</button>
        </div>

        <div style={{position : 'absolute', top : 725, left: 1030}}>
        <button onClick={() => window.location.href='/Login'}>Login</button>
        </div>

        </div>
    );
}

export default Loginhome