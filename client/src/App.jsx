
import './App.css'

function App() {

  return (
    <main className={style.mainCont}>
      
      
      {/* AuthProvider es un contexto que permite saber cuando un usuario está logeado */}
      <AuthProvider> 
      {validate && <NavBar/>}
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='home' element={<Home />} />
          <Route path='detail/:id' element={<Detail />} />
          <Route path='createProduct' element={<FormProducts />} />
          <Route path='registeruser' element={<Register />} />
          <Route path='about' element={<ProtectedRoute><AboutUs /></ProtectedRoute>} />
          <Route path='login' element={<LoginFirebase />} />
          <Route path='resetpassword' element={<FormResetPassword/>} />

          <Route path='/controlAdmin' element={<ControlPanel/>} />
          <Route path='/productsAdmin' element={<Products/>} />
          <Route path='/paymentsAdmin' element={<Payments/>} />
          <Route path='/ordersAdmin' element={<Orders/>} />
        <Route path='/clientsAdmin' element={<Clients/>} />
        </Routes>
        {validate && <Footer/>} 
      </AuthProvider>
     
       
    </main>
  )
}

export default App
