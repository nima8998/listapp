import React, {useState} from 'react'
import styled from 'styled-components'

import firstStepAndroid from "../assets/firstStepAndroid.png"
import secondStepAndroid from "../assets/secondStepAndroid.png"
import thirdStepAndroid from "../assets/thirdStepAndroid.png"

const ImageDataSource = [
  {
    id: 1,
    img: firstStepAndroid
  },
  {
    id: 2,
    img: secondStepAndroid
  },
  {
    id: 3,
    img: thirdStepAndroid
  },
]

export default function FirstStep() {
  const [currentImg, setCurrentImg] = useState(1);
  const maxSteps = 3;

  const handleStep = (flow) =>{
    if(flow && currentImg < maxSteps){
        setCurrentImg(currentImg + 1);
    }else if(!flow && currentImg > 1){
        setCurrentImg(currentImg - 1);
    }
}
  return (
    <Wrapper>
        <h2>Podes instalarla en tu celular!</h2> 
        <p>En Android:</p>
        <Carrousel>
          <p className='arrows' onClick={()=>handleStep(false)}>&lt;</p>
            <img src={ImageDataSource.find(({id})=>id === currentImg).img}/>
          <p className='arrows' onClick={()=>handleStep(true)}>&gt;</p>
        </Carrousel>
        <p>
            1.- Esquina superior derecha, ingresar en los 3 puntos.
        </p>
        <p>
            2.- Elegir la opción "Add to Home Screen" o "Agregar al inicio".
        </p>
        <p>
            3.- Confirmar.
        </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;
    width: 90%;
    margin: 0 auto;

    p{
      font-size: .8rem;
    }

    h2{
      font-size: 1.5rem;
    }
`

const Carrousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  width: 80%;
  min-height: 150px;
  max-height: 150px;

  img{
    width: 90%;
    object-fit: cover;
  }
`