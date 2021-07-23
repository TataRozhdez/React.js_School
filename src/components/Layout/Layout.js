import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap'

import history from '../../services/history'
import { calcOrders } from '../../utils'
import { onUpload } from '../../bus/uploadModal/selectors'
import { onVisibleUpload } from '../../bus/uploadModal/actions'
import { patchProduct, postProduct } from '../../bus/uploadModal/thunks'
import { getOrder, getOrderTotal } from '../../bus/order/newOrder/selectors'
import { setOrder } from './../../bus/order/newOrder/actions'
import { setTotal } from '../../bus/order/newOrder/actions'

import { Header } from '../Header/Header'
import { UploadModal } from '../UploadModal/UploadModal'
import { CustomSpinner } from '../CustomSpinner/CustomSpinner'

export const Layout = ({ children }) => {
  const location = history.location.pathname
  const dispatch = useDispatch()

  const { order } = useSelector(getOrder)
  const total = useSelector(getOrderTotal)

  const { loading, error, successMsg, visible } = useSelector(onUpload)

  const onUploadedVisible = () => dispatch(onVisibleUpload(!visible))

  const onAddProduct = (form, id) => {
    const data = {
      product: {
        name: form.name,
        price: form.price,
        origin: form.origin.value,
      },
    }

    id ? dispatch(patchProduct({ id, data })) : dispatch(postProduct(data))
  }

  useEffect(() => {
    if (!order) return dispatch(setOrder())

    dispatch(setTotal(calcOrders(order)))
  }, [order])

  return (
    <React.Fragment>
      {loading && <CustomSpinner />}
      {error && <Alert variant="danger">{error}</Alert>}
      {successMsg && <Alert variant="success">{successMsg}</Alert>}

      <UploadModal
        show={visible}
        onHide={onUploadedVisible}
        onSubmit={onAddProduct}
      />

      <Header
        totalOrder={total}
        pathname={location}
        onUploadedVisible={onUploadedVisible}
      />
      {children}
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
