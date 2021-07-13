import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import './MultiRange.css'

export const MultiRange = ({
  min,
  max,
  changePriceMin,
  onChangePriceMax,
  onFetchProducts,
}) => {
  const minValRef = useRef(min)
  const maxValRef = useRef(max)
  const range = useRef(null)

  const handleChangeMin = (event) => {
    const value = Math.min(Number(event.target.value), max - 1)
    changePriceMin(value)
    minValRef.current = value
  }

  const handleChangeMax = (event) => {
    const value = Math.max(Number(event.target.value), min + 1)
    onChangePriceMax(value)
    maxValRef.current = value
  }

  useEffect(() => {
    const minPercent = Math.round(((minValRef.current - 0) / (max - 0)) * 100)
    const maxPercent = Math.round(
      ((maxValRef.current - min) / (1000 - min)) * 100
    )

    if (range.current) {
      range.current.style.left = `${minPercent}%`
      range.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [min, max])

  return (
    <div className="cont">
      <input
        type="range"
        min="0"
        max="1000"
        value={min}
        step="10"
        onChange={handleChangeMin}
        onMouseOut={onFetchProducts}
        className="thumb thumb--left"
      />
      <input
        type="range"
        min="0"
        max="1000"
        value={max}
        step="10"
        onChange={handleChangeMax}
        onMouseOut={onFetchProducts}
        className="thumb thumb--right"
      />
      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        <div className="slider__left-value">{min}</div>
        <div className="slider__right-value">{max}</div>
      </div>
    </div>
  )
}

MultiRange.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  changePriceMin: PropTypes.func.isRequired,
  onChangePriceMax: PropTypes.func.isRequired,
  onFetchProducts: PropTypes.func.isRequired,
}
