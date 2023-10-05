import React from 'react'

const Title = () => {
    let css1 = {
        marginTop: '150px',
        textAlign: 'center',
        fontFamily: 'Public Sans',
        fontSize: '2.5rem',
        fontWeight: 800
    }

    let css2 = {
      marginbottom: '150px',
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