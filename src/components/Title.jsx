import React from 'react'

const Title = () => {
    let css1 = {
        textAlign: 'center',
        fontFamily: 'Public Sans',
        fontSize: '2.5rem',
        fontWeight: 800,
        width: '90%',
        margin: '0 auto',
    }

    let css2 = {
      marginTop: '10px',
      textAlign: 'center',
      fontFamily: 'pretendard',
      fontSize: '1.5rem',
  }

  return (
    <div>
       <h3 style={css1}>SUWON FC OFFICIAL PRODUCTS</h3>
       <p style={css2}>수원FC의 공식 제품들</p>
    </div>
  )
}

export default Title