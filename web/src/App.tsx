import './App.css'
import Layout from './components/Layout'
import AppRouter from './routes/AppRouter'

// importing stles
import "./App.css"
import "@arco-design/web-react/dist/css/arco.css"
// import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  return (
    <>
    <Layout>
      <AppRouter />
    </Layout>
    </>
  )
}

export default App
