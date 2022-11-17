import { Button, Drawer } from 'antd';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import logo from '../../assets/img/logo.svg'
import { data2 } from '../../data/data2'
import { Context } from '../Context/Context'
import { data1 } from '../../data/data1'
const navArr1 = []
const navArr2 = []
const navArr3 = []
const btnData2 = data2
const btnData1 = data1
btnData2.forEach((e,i)=>{
  if(navArr2.includes(e.model) !== true){
    navArr2.push(e.model)
  }
})
btnData1.forEach((e,i)=>{
  if(navArr1.includes(e.model) !== true){
    navArr1.push(e.model)
  }
})


function Navbar() {
  const { setMysearch} = useContext(Context)
  const [open, setOpen] = useState(false);
  const inpValEmpty = useRef()
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const {order, setOrder} =  useContext(Context)
  const [bor, setBor] = useState(0)
  const { setCategory} = useContext(Context)
  const handlerCategory = (e)=>{
    setCategory(e.target.value);
    setMysearch(false)
    inpValEmpty.current.value = ''
  }
  useEffect(()=>{
    if(order.length >= 1){
      setBor(1)
    }
  },[order])

  const handlerRemove = (e)=>{
    setOrder(order.filter((k)=> k.id !== e.currentTarget.id));
  }
  return (
    <div className='container'>
        <div className="navbar">
          <div className="nav__top">
            <ul className='nav__contacts'>
              <li>
                <a href="#">Chat with us</a>
              </li>
              <li>
                <a href="tel: +420 336 775 664">+420 336 775 664</a>
              </li>
              <li>
                <a href="mailto:info@freshnesecom.com">info@freshnesecom.com</a>
              </li>
            </ul>
            <ul className='nav__links'>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div className="nav__search">
              <Link to='/'>
                  <img src={logo} alt="" />
              </Link>
              <input ref={inpValEmpty} onChange={(e)=> setMysearch(e.target.value)} type="text"  placeholder='Search Products, categories ...'/>
              <div className='sign__cart'>
                <span className={order.length <= 0 ? 'my__none': 'sign'}>{order.length > 0 ? order.length: ''}</span>
              <Button  onClick={showDrawer}><i className={bor == 0? 'bi bi-bag': 'bi bi-bag-fill'}></i></Button>
              
              <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
                {
                  order?.map((e,i)=>(
                    <div className='cart__item' key={i}>
                      <img src={e.img} alt="" />
                      <div>
                        <p>{e.name}</p>
                        <p>{e.number}</p>
                      </div>
                      <button id={e.id} onClick={handlerRemove} className='btn btn-danger'><i className="bi bi-trash3-fill"></i></button>
                    </div>
                  ))
                }

              </Drawer>
              </div>
          </div>
          <div className="nav__main">
            <ul className='nav__category'>
              <Link to='/phone'>
              <select className='form-select' onChange={handlerCategory} name="" id="">
              <option value='0'>All phone</option>
              {
                navArr2 && navArr2.map((e,i)=>(
                  <option key={i} value={e} id={e}>{e}</option>
                ))
              }
              </select>
              </Link>
              <Link to='/clothes'>
              <select  className='form-select' onChange={handlerCategory} name="" id="">
              <option value='0'>All clothes</option>
              {
                navArr1 && navArr1.map((e,i)=>(
                  <option key={i} value={e} id={e}>{e}</option>
              
                ))
              }
              </select>
              </Link>
              <Link to='/food'>
              <select  className='form-select' onChange={handlerCategory} name="" id="">
              <option value='0'>All food</option>
              {
                navArr3 && navArr3.map((e,i)=>(
                  <option key={i} value={e} id={e}>{e}</option>
              
                ))
              }
              </select>
              </Link>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Navbar