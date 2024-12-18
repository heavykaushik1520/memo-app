import React, { memo, useRef } from 'react'

function Display() {
    let useRefData = useRef(0)
  return (
    <>
      <h1>
        Hello I am Display {useRefData.current ++}
      </h1>
    </>
  )
}

export default memo(Display)
