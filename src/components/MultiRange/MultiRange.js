import React, { useCallback, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import './MultiRange.css'

export const MultiRange = ({ min, max, changePriceMin, onChangePriceMax }) => {
  const minValRef = useRef(min)
  const maxValRef = useRef(max)
  const range = useRef(null)

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  )

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

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(min)
    const maxPercent = getPercent(maxValRef.current)

    if (range.current) {
      range.current.style.left = `${minPercent}%`
      range.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [min, getPercent])

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current)
    const maxPercent = getPercent(max)

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [max, getPercent])

  return (
    <div className="cont">
      <input
        type="range"
        min="0"
        max="1000"
        value={min}
        step="10"
        onChange={handleChangeMin}
        className="thumb thumb--left"
      />
      <input
        type="range"
        min="0"
        max="1000"
        value={max}
        step="10"
        onChange={handleChangeMax}
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
}
