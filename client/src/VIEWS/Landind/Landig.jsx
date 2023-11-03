import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div>Landing
          <Button type='default' onClick={() => navigate('/home')}>HOME</Button>
    </div>
  )
}

export default Landing