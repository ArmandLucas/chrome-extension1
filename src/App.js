import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='logo' >
          <div style={{ display: 'flex', margin: '32px' }}>
            <p style={{ color: '#66DC78', margin: '0' }}>Work</p><p style={{ color: 'white', margin: '0' }}>Alert</p>
          </div>
        </div>
        <div className='button'><p style={{ margin: '8px 16px' }}>SIGN UP</p></div>
      </header>

      <div style={{ padding: '0 32px', backgroundColor: 'black', height: '910px' }}>
        <p style={{ fontSize: '20px', margin: '32px 0', color: 'white', fontWeight: '600' }} >LOG IN</p>
        <input type="email" style={{ width: '-webkit-fill-available', height: '40px', borderRadius: '4px', padding: '16px', fontSize: '16px', background: 'none', border: '1px solid rgba(255,255,255,0.25)', marginBottom: '16px', color: 'white' }} placeholder='Email Address' />
        <input type="password" style={{ width: '-webkit-fill-available', height: '40px', padding: '16px', fontSize: '16px', background: 'none', border: '1px solid  rgba(255,255,255,0.25)', borderRadius: '4px', marginBottom: '16px', color: 'white' }} placeholder='Password' />


        <div style={{  display: 'flex', justifyContent: 'space-between', position: 'absolute', bottom: '32px', width: '-webkit-fill-available', marginRight: '32px' }}>
          <button style={{ backgroundColor: '#282828', width: '260px', padding: '16px', color: 'white', borderRadius: '4px' }}>FORGET PASSWORD</button>
          <button style={{ backgroundColor: '#66DC78', width: '260px', padding: '16px', color: 'white', borderRadius: '4px' }}>LOG IN</button>
        </div>
      </div>
    </div>
  );
}

export default App;
